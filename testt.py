from flask import Flask, request, render_template, send_from_directory
import os
from functools import wraps
from urllib.parse import urlparse, parse_qs
from controllers.models import Cards
from controllers.utils import get_short_id, timestamp
from flask_cors import CORS

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

# ========== Api routes below ====================

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




@app.get('/cards')
@middleware
def all_cards(shop):
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


if __name__ == '__main__':
    app.run(debug=True)


