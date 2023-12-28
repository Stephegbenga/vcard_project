from controllers.models import Cards
import random
from datetime import datetime, timedelta

def get_short_id():
    while True:
        characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        random_string = ''.join(random.choice(characters) for _ in range(5))
        exist = Cards.find_one({"short_id": random_string})
        if not exist:
            return random_string

def timestamp():
    return datetime.utcnow().isoformat()

