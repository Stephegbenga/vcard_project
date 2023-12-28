from controllers.models import Cards



data = {"state": "Alabama", "country":"usa", "phone_mobile":"1928928902829", "phone_private":"827827822", "phone_work":"134333", "street" :"washington dc", "city":"san francisco"}
Cards.update_many({}, {"$set": data})