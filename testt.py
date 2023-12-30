from controllers.models import Cards

cards = Cards.find({})

for card in cards:
    print("\n")
    print(card)
    print("\n")
