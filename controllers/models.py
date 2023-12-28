from dotenv import load_dotenv
load_dotenv()
from pymongo import MongoClient
import os

DB_URL=os.getenv("database_url")

conn = MongoClient(DB_URL)
db = conn.get_database("vcard_db")

#shop, id
Cards = db.get_collection("cards")



