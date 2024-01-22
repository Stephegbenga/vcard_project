from controllers.models import Cards
import random
from datetime import datetime, timedelta
from functools import wraps
from urllib.parse import urlparse, parse_qs
from flask import request
from config import SHOPIFY_CONFIG
import hmac
import hashlib

def get_short_id():
    while True:
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        random_string = ''.join(random.choice(characters) for _ in range(5))
        exist = Cards.find_one({"short_id": random_string})
        if not exist:
            return random_string

def timestamp():
    return datetime.utcnow().isoformat()


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


def verify_shopify_request_path(request):
    shopify_app_secret = SHOPIFY_CONFIG['API_SECRET']  # Replace with your Shopify App Secret

    hmac_parameter = request.args.get('hmac')
    other_parameters = request.args.copy()
    other_parameters.pop('hmac', None)

    # Sort the parameters by key
    sorted_parameters = '&'.join(['{}={}'.format(k, other_parameters[k]) for k in sorted(other_parameters)])

    # Calculate the HMAC using the Shopify App Secret
    calculated_hmac = hmac.new(shopify_app_secret.encode('utf-8'), sorted_parameters.encode('utf-8'), hashlib.sha256).hexdigest()

    # Compare the calculated HMAC with the one provided in the request
    return calculated_hmac == hmac_parameter



def hmac_sha256(key, data):
    return hmac.new(key, data, hashlib.sha256).hexdigest()


def verify_shopify_request_header(request):
    shopify_app_secret = SHOPIFY_CONFIG['API_SECRET']  # Replace with your Shopify App Secret

    # Get the provided HMAC from the request header
    provided_hmac = request.headers.get('X-Shopify-Hmac-Sha256')

    if not provided_hmac:
        return False

    # Get the request data and calculate the HMAC
    request_data = request.get_data()
    calculated_hmac = hmac_sha256(shopify_app_secret.encode('utf-8'), request_data)

    # Compare the provided and calculated HMACs
    return provided_hmac == calculated_hmac