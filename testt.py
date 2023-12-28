# import jwt
#
# def verify_shopify_session(session_token, api_secret):
#     try:
#         # Decode the JWT token using the Shopify API secret as the key
#         decoded_token = jwt.decode(session_token, api_secret, algorithms=['HS256'])
#
#         # Verify the decoded token as needed
#         # For example, you might check the 'iss' (issuer) and 'exp' (expiration) claims
#
#         # Access the decoded information
#         shop = decoded_token.get('shop')
#         user_id = decoded_token.get('user_id')
#
#         # Perform additional verification or processing as needed
#
#         return shop, user_id
#
#     except jwt.ExpiredSignatureError:
#         # The token has expired
#         print("Token has expired")
#
#     except jwt.InvalidTokenError:
#         # The token is invalid
#         print("Invalid token")
#
# # Example usage
# session_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczpcL1wvcXVpY2tzdGFydC00Y2I4MWM1Ny5teXNob3BpZnkuY29tXC9hZG1pbiIsImRlc3QiOiJodHRwczpcL1wvcXVpY2tzdGFydC00Y2I4MWM1Ny5teXNob3BpZnkuY29tIiwiYXVkIjoiOTg2ZTA4YzIwMGFiYTlkMmE0Mjg3MjY4ZTliYmYwNDAiLCJzdWIiOiI4Mzc3ODUzNTYwMSIsImV4cCI6MTcwMjk4MDk5MywibmJmIjoxNzAyOTgwOTMzLCJpYXQiOjE3MDI5ODA5MzMsImp0aSI6IjE1NThmOGRhLWE3NzgtNDM1ZS04Y2UyLWEwYTBjMGQ0YTkzZiIsInNpZCI6IjJmN2RiMDUzZTMwNTcwNWIzMTU1YzYzZjZlZmQ1Zjk3OTliZjAyOGI4YTQzNTEwZmU5YWM0ZDQ0Yzk0NzRkYjciLCJzaWciOiIxODRjZWRjM2NkN2VlMTA1ZjNhZjdhNzRjNTgyNzc1MjQ3ZTRhN2VlNjU0ZGNhOGZhMWRhODM3MTg2ZWRlOGZjIn0.oIoZcd1C7IN_6IF-wWkg1EkNAiRRTg4UaeWvHaCqW"
# api_secret = "a10e851396bd283fe7b2fbb1775ab8c2"
#
# shop, user_id = verify_shopify_session(session_token, api_secret)
#
# if shop and user_id:
#     print(f"Verified session for shop: {shop}, user ID: {user_id}")
# else:
#     print("Session verification failed")

from controllers.models import Cards
from controllers.utils import timestamp

Cards.update_many({}, {"$set": {"created_at": timestamp()}, "$unset": {"timestamp": ""}})

cards = Cards.find({})
for card in cards:
    print("\n")
    print(card)