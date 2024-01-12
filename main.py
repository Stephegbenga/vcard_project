from flask import Flask, request, render_template, send_from_directory,  redirect, Response
import os, requests, json
from functools import wraps
from urllib.parse import urlparse, parse_qs
from controllers.models import Cards
from controllers.utils import get_short_id, timestamp
from flask_cors import CORS
from config import SHOPIFY_CONFIG

app = Flask(__name__, static_folder='frontend/build')

CORS(app)


# ========== Static routes below ====================
# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


def middleware(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        referer = request.headers.get('Referer')
        if not referer:
            return {"message": "unauthorized"}, 401

        parsed_url = urlparse(referer)
        query_parameters = parse_qs(parsed_url.query)

        shop = query_parameters.get('shop', [None])[0]

        if not shop:
            shop = "test_shop"
        #     return {"message":"authorized"}, 401

        kwargs['shop'] = shop
        return f(*args, **kwargs)

    return decorated_function


# ====================== Installation routes below ================================

@app.route('/install', methods=['GET'])
def install():
    if request.args.get('shop'):
        shop = request.args.get('shop')
    else:
        return Response(response="Error:parameter shop not found", status=500)

    auth_url = f"https://{shop}/admin/oauth/authorize?client_id={SHOPIFY_CONFIG['API_KEY']}&redirect_uri={SHOPIFY_CONFIG['REDIRECT_URI']}"
    return redirect(auth_url)



@app.route('/callback', methods=['GET'])
def callback():
    if request.args.get("shop"):
        params = {"client_id": SHOPIFY_CONFIG["API_KEY"], "client_secret": SHOPIFY_CONFIG["API_SECRET"], "code": request.args.get("code")}
        resp = requests.post("https://{0}/admin/oauth/access_token".format(request.args.get("shop")), data=params)

        if 200 == resp.status_code:
            resp_json = json.loads(resp.text)

            endpoint = "/admin/products.json"

            headers = {"X-Shopify-Access-Token": resp_json.get("access_token"), "Content-Type": "application/json"}
            response = requests.get("https://{0}{1}".format(request.args.get("shop"), endpoint), headers=headers)

            access_token = resp_json.get("access_token")
            shop = request.args.get("shop")

            payload = {"shop": shop, "access_token": access_token}
            return "<h2>Hello World</h2>"
        else:
            return "<h2>Hello World</h2>"


# ========== Api routes below ====================

@app.get('/cards')
@middleware
def all_cards(shop):
    print(shop)
    cards = list(Cards.find({"shop": shop}, {"_id": 0}))
    return {"status":"success", "data": cards}



@app.get('/card/<id>')
def get_card(id):
    query = {"$or": [{"short_id": id}, {"id": id}]}
    card = Cards.find_one(query, {"_id": 0})
    if not card:
        return {"message": "not found"}, 404

    new_scans = (card.get("scans") or 0) + 1
    Cards.update_one(query, {"$set": {"scans": new_scans}})
    return card



@app.post('/card')
@middleware
def create_card(shop):
    req = request.json
    card = Cards.find_one({"id": req['id']})
    if not card:
        short_id = get_short_id()
        req['short_id'] = short_id
        req['scans'] = 0
        req['created_at'] = timestamp()

    Cards.update_one({"shop": shop, "id": req['id']}, {"$set": req}, upsert=True)
    return req


@app.post('/customer/data/request')
def customer_data_request():
    return "received"


@app.post('/customer/data/delete')
def customer_data_delete():
    return "received"


if __name__ == '__main__':
    app.run()


