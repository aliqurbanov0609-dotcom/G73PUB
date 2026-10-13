/* Garage 73 Pub — static menu database. Edit prices/text here; no server required. */
const MENU_DATABASE = {
  "schemaVersion": 1,
  "defaultLanguage": "en",
  "currency": "AZN",
  "languages": [
    "az",
    "en",
    "ru"
  ],
  "ui": {
    "az": {
      "kitchen": "MƏTBƏX",
      "bar": "BAR",
      "back": "GERİ",
      "home": "ƏSAS SƏHİFƏ",
      "loading": "Yüklənir…",
      "price": "Qiymət"
    },
    "en": {
      "kitchen": "KITCHEN",
      "bar": "BAR",
      "back": "BACK",
      "home": "HOME",
      "loading": "Loading…",
      "price": "Price"
    },
    "ru": {
      "kitchen": "КУХНЯ",
      "bar": "БАР",
      "back": "НАЗАД",
      "home": "ГЛАВНАЯ",
      "loading": "Загрузка…",
      "price": "Цена"
    }
  },
  "sections": {
    "kitchen": [
      {
        "id": "sandwiches-breakfast",
        "name": {
          "en": "SANDWICHES & BREAKFAST",
          "ru": "СЭНДВИЧИ И ЗАВТРАКИ",
          "az": "SENDVIÇLƏR VƏ SƏHƏR YEMƏYİ"
        },
        "items": [
          {
            "id": "full-english-breakfast",
            "name": {
              "en": "Full English Breakfast",
              "ru": "Full English Breakfast",
              "az": "Full English Breakfast"
            },
            "prices": [
              {
                "amount": 16,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/full-english-breakfast.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "omelette",
            "name": {
              "en": "Omelette",
              "ru": "Omelette",
              "az": "Omelette"
            },
            "prices": [
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/omelette.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "hamburger",
            "name": {
              "en": "Hamburger",
              "ru": "Hamburger",
              "az": "Hamburger"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/hamburger.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-burger",
            "name": {
              "en": "Chicken Burger",
              "ru": "Chicken Burger",
              "az": "Chicken Burger"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-burger.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-breast-sandwich",
            "name": {
              "en": "Chicken Breast Sandwich",
              "ru": "Chicken Breast Sandwich",
              "az": "Chicken Breast Sandwich"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-breast-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "club-sandwich",
            "name": {
              "en": "Club Sandwich",
              "ru": "Club Sandwich",
              "az": "Club Sandwich"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/club-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "steak-sandwich",
            "name": {
              "en": "Steak Sandwich",
              "ru": "Steak Sandwich",
              "az": "Steak Sandwich"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/steak-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "fish-sandwich",
            "name": {
              "en": "Fish Sandwich",
              "ru": "Fish Sandwich",
              "az": "Fish Sandwich"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/fish-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "toast-sandwich",
            "name": {
              "en": "Toast Sandwich",
              "ru": "Toast Sandwich",
              "az": "Toast Sandwich"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/toast-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chili-cheese-hot-dogs",
            "name": {
              "en": "Chili Cheese Hot Dogs",
              "ru": "Chili Cheese Hot Dogs",
              "az": "Chili Cheese Hot Dogs"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              },
              {
                "amount": 12,
                "currency": "AZN"
              },
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chili-cheese-hot-dogs.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "ala-mexicana-sandwich",
            "name": {
              "en": "Ala Mexicana Sandwich",
              "ru": "Ala Mexicana Sandwich",
              "az": "Ala Mexicana Sandwich"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              },
              {
                "amount": 11,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/ala-mexicana-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "mix-salami-sandwich",
            "name": {
              "en": "Mix Salami Sandwich",
              "ru": "Mix Salami Sandwich",
              "az": "Mix Salami Sandwich"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/mix-salami-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "smoked-beef-sandwich",
            "name": {
              "en": "Smoked Beef Sandwich",
              "ru": "Smoked Beef Sandwich",
              "az": "Smoked Beef Sandwich"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/smoked-beef-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "smoked-turkey-sandwich",
            "name": {
              "en": "Smoked Turkey Sandwich",
              "ru": "Smoked Turkey Sandwich",
              "az": "Smoked Turkey Sandwich"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/smoked-turkey-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "smoked-salmon-sandwich",
            "name": {
              "en": "Smoked Salmon Sandwich",
              "ru": "Smoked Salmon Sandwich",
              "az": "Smoked Salmon Sandwich"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/smoked-salmon-sandwich.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "bacon-roll",
            "name": {
              "en": "Bacon Roll",
              "ru": "Bacon Roll",
              "az": "Bacon Roll"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/bacon-roll.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "liver-onion-roll",
            "name": {
              "en": "Liver Onion Roll",
              "ru": "Liver Onion Roll",
              "az": "Liver Onion Roll"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/liver-onion-roll.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "quesadillas",
            "name": {
              "en": "Quesadillas",
              "ru": "Quesadillas",
              "az": "Quesadillas"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/quesadillas.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "burrito-wrap",
            "name": {
              "en": "Burrito Wrap",
              "ru": "Burrito Wrap",
              "az": "Burrito Wrap"
            },
            "prices": [
              {
                "amount": 19,
                "currency": "AZN"
              },
              {
                "amount": 17,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/burrito-wrap.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "soups",
        "name": {
          "en": "SOUPS",
          "ru": "СУПЫ",
          "az": "ŞORBALAR"
        },
        "items": [
          {
            "id": "dushbara",
            "name": {
              "en": "Dushbara",
              "ru": "Dushbara",
              "az": "Dushbara"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/dushbara.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "salads",
        "name": {
          "en": "SALADS",
          "ru": "САЛАТЫ",
          "az": "SALATLAR"
        },
        "items": [
          {
            "id": "tuna-fish-salad",
            "name": {
              "en": "Tuna Fish Salad",
              "ru": "Tuna Fish Salad",
              "az": "Tuna Fish Salad"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/tuna-fish-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-salad",
            "name": {
              "en": "Chicken Salad",
              "ru": "Chicken Salad",
              "az": "Chicken Salad"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-caesar-salad",
            "name": {
              "en": "Chicken Caesar Salad",
              "ru": "Chicken Caesar Salad",
              "az": "Chicken Caesar Salad"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-caesar-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "seafood-caesar-salad",
            "name": {
              "en": "Seafood Caesar Salad",
              "ru": "Seafood Caesar Salad",
              "az": "Seafood Caesar Salad"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/seafood-caesar-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "greek-salad",
            "name": {
              "en": "Greek Salad",
              "ru": "Greek Salad",
              "az": "Greek Salad"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/greek-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "fresh-salad",
            "name": {
              "en": "Fresh Salad",
              "ru": "Fresh Salad",
              "az": "Fresh Salad"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/fresh-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "shrimp-cocktail",
            "name": {
              "en": "Shrimp Cocktail",
              "ru": "Shrimp Cocktail",
              "az": "Shrimp Cocktail"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/shrimp-cocktail.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "smoked-salmon-salad",
            "name": {
              "en": "Smoked Salmon Salad",
              "ru": "Smoked Salmon Salad",
              "az": "Smoked Salmon Salad"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/smoked-salmon-salad.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "starters",
        "name": {
          "en": "STARTERS",
          "ru": "ЗАКУСКИ",
          "az": "QƏLYANALTILAR"
        },
        "items": [
          {
            "id": "onion-rings",
            "name": {
              "en": "Onion Rings",
              "ru": "Onion Rings",
              "az": "Onion Rings"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/onion-rings.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-cajun-nuggets",
            "name": {
              "en": "Chicken Cajun Nuggets",
              "ru": "Chicken Cajun Nuggets",
              "az": "Chicken Cajun Nuggets"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-cajun-nuggets.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "potato-skins",
            "name": {
              "en": "Potato Skins",
              "ru": "Potato Skins",
              "az": "Potato Skins"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/potato-skins.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "deep-fried-mushroom",
            "name": {
              "en": "Deep Fried Mushroom",
              "ru": "Deep Fried Mushroom",
              "az": "Deep Fried Mushroom"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/deep-fried-mushroom.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "scampi",
            "name": {
              "en": "Scampi",
              "ru": "Scampi",
              "az": "Scampi"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/scampi.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-wings",
            "name": {
              "en": "Chicken Wings",
              "ru": "Chicken Wings",
              "az": "Chicken Wings"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-wings.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cheese-nachos",
            "name": {
              "en": "Cheese Nachos",
              "ru": "Cheese Nachos",
              "az": "Cheese Nachos"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/cheese-nachos.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "beef-cheese-nachos",
            "name": {
              "en": "Beef Cheese Nachos",
              "ru": "Beef Cheese Nachos",
              "az": "Beef Cheese Nachos"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/beef-cheese-nachos.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-cheese-nachos",
            "name": {
              "en": "Chicken Cheese Nachos",
              "ru": "Chicken Cheese Nachos",
              "az": "Chicken Cheese Nachos"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-cheese-nachos.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "spring-rolls",
            "name": {
              "en": "Spring Rolls",
              "ru": "Spring Rolls",
              "az": "Spring Rolls"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/spring-rolls.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "deep-fried-smoked-cheese",
            "name": {
              "en": "Deep Fried Smoked Cheese",
              "ru": "Deep Fried Smoked Cheese",
              "az": "Deep Fried Smoked Cheese"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/deep-fried-smoked-cheese.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "deep-fried-halloumi-cheese",
            "name": {
              "en": "Deep Fried Halloumi Cheese",
              "ru": "Deep Fried Halloumi Cheese",
              "az": "Deep Fried Halloumi Cheese"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/deep-fried-halloumi-cheese.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "khinkali-ajika",
            "name": {
              "en": "Khinkali with Ajika Sauce",
              "ru": "Khinkali with Ajika Sauce",
              "az": "Khinkali with Ajika Sauce"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/khinkali-ajika.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "pasta-garnish",
        "name": {
          "en": "PASTA & GARNISH",
          "ru": "ПАСТА И ГАРНИРЫ",
          "az": "MAKARON VƏ QARNİRLƏR"
        },
        "items": [
          {
            "id": "spaghetti-bolognese",
            "name": {
              "en": "Spaghetti Bolognese",
              "ru": "Spaghetti Bolognese",
              "az": "Spaghetti Bolognese"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/spaghetti-bolognese.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "spaghetti-carbonara",
            "name": {
              "en": "Spaghetti Carbonara",
              "ru": "Spaghetti Carbonara",
              "az": "Spaghetti Carbonara"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/spaghetti-carbonara.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "penne-alfredo",
            "name": {
              "en": "Penne Alfredo",
              "ru": "Penne Alfredo",
              "az": "Penne Alfredo"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/penne-alfredo.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "penne-arrabbiata",
            "name": {
              "en": "Penne All Arrabbiata",
              "ru": "Penne All Arrabbiata",
              "az": "Penne All Arrabbiata"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/penne-arrabbiata.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "singapore-noodles",
            "name": {
              "en": "Singapore Noodles",
              "ru": "Singapore Noodles",
              "az": "Singapore Noodles"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/singapore-noodles.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "special-fried-rice",
            "name": {
              "en": "Special Fried Rice",
              "ru": "Special Fried Rice",
              "az": "Special Fried Rice"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/special-fried-rice.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "garlic-cheese-mashed-potato",
            "name": {
              "en": "Garlic Cheese Mashed Potato",
              "ru": "Garlic Cheese Mashed Potato",
              "az": "Garlic Cheese Mashed Potato"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/garlic-cheese-mashed-potato.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "french-fries",
            "name": {
              "en": "French Fries",
              "ru": "French Fries",
              "az": "French Fries"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/french-fries.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "french-fries-cheese",
            "name": {
              "en": "French Fries with Cheese",
              "ru": "French Fries with Cheese",
              "az": "French Fries with Cheese"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/french-fries-cheese.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "pizza-salami",
            "name": {
              "en": "Pizza with Salami",
              "ru": "Pizza with Salami",
              "az": "Pizza with Salami"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/pizza-salami.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "pizza-chicken",
            "name": {
              "en": "Pizza with Chicken",
              "ru": "Pizza with Chicken",
              "az": "Pizza with Chicken"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/pizza-chicken.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "main-course-poultry",
        "name": {
          "en": "MAIN COURSE POULTRY",
          "ru": "ГОРЯЧИЕ БЛЮДА: ПТИЦА",
          "az": "ƏSAS YEMƏKLƏR: QUŞ ƏTİ"
        },
        "items": [
          {
            "id": "manchurian-chicken",
            "name": {
              "en": "Manchurian Chicken",
              "ru": "Manchurian Chicken",
              "az": "Manchurian Chicken"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/manchurian-chicken.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-ala-italiano",
            "name": {
              "en": "Chicken Ala Italiano",
              "ru": "Chicken Ala Italiano",
              "az": "Chicken Ala Italiano"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-ala-italiano.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-cordon-blue",
            "name": {
              "en": "Chicken Cordon Blue",
              "ru": "Chicken Cordon Blue",
              "az": "Chicken Cordon Blue"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-cordon-blue.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-ala-parisienne",
            "name": {
              "en": "Chicken Ala Parisienne",
              "ru": "Chicken Ala Parisienne",
              "az": "Chicken Ala Parisienne"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-ala-parisienne.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-korma",
            "name": {
              "en": "Chicken Korma",
              "ru": "Chicken Korma",
              "az": "Chicken Korma"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-korma.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-tikka-masala",
            "name": {
              "en": "Chicken Tikka Masala",
              "ru": "Chicken Tikka Masala",
              "az": "Chicken Tikka Masala"
            },
            "prices": [
              {
                "amount": 14,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-tikka-masala.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "schnitzel",
            "name": {
              "en": "Schnitzel",
              "ru": "Schnitzel",
              "az": "Schnitzel"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/schnitzel.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-pie",
            "name": {
              "en": "Chicken Pie",
              "ru": "Chicken Pie",
              "az": "Chicken Pie"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-pie.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-curry",
            "name": {
              "en": "Chicken Curry",
              "ru": "Chicken Curry",
              "az": "Chicken Curry"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-curry.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-with-prawns",
            "name": {
              "en": "Chicken with Prawns",
              "ru": "Chicken with Prawns",
              "az": "Chicken with Prawns"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-with-prawns.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-fajitas",
            "name": {
              "en": "Chicken Fajitas",
              "ru": "Chicken Fajitas",
              "az": "Chicken Fajitas"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-fajitas.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "roast-chicken",
            "name": {
              "en": "Roast Chicken",
              "ru": "Roast Chicken",
              "az": "Roast Chicken"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/roast-chicken.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chicken-kabab-stick",
            "name": {
              "en": "Chicken Kabab on the Stick",
              "ru": "Chicken Kabab on the Stick",
              "az": "Chicken Kabab on the Stick"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chicken-kabab-stick.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "main-course-sea-food",
        "name": {
          "en": "MAIN COURSE SEA FOOD",
          "ru": "ГОРЯЧИЕ БЛЮДА: МОРЕПРОДУКТЫ",
          "az": "ƏSAS YEMƏKLƏR: DƏNİZ MƏHSULLARI"
        },
        "items": [
          {
            "id": "fish-and-chips",
            "name": {
              "en": "Fish and Chips",
              "ru": "Fish and Chips",
              "az": "Fish and Chips"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/fish-and-chips.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "special-prawns",
            "name": {
              "en": "Special Prawns",
              "ru": "Special Prawns",
              "az": "Special Prawns"
            },
            "prices": [
              {
                "amount": 19,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/special-prawns.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "mushroom-prawns",
            "name": {
              "en": "Mushroom Prawns",
              "ru": "Mushroom Prawns",
              "az": "Mushroom Prawns"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/mushroom-prawns.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "prawns-with-chicken",
            "name": {
              "en": "Prawns with Chicken",
              "ru": "Prawns with Chicken",
              "az": "Prawns with Chicken"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/prawns-with-chicken.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "prawns-bacon",
            "name": {
              "en": "Prawns Wrapped in Bacon",
              "ru": "Prawns Wrapped in Bacon",
              "az": "Prawns Wrapped in Bacon"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/prawns-bacon.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "breaded-prawns-tartar",
            "name": {
              "en": "Breaded Prawns with Tartar Sauce",
              "ru": "Breaded Prawns with Tartar Sauce",
              "az": "Breaded Prawns with Tartar Sauce"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/breaded-prawns-tartar.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sturgeon-kebab",
            "name": {
              "en": "Sturgeon Kebab",
              "ru": "Sturgeon Kebab",
              "az": "Sturgeon Kebab"
            },
            "prices": [
              {
                "amount": 25,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/sturgeon-kebab.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sturgeon-milanese",
            "name": {
              "en": "Sturgeon Milanese",
              "ru": "Sturgeon Milanese",
              "az": "Sturgeon Milanese"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/sturgeon-milanese.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "main-course-meat",
        "name": {
          "en": "MAIN COURSE MEAT",
          "ru": "ГОРЯЧИЕ БЛЮДА: МЯСО",
          "az": "ƏSAS YEMƏKLƏR: ƏT"
        },
        "items": [
          {
            "id": "steak-pie",
            "name": {
              "en": "Steak Pie",
              "ru": "Steak Pie",
              "az": "Steak Pie"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/steak-pie.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "bangers-and-mash",
            "name": {
              "en": "Bangers and Mash",
              "ru": "Bangers and Mash",
              "az": "Bangers and Mash"
            },
            "prices": [
              {
                "amount": 13,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/bangers-and-mash.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chorizo-steak",
            "name": {
              "en": "Chorizo Steak",
              "ru": "Chorizo Steak",
              "az": "Chorizo Steak"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/chorizo-steak.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sabana-steak",
            "name": {
              "en": "Sabana Steak",
              "ru": "Sabana Steak",
              "az": "Sabana Steak"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/sabana-steak.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "steak",
            "name": {
              "en": "Steak",
              "ru": "Steak",
              "az": "Steak"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/steak.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "fillet-mignon",
            "name": {
              "en": "Fillet Mignon",
              "ru": "Fillet Mignon",
              "az": "Fillet Mignon"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/fillet-mignon.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "veal-ala-parisienne",
            "name": {
              "en": "Veal Ala Parisienne",
              "ru": "Veal Ala Parisienne",
              "az": "Veal Ala Parisienne"
            },
            "prices": [
              {
                "amount": 22,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/veal-ala-parisienne.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "pork-chop",
            "name": {
              "en": "Pork Chop",
              "ru": "Pork Chop",
              "az": "Pork Chop"
            },
            "prices": [
              {
                "amount": 22,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/pork-chop.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "beef-kebab-stick",
            "name": {
              "en": "Beef Kebab on the Stick",
              "ru": "Beef Kebab on the Stick",
              "az": "Beef Kebab on the Stick"
            },
            "prices": [
              {
                "amount": 25,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/beef-kebab-stick.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "grilled-bacon-steak",
            "name": {
              "en": "Grilled Bacon Steak",
              "ru": "Grilled Bacon Steak",
              "az": "Grilled Bacon Steak"
            },
            "prices": [
              {
                "amount": 12,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/grilled-bacon-steak.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "lamb-chops-kebab",
            "name": {
              "en": "Lamb Chops Kebab",
              "ru": "Lamb Chops Kebab",
              "az": "Lamb Chops Kebab"
            },
            "prices": [
              {
                "amount": 18,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/lamb-chops-kebab.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "ribeye-steak",
            "name": {
              "en": "Ribeye Steak",
              "ru": "Ribeye Steak",
              "az": "Ribeye Steak"
            },
            "prices": [
              {
                "amount": 30,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/ribeye-steak.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "liver-onion-bacon",
            "name": {
              "en": "Liver Onion Bacon",
              "ru": "Liver Onion Bacon",
              "az": "Liver Onion Bacon"
            },
            "prices": [
              {
                "amount": 17,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/liver-onion-bacon.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "osso-buco",
            "name": {
              "en": "Osso Buco",
              "ru": "Osso Buco",
              "az": "Osso Buco"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/osso-buco.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "lamb-shank",
            "name": {
              "en": "Lamb Shank",
              "ru": "Lamb Shank",
              "az": "Lamb Shank"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/lamb-shank.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "beef-sausage-chips",
            "name": {
              "en": "Beef Sausage with Chips",
              "ru": "Beef Sausage with Chips",
              "az": "Beef Sausage with Chips"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/beef-sausage-chips.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "desserts-hot-drinks",
        "name": {
          "en": "DESSERTS & HOT DRINKS",
          "ru": "ДЕСЕРТЫ И ГОРЯЧИЕ НАПИТКИ",
          "az": "ŞİRNIYYATLAR VƏ İSTİ İÇKİLƏR"
        },
        "items": [
          {
            "id": "apple-pie",
            "name": {
              "en": "Apple Pie",
              "ru": "Apple Pie",
              "az": "Apple Pie"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/apple-pie.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "ice-cream",
            "name": {
              "en": "Ice Cream",
              "ru": "Ice Cream",
              "az": "Ice Cream"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/ice-cream.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "tea",
            "name": {
              "en": "Tea",
              "ru": "Tea",
              "az": "Tea"
            },
            "prices": [
              {
                "amount": 2,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/tea.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "coffee",
            "name": {
              "en": "Coffee",
              "ru": "Coffee",
              "az": "Coffee"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/coffee.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cappuccino",
            "name": {
              "en": "Cappuccino",
              "ru": "Cappuccino",
              "az": "Cappuccino"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/cappuccino.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "hot-chocolate",
            "name": {
              "en": "Hot Chocolate",
              "ru": "Hot Chocolate",
              "az": "Hot Chocolate"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/food/hot-chocolate.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      }
    ],
    "bar": [
      {
        "id": "draft-beer",
        "name": {
          "en": "DRAFT BEER",
          "ru": "РАЗЛИВНОЕ ПИВО",
          "az": "ÇƏMƏK PİVƏ"
        },
        "items": [
          {
            "id": "garage-special",
            "name": {
              "en": "Garage Special",
              "ru": "Garage Special",
              "az": "Garage Special"
            },
            "variants": [
              {
                "volumeMl": 0.3,
                "price": 4,
                "currency": "AZN"
              },
              {
                "volumeMl": 0.5,
                "price": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/garage-special.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "grimbergen",
            "name": {
              "en": "Grimbergen",
              "ru": "Grimbergen",
              "az": "Grimbergen"
            },
            "variants": [
              {
                "volumeMl": 0.3,
                "price": 7,
                "currency": "AZN"
              },
              {
                "volumeMl": 0.5,
                "price": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/grimbergen.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "guinness",
            "name": {
              "en": "Guinness",
              "ru": "Guinness",
              "az": "Guinness"
            },
            "variants": [
              {
                "volumeMl": 0.3,
                "price": 8,
                "currency": "AZN"
              },
              {
                "volumeMl": 0.5,
                "price": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/guinness.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "bottled-beer-cider",
        "name": {
          "en": "BOTTLED BEER & CIDER",
          "ru": "БУТЫЛОЧНОЕ ПИВО И СИДР",
          "az": "BUTULKADA PİVƏ VƏ SİDR"
        },
        "items": [
          {
            "id": "heineken",
            "name": {
              "en": "Heineken",
              "ru": "Heineken",
              "az": "Heineken"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/heineken.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "corona",
            "name": {
              "en": "Corona",
              "ru": "Corona",
              "az": "Corona"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/corona.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "miller",
            "name": {
              "en": "Miller",
              "ru": "Miller",
              "az": "Miller"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/miller.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "stella-artois",
            "name": {
              "en": "Stella Artois",
              "ru": "Stella Artois",
              "az": "Stella Artois"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/stella-artois.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "efes-bottle",
            "name": {
              "en": "Efes Bottle",
              "ru": "Efes Bottle",
              "az": "Efes Bottle"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/efes-bottle.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "efes-can",
            "name": {
              "en": "Efes Can",
              "ru": "Efes Can",
              "az": "Efes Can"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/efes-can.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "xirdalan",
            "name": {
              "en": "Xirdalan",
              "ru": "Xirdalan",
              "az": "Xirdalan"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/xirdalan.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "xirdalan-unfiltered",
            "name": {
              "en": "Xirdalan Unfiltered",
              "ru": "Xirdalan Unfiltered",
              "az": "Xirdalan Unfiltered"
            },
            "prices": [
              {
                "amount": 5,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/xirdalan-unfiltered.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "erdinger-light-dark",
            "name": {
              "en": "Erdinger Light / Dark",
              "ru": "Erdinger Light / Dark",
              "az": "Erdinger Light / Dark"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/erdinger-light-dark.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "strongbow",
            "name": {
              "en": "Strongbow",
              "ru": "Strongbow",
              "az": "Strongbow"
            },
            "prices": [
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/strongbow.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "magners",
            "name": {
              "en": "Magners",
              "ru": "Magners",
              "az": "Magners"
            },
            "prices": [
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/magners.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "whiskey",
        "name": {
          "en": "WHISKEY",
          "ru": "ВИСКИ",
          "az": "VISKİ"
        },
        "items": [
          {
            "id": "glenfiddich-12",
            "name": {
              "en": "Glenfiddich 12",
              "ru": "Glenfiddich 12",
              "az": "Glenfiddich 12"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/glenfiddich-12.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "glenfiddich-18",
            "name": {
              "en": "Glenfiddich 18",
              "ru": "Glenfiddich 18",
              "az": "Glenfiddich 18"
            },
            "prices": [
              {
                "amount": 22,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/glenfiddich-18.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "glenlivet-12",
            "name": {
              "en": "Glenlivet 12",
              "ru": "Glenlivet 12",
              "az": "Glenlivet 12"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/glenlivet-12.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "glenmorangie",
            "name": {
              "en": "Glenmorangie",
              "ru": "Glenmorangie",
              "az": "Glenmorangie"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/glenmorangie.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "macallan",
            "name": {
              "en": "Macallan",
              "ru": "Macallan",
              "az": "Macallan"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/macallan.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "talisker-skye",
            "name": {
              "en": "Talisker Skye",
              "ru": "Talisker Skye",
              "az": "Talisker Skye"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/talisker-skye.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "talisker-10",
            "name": {
              "en": "Talisker 10",
              "ru": "Talisker 10",
              "az": "Talisker 10"
            },
            "prices": [
              {
                "amount": 20,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/talisker-10.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "tamnavulin",
            "name": {
              "en": "Tamnavulin",
              "ru": "Tamnavulin",
              "az": "Tamnavulin"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/tamnavulin.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "kavalan",
            "name": {
              "en": "Kavalan",
              "ru": "Kavalan",
              "az": "Kavalan"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/kavalan.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "laphroaig",
            "name": {
              "en": "Laphroaig",
              "ru": "Laphroaig",
              "az": "Laphroaig"
            },
            "prices": [
              {
                "amount": 15,
                "currency": "AZN"
              }
            ],
            "group": "Single Malt",
            "image": "assets/bar/laphroaig.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "ballantines",
            "name": {
              "en": "Ballantine's",
              "ru": "Ballantine's",
              "az": "Ballantine's"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/ballantines.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "black-label",
            "name": {
              "en": "Black Label",
              "ru": "Black Label",
              "az": "Black Label"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/black-label.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "red-label",
            "name": {
              "en": "Red Label",
              "ru": "Red Label",
              "az": "Red Label"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/red-label.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "chivas-regal-12",
            "name": {
              "en": "Chivas Regal 12",
              "ru": "Chivas Regal 12",
              "az": "Chivas Regal 12"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/chivas-regal-12.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "monkey-shoulder",
            "name": {
              "en": "Monkey Shoulder",
              "ru": "Monkey Shoulder",
              "az": "Monkey Shoulder"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/monkey-shoulder.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "jameson",
            "name": {
              "en": "Jameson",
              "ru": "Jameson",
              "az": "Jameson"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/jameson.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "bushmills",
            "name": {
              "en": "Bushmills",
              "ru": "Bushmills",
              "az": "Bushmills"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/bushmills.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "jack-daniels",
            "name": {
              "en": "Jack Daniel's",
              "ru": "Jack Daniel's",
              "az": "Jack Daniel's"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/jack-daniels.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "jim-beam",
            "name": {
              "en": "Jim Beam",
              "ru": "Jim Beam",
              "az": "Jim Beam"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/jim-beam.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "jb",
            "name": {
              "en": "JB",
              "ru": "JB",
              "az": "JB"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "group": "Blended & Others",
            "image": "assets/bar/jb.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "rum",
        "name": {
          "en": "RUM",
          "ru": "РОМ",
          "az": "ROM"
        },
        "items": [
          {
            "id": "captain-morgan-spiced",
            "name": {
              "en": "Captain Morgan Spiced Gold",
              "ru": "Captain Morgan Spiced Gold",
              "az": "Captain Morgan Spiced Gold"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/captain-morgan-spiced.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "captain-morgan-dark",
            "name": {
              "en": "Captain Morgan Dark Rum",
              "ru": "Captain Morgan Dark Rum",
              "az": "Captain Morgan Dark Rum"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/captain-morgan-dark.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "bacardi-carta-blanca",
            "name": {
              "en": "Bacardi Carta Blanca",
              "ru": "Bacardi Carta Blanca",
              "az": "Bacardi Carta Blanca"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/bacardi-carta-blanca.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "gin",
        "name": {
          "en": "GIN",
          "ru": "ДЖИН",
          "az": "CİN"
        },
        "items": [
          {
            "id": "gordons",
            "name": {
              "en": "Gordon's",
              "ru": "Gordon's",
              "az": "Gordon's"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/gordons.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "bombay-sapphire",
            "name": {
              "en": "Bombay Sapphire",
              "ru": "Bombay Sapphire",
              "az": "Bombay Sapphire"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/bombay-sapphire.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "pink-gin",
            "name": {
              "en": "Pink Gin",
              "ru": "Pink Gin",
              "az": "Pink Gin"
            },
            "prices": [
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/pink-gin.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "hendricks",
            "name": {
              "en": "Hendrick's",
              "ru": "Hendrick's",
              "az": "Hendrick's"
            },
            "prices": [
              {
                "amount": 9,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/hendricks.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "vermouth",
        "name": {
          "en": "VERMOUTH",
          "ru": "ВЕРМУТ",
          "az": "VERMUT"
        },
        "items": [
          {
            "id": "martini-bianco",
            "name": {
              "en": "Martini Bianco",
              "ru": "Martini Bianco",
              "az": "Martini Bianco"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/martini-bianco.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "martini-rosso",
            "name": {
              "en": "Martini Rosso",
              "ru": "Martini Rosso",
              "az": "Martini Rosso"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/martini-rosso.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "martini-extra-dry",
            "name": {
              "en": "Martini Extra Dry",
              "ru": "Martini Extra Dry",
              "az": "Martini Extra Dry"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/martini-extra-dry.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "wine-prosecco",
        "name": {
          "en": "WINE & PROSECCO",
          "ru": "ВИНО И ПРОСЕККО",
          "az": "ŞƏRAB VƏ PROSEKKO"
        },
        "items": [
          {
            "id": "savalan-merlot",
            "name": {
              "en": "Savalan Merlot",
              "ru": "Savalan Merlot",
              "az": "Savalan Merlot"
            },
            "variants": [
              {
                "volumeMl": 150,
                "price": 7,
                "currency": "AZN"
              },
              {
                "volumeMl": 750,
                "price": 40,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/savalan-merlot.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "calvet-merlot",
            "name": {
              "en": "Calvet Merlot",
              "ru": "Calvet Merlot",
              "az": "Calvet Merlot"
            },
            "variants": [
              {
                "volumeMl": 150,
                "price": 10,
                "currency": "AZN"
              },
              {
                "volumeMl": 750,
                "price": 50,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/calvet-merlot.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "hillside-pinot-grigio",
            "name": {
              "en": "Hillside Pinot Grigio",
              "ru": "Hillside Pinot Grigio",
              "az": "Hillside Pinot Grigio"
            },
            "variants": [
              {
                "volumeMl": 150,
                "price": 7,
                "currency": "AZN"
              },
              {
                "volumeMl": 750,
                "price": 40,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/hillside-pinot-grigio.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "pinot-grigio",
            "name": {
              "en": "Pinot Grigio",
              "ru": "Pinot Grigio",
              "az": "Pinot Grigio"
            },
            "variants": [
              {
                "volumeMl": 150,
                "price": 10,
                "currency": "AZN"
              },
              {
                "volumeMl": 750,
                "price": 50,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/pinot-grigio.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "prosecco-astoria",
            "name": {
              "en": "Prosecco Astoria",
              "ru": "Prosecco Astoria",
              "az": "Prosecco Astoria"
            },
            "variants": [
              {
                "volumeMl": 150,
                "price": 12,
                "currency": "AZN"
              },
              {
                "volumeMl": 750,
                "price": 50,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/prosecco-astoria.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "liqueurs-bitters",
        "name": {
          "en": "LIQUEURS & BITTERS",
          "ru": "ЛИКЁРЫ И БИТТЕРЫ",
          "az": "LİKÖRLƏR VƏ BİTTERLƏR"
        },
        "items": [
          {
            "id": "absinthe",
            "name": {
              "en": "Absinthe",
              "ru": "Absinthe",
              "az": "Absinthe"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/absinthe.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sambuca",
            "name": {
              "en": "Sambuca",
              "ru": "Sambuca",
              "az": "Sambuca"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/sambuca.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "jagermeister",
            "name": {
              "en": "Jägermeister",
              "ru": "Jägermeister",
              "az": "Jägermeister"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/jagermeister.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "disaronno",
            "name": {
              "en": "Disaronno",
              "ru": "Disaronno",
              "az": "Disaronno"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/disaronno.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "drambuie",
            "name": {
              "en": "Drambuie",
              "ru": "Drambuie",
              "az": "Drambuie"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/drambuie.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "heering",
            "name": {
              "en": "Heering",
              "ru": "Heering",
              "az": "Heering"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/heering.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "grand-marnier",
            "name": {
              "en": "Grand Marnier",
              "ru": "Grand Marnier",
              "az": "Grand Marnier"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/grand-marnier.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cointreau",
            "name": {
              "en": "Cointreau",
              "ru": "Cointreau",
              "az": "Cointreau"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/cointreau.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "amaretto",
            "name": {
              "en": "Amaretto",
              "ru": "Amaretto",
              "az": "Amaretto"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/amaretto.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "kahlua",
            "name": {
              "en": "Kahlua",
              "ru": "Kahlua",
              "az": "Kahlua"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/kahlua.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "baileys",
            "name": {
              "en": "Baileys",
              "ru": "Baileys",
              "az": "Baileys"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/baileys.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "campari",
            "name": {
              "en": "Campari",
              "ru": "Campari",
              "az": "Campari"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/campari.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "aperol",
            "name": {
              "en": "Aperol",
              "ru": "Aperol",
              "az": "Aperol"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/aperol.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "malibu",
            "name": {
              "en": "Malibu",
              "ru": "Malibu",
              "az": "Malibu"
            },
            "prices": [
              {
                "amount": 8,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/malibu.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "other-spirits",
        "name": {
          "en": "OTHER SPIRITS",
          "ru": "ДРУГИЕ КРЕПКИЕ НАПИТКИ",
          "az": "DİGƏR SPİRTLİ İÇKİLƏR"
        },
        "items": [
          {
            "id": "raki",
            "name": {
              "en": "Raki",
              "ru": "Raki",
              "az": "Raki"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/raki.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "vodka",
            "name": {
              "en": "Vodka",
              "ru": "Vodka",
              "az": "Vodka"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/vodka.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "tequila",
            "name": {
              "en": "Tequila",
              "ru": "Tequila",
              "az": "Tequila"
            },
            "prices": [
              {
                "amount": 7,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/tequila.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cognac",
            "name": {
              "en": "Cognac",
              "ru": "Cognac",
              "az": "Cognac"
            },
            "prices": [
              {
                "amount": 10,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/cognac.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      },
      {
        "id": "soft-drinks",
        "name": {
          "en": "SOFT DRINKS",
          "ru": "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ",
          "az": "SƏRİNLƏŞDİRİCİ İÇKİLƏR"
        },
        "items": [
          {
            "id": "red-bull",
            "name": {
              "en": "Red Bull",
              "ru": "Red Bull",
              "az": "Red Bull"
            },
            "prices": [
              {
                "amount": 6,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/red-bull.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cola",
            "name": {
              "en": "Cola",
              "ru": "Cola",
              "az": "Cola"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/cola.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "cola-zero",
            "name": {
              "en": "Cola Zero",
              "ru": "Cola Zero",
              "az": "Cola Zero"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/cola-zero.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "fanta",
            "name": {
              "en": "Fanta",
              "ru": "Fanta",
              "az": "Fanta"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/fanta.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sprite",
            "name": {
              "en": "Sprite",
              "ru": "Sprite",
              "az": "Sprite"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/sprite.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "schweppes",
            "name": {
              "en": "Schweppes",
              "ru": "Schweppes",
              "az": "Schweppes"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/schweppes.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "ice-tea",
            "name": {
              "en": "Ice Tea",
              "ru": "Ice Tea",
              "az": "Ice Tea"
            },
            "prices": [
              {
                "amount": 4,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/ice-tea.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sarikiz",
            "name": {
              "en": "Sarikiz",
              "ru": "Sarikiz",
              "az": "Sarikiz"
            },
            "prices": [
              {
                "amount": 3,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/sarikiz.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "borjomi",
            "name": {
              "en": "Borjomi",
              "ru": "Borjomi",
              "az": "Borjomi"
            },
            "prices": [
              {
                "amount": 3,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/borjomi.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "still-water",
            "name": {
              "en": "Still Water",
              "ru": "Still Water",
              "az": "Still Water"
            },
            "prices": [
              {
                "amount": 2,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/still-water.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          },
          {
            "id": "sparkling-water",
            "name": {
              "en": "Sparkling Water",
              "ru": "Sparkling Water",
              "az": "Sparkling Water"
            },
            "prices": [
              {
                "amount": 2,
                "currency": "AZN"
              }
            ],
            "image": "assets/bar/sparkling-water.jpg",
            "description": {
              "en": "",
              "ru": "",
              "az": ""
            }
          }
        ]
      }
    ]
  }
};
