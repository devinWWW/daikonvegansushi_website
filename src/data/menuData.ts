export interface MenuItem {
  id: number;
  name: string;
  category: string;
  description: string;
  featured?: boolean;
  image: string | null;
  dietary?: string;
}

export const menuData: MenuItem[] = [
  // Featured Items
  {
    id: 1,
    name: "The Caterpillar Roll",
    category: "Specialty Rolls",
    description: "Our award-winning signature roll featuring pickled carrots, creamy avocado, and fresh jackfruit salad. Topped with roasted yellow pepper, house-made pineapple sauce, and traditional furikake seasoning for a perfect balance of sweet and savory flavors.",
    featured: true,
    image: "/caterpillar-roll.png",
  },
  {
    id: 2,
    name: "Golden State Roll",
    category: "Specialty Rolls",
    description: "A crispy tempura masterpiece featuring golden-fried king mushrooms, fresh avocado, and crisp cucumbers. Enhanced with our signature jackfruit salad and finished with a drizzle of sweet soy glaze for an unforgettable texture and taste experience.",
    featured: true,
    image: "/golden-state.png",
  },
  {
    id: 3,
    name: "Sesame \"Chicken\" Rice",
    category: "Entrees",
    description: "Perfectly crispy tempura-fried seitan chunks tossed in our house-made sesame sauce that perfectly balances sweet, spicy, and tangy flavors. Served over steamed jasmine rice and garnished with fresh broccoli, toasted sesame seeds, and green onions for a satisfying and flavorful meal.",
    featured: true,
    image: "/sesame-chicken-basil.png",
    dietary: "O/F"
  },
  {
    id: 4,
    name: "Basil Fried Rice",
    category: "Entrees",
    description: "Aromatic jasmine rice wok-fried to perfection with our signature spicy \"pork\" blend of chopped mushrooms and seitan. Enhanced with fresh cabbage, carrots, tomatoes, fragrant Thai basil, jalapeños, tofu, garlic, and white onions for a bold and satisfying flavor profile.",
    featured: true,
    image: "/basil-friend-rice.png",
    dietary: "GF, OF"
  },

  // Starters
  {
    id: 10,
    name: "Miso Soup",
    category: "Starters",
    description: "Assorted mushrooms, tofu, cut seaweed, and green onions.",
    image: null,
    dietary: "OF, GF"
  },
  {
    id: 11,
    name: "Edamame",
    category: "Starters",
    description: "Steamed soybean pods with salt.",
    image: null,
  },
  {
    id: 12,
    name: "Spicy Edamame",
    category: "Starters",
    description: "Stir fry edamame with garlic and chili.",
    image: null,
  },
  {
    id: 13,
    name: "Spring Rolls",
    category: "Starters",
    description: "Deep-fried spring roll, ingredients include mung bean, carrot, vermicelli, wood ear mushroom, wrapped in rice paper.",
    image: null,
  },
  {
    id: 14,
    name: "Seaweed Salad",
    category: "Starters",
    description: "Assorted seaweed in chef's sauce.",
    image: null,
  },
  {
    id: 15,
    name: "Konjac Salad",
    category: "Starters",
    description: "Thinly sliced konjac cake and cucumber salad. Served with spicy soy base chef's sauce and sesame seeds.",
    image: null,
  },
  {
    id: 16,
    name: "Kinpira Gobo",
    category: "Starters",
    description: "Cold dish featuring stir-fried burdock root and carrots, topped with sesame seeds and sesame oil.",
    image: null,
  },
  {
    id: 17,
    name: "Crunchy Garbanzo Salad",
    category: "Starters",
    description: "Julienne cabbage, celery, white onions, and carrots on a bed of garbanzo salad (chickpea, mayo, white onion, and celery). Topped with chef's mayo-based dressing, sesame seeds, oil, and crunchy fried lumpia skin.",
    image: null,
  },
  {
    id: 18,
    name: "Salt & Pepper \"Calamari\"",
    category: "Starters",
    description: "Tempura fried king oyster mushroom with salt and pepper seasonings.",
    image: "/garlic-baked.png",
  },
  {
    id: 19,
    name: "Karaage",
    category: "Starters",
    description: "Japanese Fried \"Chicken\" - Fried tofu chunks with sweet potato starch. Served with spicy mayo.",
    image: "/katsu.png",
    dietary: "GF"
  },
  {
    id: 20,
    name: "Tempura Kale",
    category: "Starters",
    description: "Tempura fried flowering kale.",
    image: null,
  },
  {
    id: 21,
    name: "Kale Tostada",
    category: "Starters",
    description: "Tempura fried kale. Topped with chickpea salad, inari, fresh avocado, sesame seeds, and sweet soy.",
    image: null,
  },
  {
    id: 22,
    name: "Veggie Fritters",
    category: "Starters",
    description: "Fried fritters include eggplant, daikon, carrots, celery, corn, flour, and oatmeal.",
    image: null,
  },
  {
    id: 23,
    name: "Eggplant Balls",
    category: "Starters",
    description: "Fried eggplant balls (eggplants, daikon, oatmeal, and panko) with chef's sauce. Garnish with sesame seeds and green onions.",
    image: null,
    dietary: "O/F"
  },
  {
    id: 24,
    name: "Onigiri",
    category: "Starters",
    description: "Omni vegan luncheon and sushi rice wrapped in nori, served with teriyaki sauce on the side.",
    image: null,
    dietary: "O/F"
  },
  {
    id: 25,
    name: "Tempura-Fried Jalapeños",
    category: "Starters",
    description: "Tempura-fried jalapeños stuffed with spicy jackfruit.",
    image: null,
  },

  // Sushi Nigiri
  {
    id: 30,
    name: "Konjac Nigiri",
    category: "Nigiri",
    description: "Thinly sliced konjac on sushi rice.",
    image: null,
    dietary: "OF"
  },
  {
    id: 31,
    name: "Orange Bell Pepper Nigiri",
    category: "Nigiri",
    description: "Roasted seasoned orange bell pepper on sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 32,
    name: "Tomato Nigiri",
    category: "Nigiri",
    description: "Roasted seasoned tomato on sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 33,
    name: "Eggplant Nigiri",
    category: "Nigiri",
    description: "Cooked eggplant on sushi rice with sweet soy and sesame seeds on top.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 34,
    name: "Garlic Daikon Nigiri",
    category: "Nigiri",
    description: "Seared garlic and vegan butter on daikon over sushi rice. Touch of ponzu sauce, sesame seeds, and green onions.",
    image: null,
    dietary: "OF"
  },
  {
    id: 35,
    name: "Spicy \"Tuna\" Pocket",
    category: "Nigiri",
    description: "Baked spicy \"Tuna\" in inari pocket and sushi rice. Topped with sweet soy, sesame seeds, and green onions.",
    image: null,
    dietary: "OF"
  },
  {
    id: 36,
    name: "Dynamite Pocket",
    category: "Nigiri",
    description: "Baked mushrooms and sweet corn in mayo base dynamite sauce, stuffed in inari pockets with sushi rice. Topped with sweet soy and green onions.",
    image: null,
    dietary: "O/F"
  },
  {
    id: 37,
    name: "\"Tuna\" Nigiri",
    category: "Nigiri",
    description: "Vegan \"tuna\" on sushi rice.",
    image: null,
  },
  {
    id: 38,
    name: "\"Squid\" Nigiri",
    category: "Nigiri",
    description: "Vegan \"squid\" on sushi rice.",
    image: null,
  },

  // Classic Rolls
  {
    id: 40,
    name: "Avocado Roll",
    category: "Classic Rolls",
    description: "Avocado roll inside nori with sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 41,
    name: "Cucumber Roll",
    category: "Classic Rolls",
    description: "Cucumber roll inside nori with sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 42,
    name: "Oshinko Roll",
    category: "Classic Rolls",
    description: "Pickled radish rolled inside nori with sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 43,
    name: "Pickled Carrot Roll",
    category: "Classic Rolls",
    description: "Pickled carrots rolled inside nori with sushi rice.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 44,
    name: "California Roll",
    category: "Classic Rolls",
    description: "Jackfruit salad, cucumber, and avocado.",
    image: null,
    dietary: "GF, OF"
  },
  {
    id: 45,
    name: "Spicy \"Tuna\" Roll",
    category: "Classic Rolls",
    description: "Spicy tofu, seitan mixture, and cucumber.",
    image: null,
    dietary: "O/F"
  },

  // Specialty Rolls
  {
    id: 50,
    name: "Yellow Magic Roll",
    category: "Specialty Rolls",
    description: "Jackfruit salad and cucumber inside. Topped with roasted tomato, la-yu, sweet soy, and green onions.",
    image: "/yellow-magic.png",
  },
  {
    id: 51,
    name: "Spider Roll",
    category: "Specialty Rolls",
    description: "King oyster mushrooms, carrots, white onions, and cucumbers are inside the roll. Topped with \"Tuna\", \"Albacore\", sweet soy, chili sauce, green onions, and dried shallots.",
    image: null,
  },
  {
    id: 52,
    name: "Volcano Roll",
    category: "Specialty Rolls",
    description: "Baked California roll with spicy \"Tuna\" on top. Touch of sweet soy, pineapple sauce, and chili sauce.",
    image: null,
  },
  {
    id: 53,
    name: "Caterpillar Roll",
    category: "Specialty Rolls",
    description: "\"Eel\", carrots, cucumbers inside. Topped with \"Salmon\", avocado, sweet soy, spicy mayo, lumpia skin crunch, and sesame seeds.",
    image: "/caterpillar-roll.png",
    dietary: "GF, OF"
  },
    {
    id: 55,
    name: "Crunchy California Roll",
    category: "Specialty Rolls",
    description: "California roll covered with rice noodle crunch and topped with sweet soy.",
    image: null,
    dietary: "OF, GF option"
  },
  {
    id: 56,
    name: "Crunchy Spicy \"Tuna\" Roll",
    category: "Specialty Rolls",
    description: "Spicy \"Tuna\" roll covered with rice noodle crunch and topped with sweet soy.",
    image: null,
    dietary: "OF"
  },
  {
    id: 57,
    name: "Las Vegas Roll",
    category: "Specialty Rolls",
    description: "Tempura fried California roll, topped with green onions, sweet soy, and spicy mayo.",
    image: null,
  },
  {
    id: 58,
    name: "Yuba Roll",
    category: "Specialty Rolls",
    description: "Jalapeño, cilantro, and spicy \"Tuna\" inside. Topped with daikon, ponzu, black pepper sauce, and sesame seeds.",
    image: null,
    dietary: "OF"
  },
  {
    id: 59,
    name: "Sunset Roll",
    category: "Specialty Rolls",
    description: "Spicy \"Tuna\" and cucumber inside. Topped with avocado, wasabi mayo, jalapeño, and chili sauce.",
    image: null,
  },
  {
    id: 60,
    name: "Rainbow Roll",
    category: "Specialty Rolls",
    description: "Avocado, bell pepper, tomato, and inari on top of California roll.",
    image: null,
    dietary: "GF, OF"
  },
    {
    id: 62,
    name: "Tropical Dragon Roll",
    category: "Specialty Rolls",
    description: "Black garlic and chickpea on top of carrots, cucumber, avocado roll. Topped with shichimi pepper, pineapple sauce, and green onions.",
    image: null,
  },

  // Entrees
  {
    id: 70,
    name: "Luncheon Fried Rice",
    category: "Entrees",
    description: "Omni vegan luncheon fried rice includes tofu egg and green and white onions.",
    image: "/basil-friend-rice.png",
    dietary: "OF"
  },
  {
    id: 71,
    name: "Garlic Veggie Stir-Fry",
    category: "Entrees",
    description: "Broccoli, cabbage, carrots, celery, tomatoes, and tofu stir-fry with fresh garlic. Served with white rice.",
    image: null,
    dietary: "GF, O/F"
  },

  // Ramen & Noodle Soups
  {
    id: 75,
    name: "Vegan Ramen (Tomato Base)",
    category: "Ramen & Noodle Soups",
    description: "Fresh tomato soup base. Served with fried yuba, steamed cabbage, carrots, and green onions. This dish has white onions in the broth and cannot be made onion free.",
    image: "/tomato-ramen.png",
  },

  // Chef's Specials
  {
    id: 77,
    name: "Yuba Katsu",
    category: "Chef's Specials",
    description: "Panko fried yuba (tofu skin), served with shredded broccoli, cabbage, and homemade katsu sauce.",
    image: null,
  },

  // Sides
  {
    id: 80,
    name: "Steamed White Rice",
    category: "Sides",
    description: "Steamed medium grain rice.",
    image: null,
  },
  {
    id: 81,
    name: "Sushi Rice",
    category: "Sides",
    description: "Steamed medium grain rice with rice vinegar, salt, and sugar.",
    image: null,
  },
  {
    id: 82,
    name: "Black Rice",
    category: "Sides",
    description: "Also known as \"forbidden rice\" or \"emperor's rice\" has been eaten in regions of Asia for thousands of years. In fact, for centuries it was only reserved for Chinese royalty. Not only is it rich in powerful, disease-fighting antioxidant, but it also contains dietary fiber, anti-inflammatory properties, and the ability to help stop the development of diabetes, cancer, heart disease, and even weight gain. It's natural detoxifier, and gluten free.",
    image: null,
  },
  {
    id: 83,
    name: "Steamed Ramen Noodles",
    category: "Sides",
    description: "Steamed vegan ramen only.",
    image: null,
  },
  {
    id: 84,
    name: "Sesame \"Chicken\" Only",
    category: "Sides",
    description: "Fried seiten chunks with sesame sauce only.",
    image: null,
  },
  {
    id: 85,
    name: "Teriyaki Yuba",
    category: "Sides",
    description: "Fried stuffed yuba with teriyaki sauce only.",
    image: null,
  },
  {
    id: 86,
    name: "Spam Musubi",
    category: "Sides",
    description: "Featuring Omni products. Spam ingredients include soy protein, vital wheat gluten, coconut oil, etc.",
    image: null,
  },

  // Beverages
  {
    id: 90,
    name: "Jasmine Green Tea",
    category: "Beverages",
    description: "100% real brewed from premium tea leaves, POKKA Jasmine Green Tea delivers the superior taste you have come to love.",
    image: null,
  },
  {
    id: 91,
    name: "Oolong Tea",
    category: "Beverages",
    description: "Oolong Tea is a traditional Chinese tea enjoyed for centuries. Its distinctive and refreshing flavor is best after meals.",
    image: null,
  },
  {
    id: 92,
    name: "Kumquat Green Tea",
    category: "Beverages",
    description: "Homemade refreshing fresh-brewed green tea and kumquat syrup.",
    image: null,
  },
  {
    id: 93,
    name: "Lemongrass Pandan Tea",
    category: "Beverages",
    description: "Homemade, fresh brew lemongrass and pandan leaves with palm sugar. Served cold.",
    image: null,
  },
  {
    id: 94,
    name: "Thai Tea",
    category: "Beverages",
    description: "House-brewed premium Thai tea mix served with plant-based creamer.",
    image: null,
  },
  {
    id: 95,
    name: "Mango Smoothie",
    category: "Beverages",
    description: "Fresh mango, palm sugar, plant-based half & half, and black tea (brewed from real tea leaf). Served cold.",
    image: null,
  },
  {
    id: 96,
    name: "Avocado Smoothie",
    category: "Beverages",
    description: "Fresh avocado, soy milk, and simple syrup.",
    image: null,
  },

  // Desserts
  {
    id: 100,
    name: "Lemon Meringue Pie",
    category: "Desserts",
    description: "Gluten-free vanilla crust, vegan lemon curd with meringue.",
    image: null,
  },
  {
    id: 101,
    name: "Flourless Chocolate Cake",
    category: "Desserts",
    description: "Flourless dark chocolate, topped with powdered sugar.",
    image: null,
    dietary: "GF"
  },
  {
    id: 102,
    name: "Black Sesame Cheesecake",
    category: "Desserts",
    description: "Rich and creamy vegan cheesecake with a blended roasted black sesame paste.",
    image: null,
    dietary: "N/F, GF, Soy Free"
  },
  {
    id: 103,
    name: "Banana Lumpia",
    category: "Desserts",
    description: "Tempura fried banana wrapped in lumpia skin. Served with chocolate syrup, salted coconut caramel, and sugar powder.",
    image: null,
  },
  {
    id: 104,
    name: "Pudding",
    category: "Desserts",
    description: "Coconut milk, soy milk pudding, and salted caramel tapioca.",
    image: null,
  },
  {
    id: 105,
    name: "Chocolate Avocado Mousse",
    category: "Desserts",
    description: "Avocado, chocolate chip, cocoa powder, sugar, maple syrup, and flour.",
    image: null,
  },
];

export const categories: string[] = [
  "All",
  "Starters",
  "Nigiri",
  "Classic Rolls",
  "Specialty Rolls",
  "Entrees",
  "Ramen & Noodle Soups",
  "Chef's Specials",
  "Sides",
  "Beverages",
  "Desserts"
];
