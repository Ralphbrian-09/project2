// Mobile Navigation
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileNav.style.display = mobileNav.style.display === 'block' ? 'none' : 'block';
    });
    
    // Close mobile nav when clicking on a link
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileNav.style.display = 'none';
        });
    });
    
    // Initialize recipes if on recipes page
    if (document.querySelector('.recipes-main')) {
        initializeRecipes();
    }
    
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input').value;
            document.getElementById('newsletter-message').textContent = `Thank you for subscribing with ${email}!`;
            this.reset();
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value;
            document.getElementById('form-message').textContent = `Thank you, ${name}! Your message has been sent.`;
            this.reset();
        });
    }
    
    // Category card click event
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            window.location.href = `recipes.html?category=${category}`;
        });
    });
});

// Recipe data
const recipes = [
    {
        id: 1,
        title: "Adobo",
        category: ["ulam", "meat"],
        difficulty: "easy",
        time: "60 mins",
        servings: "4-6",
        description: "Adobo is arguably the most popular Filipino dish, known for its savory, slightly tangy flavor with a hint of sweetness. It's typically made with chicken or pork (or both) marinated in vinegar, soy sauce, garlic, and spices, then braised until tender.",
        image: "https://i.pinimg.com/736x/2d/bf/6a/2dbf6ab420e7e400b72c142d3fcbfb02.jpg",
        ingredients: [
            "1 kg chicken or pork (or combination), cut into serving pieces",
            "1/2 cup soy sauce",
            "1/2 cup vinegar",
            "1 head garlic, minced",
            "3 bay leaves",
            "1 tsp whole peppercorns",
            "1 cup water",
            "2 tbsp cooking oil",
            "1 tbsp brown sugar (optional)",
            "Salt to taste"
        ],
        instructions: [
            "In a bowl, combine meat, soy sauce, garlic, bay leaves, and peppercorns. Marinate for at least 30 minutes.",
            "Heat oil in a pot over medium heat. Remove meat from marinade (reserve marinade) and brown on all sides.",
            "Pour in the reserved marinade and water. Bring to a boil then lower heat to simmer.",
            "Cover and cook until meat is tender (about 30-40 minutes).",
            "Add vinegar (do not stir) and let simmer for another 10 minutes.",
            "Season with sugar and salt if needed. Serve hot with rice."
        ]
    },
    {
        id: 2,
        title: "Sinigang na Baboy",
        category: ["ulam", "meat"],
        difficulty: "medium",
        time: "90 mins",
        servings: "6-8",
        description: "Sinigang is a sour soup that's a staple in Filipino households. This version uses pork and tamarind as the souring agent, along with various vegetables for a hearty and comforting dish.",
        image: "https://i.pinimg.com/736x/e7/9b/da/e79bdaf8060aa4d49ba52f310a8b8fc9.jpg",
        ingredients: [
            "1 kg pork belly or ribs, cut into serving pieces",
            "1 large onion, quartered",
            "2 tomatoes, quartered",
            "1 packet sinigang mix (or 2 cups tamarind broth)",
            "1 bunch kangkong (water spinach)",
            "5 pieces okra, ends trimmed",
            "1 eggplant, sliced",
            "2 pieces gabi (taro), peeled and quartered",
            "2 pieces siling haba (green chili peppers)",
            "Fish sauce or salt to taste",
            "8 cups water"
        ],
        instructions: [
            "In a large pot, bring water to a boil. Add pork, onions, and tomatoes. Simmer until pork is tender (about 1 hour).",
            "Add gabi and cook until tender (about 10 minutes).",
            "Add sinigang mix or tamarind broth. Adjust sourness to taste.",
            "Add eggplant and okra. Cook for 5 minutes.",
            "Add kangkong and green chili peppers. Cook for another 2 minutes.",
            "Season with fish sauce or salt. Serve hot with rice."
        ]
    },
    {
        id: 3,
        title: "Lechon Kawali",
        category: ["ulam", "meat"],
        difficulty: "medium",
        time: "120 mins",
        servings: "4-6",
        description: "Lechon kawali is a crispy, deep-fried pork belly that's incredibly flavorful with its golden-brown, crackling skin and tender meat. It's often served with lechon sauce or a vinegar-based dip.",
        image: "https://i.pinimg.com/736x/57/2f/58/572f5886184437d83cb83f49f965d89e.jpg",
        ingredients: [
            "1 kg pork belly, cut into large cubes",
            "5 cloves garlic, crushed",
            "2 bay leaves",
            "1 tbsp whole peppercorns",
            "1 tbsp salt",
            "Water for boiling",
            "Oil for deep frying"
        ],
        instructions: [
            "In a large pot, combine pork, garlic, bay leaves, peppercorns, and salt. Add enough water to cover the pork.",
            "Bring to a boil then lower heat to simmer. Cook until pork is tender (about 1 hour).",
            "Drain pork and let it air dry completely (pat dry with paper towels).",
            "Heat oil in a deep pan or wok over medium-high heat.",
            "Carefully add pork pieces and fry until golden brown and crispy (about 5-7 minutes per batch).",
            "Drain on paper towels. Serve with lechon sauce or spiced vinegar."
        ]
    },
    {
        id: 4,
        title: "Kare-Kare",
        category: ["ulam"],
        difficulty: "hard",
        time: "180 mins",
        servings: "6-8",
        description: "Kare-Kare is a rich Filipino stew made with peanut sauce, oxtail, and vegetables. It's traditionally served with bagoong (fermented shrimp paste) and is a favorite during special occasions.",
        image: "https://i.pinimg.com/736x/e2/95/a8/e295a8e416096d4172669cb4649e4ae8.jpg",
        ingredients: [
            "1 kg oxtail, cut into serving pieces",
            "1/2 cup peanut butter",
            "1/4 cup ground toasted rice",
            "1/2 cup annatto seeds (soaked in 1 cup warm water)",
            "1 bunch string beans, cut into 2-inch pieces",
            "1 bunch pechay (bok choy), separated",
            "2 eggplants, sliced",
            "1 onion, chopped",
            "4 cloves garlic, minced",
            "6 cups water",
            "Salt to taste",
            "Bagoong (shrimp paste) to serve"
        ],
        instructions: [
            "In a large pot, boil oxtail until very tender (about 2-3 hours). Skim off scum that rises to the surface.",
            "In a separate pan, sauté garlic and onions. Add the boiled oxtail and some broth. Simmer for 10 minutes.",
            "Strain annatto water and add to the pot. Add ground toasted rice and peanut butter. Stir well to combine.",
            "Add more broth as needed to achieve desired consistency. Simmer for 15 minutes.",
            "Add vegetables starting with eggplants, then string beans, and finally pechay. Cook until vegetables are tender but still crisp.",
            "Season with salt. Serve hot with bagoong on the side."
        ]
    },
    {
        id: 5,
        title: "Pancit Canton",
        category: ["mirienda", "noodles"],
        difficulty: "medium",
        time: "45 mins",
        servings: "6-8",
        description: "Pancit Canton is a Filipino-style stir-fried noodle dish loaded with meat, seafood, and vegetables. It's a favorite during birthdays and gatherings as it symbolizes long life.",
        image: "https://i.pinimg.com/736x/25/76/c3/2576c3e64e0471410c95f0cf8a0437ed.jpg",
        ingredients: [
            "500g pancit canton noodles",
            "200g pork, sliced thinly",
            "200g chicken breast, sliced thinly",
            "200g shrimp, peeled and deveined",
            "1 cup sliced carrots",
            "1 cup sliced cabbage",
            "1 cup sliced bell peppers",
            "1 cup sliced celery",
            "1 onion, sliced",
            "4 cloves garlic, minced",
            "1/4 cup soy sauce",
            "2 tbsp oyster sauce",
            "1 cup chicken broth",
            "3 tbsp cooking oil",
            "Calamansi or lemon wedges to serve"
        ],
        instructions: [
            "Soak noodles in warm water for 5 minutes. Drain and set aside.",
            "In a wok or large pan, heat oil over medium-high heat. Sauté garlic and onions until fragrant.",
            "Add pork and chicken. Cook until no longer pink.",
            "Add shrimp and cook until pink. Remove from pan and set aside.",
            "In the same pan, stir-fry vegetables starting with carrots, then bell peppers, celery, and finally cabbage.",
            "Return the meat and shrimp to the pan. Add soy sauce and oyster sauce. Mix well.",
            "Add noodles and chicken broth. Toss everything together until noodles are cooked and liquid is absorbed (about 5-7 minutes).",
            "Serve hot with calamansi or lemon wedges."
        ]
    },
    {
        id: 6,
        title: "Lumpiang Shanghai",
        category: ["meat", "mirienda"],
        difficulty: "medium",
        time: "60 mins",
        servings: "6-8",
        description: "Lumpiang Shanghai are Filipino spring rolls filled with ground meat and vegetables, then deep-fried to crispy perfection. They're a party favorite and often served with sweet and sour sauce.",
        image: "https://i.pinimg.com/736x/16/7d/86/167d86aabd23524beaa6c1a4f8543244.jpg",
        ingredients: [
            "500g ground pork",
            "1 cup minced carrots",
            "1 cup minced onions",
            "1/2 cup minced celery",
            "2 eggs",
            "2 tbsp soy sauce",
            "1 tsp ground black pepper",
            "1 pack lumpia wrappers (about 25 pieces)",
            "Oil for frying",
            "Sweet and sour sauce to serve"
        ],
        instructions: [
            "In a bowl, combine ground pork, carrots, onions, celery, eggs, soy sauce, and pepper. Mix well.",
            "Separate lumpia wrappers carefully. Place about 1-2 tbsp of filling near one end of the wrapper.",
            "Fold sides inward then roll tightly. Moisten the end with water to seal.",
            "Heat oil in a pan over medium heat. Fry lumpia in batches until golden brown and crispy (about 3-4 minutes per side).",
            "Drain on paper towels. Serve hot with sweet and sour sauce."
        ]
    },
    {
        id: 7,
        title: "Halo-Halo",
        category: ["dessert", "mirienda"],
        difficulty: "easy",
        time: "30 mins",
        servings: "4",
        description: "Halo-Halo is a popular Filipino dessert that translates to 'mix-mix'. It's a colorful concoction of shaved ice, sweetened fruits, beans, jellies, and topped with leche flan and ube ice cream.",
        image: "https://i.pinimg.com/736x/fc/88/ca/fc88cab400e73a2e816a0c0d0db3d2a6.jpg",
        ingredients: [
            "4 cups shaved ice",
            "1/2 cup sweetened red beans",
            "1/2 cup sweetened white beans",
            "1/2 cup kaong (sugar palm fruit)",
            "1/2 cup nata de coco (coconut gel)",
            "1/2 cup sweetened saba bananas",
            "1/2 cup sweetened jackfruit",
            "1/2 cup leche flan, cubed",
            "1/2 cup ube halaya (purple yam jam)",
            "2 scoops ube ice cream",
            "1/2 cup evaporated milk",
            "Pinch of pinipig (toasted rice crispies)"
        ],
        instructions: [
            "In tall glasses, layer the sweet ingredients: beans, fruits, jellies, leche flan, and ube halaya.",
            "Top with a generous amount of shaved ice.",
            "Drizzle with evaporated milk.",
            "Add a scoop of ube ice cream on top.",
            "Sprinkle with pinipig.",
            "Serve with a long spoon. Mix well before eating."
        ]
    },
    {
        id: 8,
        title: "Chicken Inasal",
        category: ["ulam", "meat"],
        difficulty: "medium",
        time: "60 mins",
        servings: "4-6",
        description: "Chicken Inasal is a grilled chicken dish that originated in Bacolod. It's marinated in a mixture of calamansi, pepper, vinegar, and annatto, then grilled to juicy perfection.",
        image: "https://i.pinimg.com/736x/e4/d2/62/e4d26217f3281c5f4ea850801db63949.jpg",
        ingredients: [
            "1 whole chicken, cut into serving pieces",
            "1/2 cup vinegar",
            "1/2 cup calamansi juice (or lemon juice)",
            "1 head garlic, minced",
            "1 thumb-sized ginger, minced",
            "3 tbsp annatto oil",
            "2 tbsp brown sugar",
            "1 tsp salt",
            "1 tsp ground black pepper",
            "Bamboo skewers, soaked in water"
        ],
        instructions: [
            "In a bowl, combine all ingredients except chicken to make the marinade.",
            "Add chicken pieces and marinate for at least 4 hours, preferably overnight.",
            "Thread chicken pieces onto skewers.",
            "Grill over medium-hot coals, basting occasionally with the marinade, until cooked through and slightly charred (about 15-20 minutes per side).",
            "Serve with garlic rice and dipping sauce made from vinegar, soy sauce, calamansi, and chili."
        ]
    },
    {
        id: 9,
        title: "Bibingka",
        category: ["dessert", "mirienda"],
        difficulty: "medium",
        time: "60 mins",
        servings: "6-8",
        description: "Bibingka is a traditional Filipino rice cake that's especially popular during Christmas season. It's made with rice flour and coconut milk, cooked in clay pots lined with banana leaves.",
        image: "https://i.pinimg.com/736x/fc/c6/b9/fcc6b99766dd66ee3ca0d048208fc47a.jpg",
        ingredients: [
            "2 cups rice flour",
            "1/2 cup all-purpose flour",
            "1 cup sugar",
            "2 tbsp baking powder",
            "1/2 tsp salt",
            "3 eggs",
            "1 1/2 cups coconut milk",
            "1/2 cup water",
            "1/4 cup melted butter",
            "Banana leaves, wilted",
            "Salted eggs, sliced (optional)",
            "Grated coconut (for topping)",
            "Grated cheese (for topping)"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C). Line baking pans with banana leaves.",
            "In a bowl, sift together rice flour, all-purpose flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs then add coconut milk, water, and melted butter.",
            "Gradually add dry ingredients to wet ingredients, mixing until smooth.",
            "Pour batter into prepared pans. Top with sliced salted eggs if using.",
            "Bake for 20-25 minutes or until toothpick inserted comes out clean.",
            "Remove from oven and brush tops with butter. Sprinkle with grated coconut and cheese.",
            "Serve warm."
        ]
    },
    {
        id: 10,
        title: "Turon",
        category: ["dessert", "mirienda"],
        difficulty: "easy",
        time: "30 mins",
        servings: "4-6",
        description: "Turon is a popular Filipino snack made of saba bananas and jackfruit wrapped in spring roll wrappers, then fried until crispy and caramelized. It's often dusted with sugar for extra sweetness.",
        image: "https://i.pinimg.com/736x/80/d1/05/80d105e7376bbe1e7cf77af312b7258d.jpg",
        ingredients: [
            "6 saba bananas (or plantains), peeled and halved lengthwise",
            "1 cup ripe jackfruit, sliced into strips",
            "12 pieces lumpia wrappers",
            "1/2 cup brown sugar",
            "Oil for frying"
        ],
        instructions: [
            "Place a banana piece and some jackfruit strips on a lumpia wrapper.",
            "Sprinkle with about 1 tsp brown sugar.",
            "Fold sides inward then roll tightly. Moisten the end with water to seal.",
            "Heat oil in a pan over medium heat. Fry turon until golden brown and crispy (about 2-3 minutes per side).",
            "Drain on paper towels. Serve warm."
        ]
    },
    {
        id: 11,
        title: "Dinuguan",
        category: ["ulam", "meat"],
        difficulty: "medium",
        time: "90 mins",
        servings: "6-8",
        description: "Dinuguan is a savory Filipino stew made with pork meat and offal cooked in a rich, dark gravy of pig's blood, vinegar, and chili. Despite its appearance, it's a beloved dish often served with puto (rice cakes).",
        image: "https://i.pinimg.com/736x/d6/85/47/d685479ee87f87c7b83fcd686f0ce174.jpg",
        ingredients: [
            "1 kg pork (preferably with fat), cut into cubes",
            "1/2 kg pork liver, sliced",
            "1/2 kg pork intestines, cleaned and boiled until tender",
            "2 cups pig's blood",
            "1 cup vinegar",
            "6 cloves garlic, minced",
            "2 onions, chopped",
            "4 pieces green chili peppers (siling haba)",
            "2 tbsp cooking oil",
            "1 tbsp sugar",
            "Salt and pepper to taste",
            "Water as needed"
        ],
        instructions: [
            "In a large pot, heat oil and sauté garlic and onions until fragrant.",
            "Add pork and cook until lightly browned.",
            "Add liver and intestines. Cook for 5 minutes.",
            "Pour in vinegar. Do not stir. Let it boil for 3 minutes to cook off the raw vinegar taste.",
            "Add water just enough to cover the meat. Simmer until pork is tender (about 45 minutes).",
            "Slowly add pig's blood while stirring continuously to prevent lumps.",
            "Add chili peppers and sugar. Simmer for another 10 minutes.",
            "Season with salt and pepper. Serve hot with puto or rice."
        ]
    },
    {
        id: 12,
        title: "Laing",
        category: ["ulam", "vegetarian"],
        difficulty: "medium",
        time: "60 mins",
        servings: "6-8",
        description: "Laing is a Bicolano dish made from dried taro leaves cooked in coconut milk with chili peppers, shrimp paste, and meat. It's creamy, spicy, and packed with umami flavor.",
        image: "https://i.pinimg.com/736x/4e/85/19/4e8519795fe2dd840fe0c5aea075169b.jpg",
        ingredients: [
            "2 cups dried taro leaves (gabi leaves)",
            "4 cups coconut milk",
            "2 cups coconut cream",
            "200g pork belly, sliced thinly",
            "1 onion, chopped",
            "4 cloves garlic, minced",
            "2 tbsp shrimp paste (bagoong alamang)",
            "10 pieces siling labuyo (bird's eye chili), chopped",
            "2 tbsp ginger, julienned",
            "Salt to taste"
        ],
        instructions: [
            "In a pot, combine coconut milk, garlic, onions, ginger, and pork. Bring to a boil.",
            "Lower heat and simmer until pork is tender (about 20 minutes).",
            "Add dried taro leaves. Do not stir yet. Let the leaves absorb the liquid for about 5 minutes.",
            "Gently stir in shrimp paste and chili peppers. Simmer for another 15 minutes.",
            "Add coconut cream and simmer until sauce thickens (about 10 minutes).",
            "Season with salt if needed. Serve hot with rice."
        ]
    },
    {
        id: 13,
        title: "Sisig",
        category: ["ulam", "meat"],
        difficulty: "hard",
        time: "120 mins",
        servings: "4-6",
        description: "Sisig is a sizzling Filipino dish made from parts of pig's head and liver, usually seasoned with calamansi and chili peppers. It originated in Pampanga and has become a popular pulutan (beer match).",
        image: "https://i.pinimg.com/736x/89/6b/6e/896b6eefa3a69bd3ef1eb27a3b248e48.jpg",
        ingredients: [
            "1 kg pig's head (ears, cheeks, snout)",
            "1/2 kg pork liver",
            "3 onions, chopped",
            "5 cloves garlic, minced",
            "5 pieces calamansi (or 1 lemon), juiced",
            "5 pieces siling labuyo (bird's eye chili), chopped",
            "1/2 cup mayonnaise",
            "1 egg (optional)",
            "Salt and pepper to taste",
            "Butter for sizzling plate"
        ],
        instructions: [
            "Boil pig's head until tender (about 1.5 hours). Drain and grill or broil until crispy. Chop into small pieces.",
            "Boil liver until cooked through (about 20 minutes). Chop into small pieces.",
            "In a bowl, combine chopped meat, liver, onions, garlic, chili peppers, and calamansi juice. Mix well.",
            "Season with salt and pepper.",
            "Heat a sizzling plate with butter. Add the sisig mixture and cook until sizzling.",
            "Add mayonnaise and mix well. Top with raw egg if desired.",
            "Serve immediately while sizzling."
        ]
    },
    {
        id: 14,
        title: "Buko Pandan",
        category: ["dessert", "mirienda"],
        difficulty: "easy",
        time: "30 mins",
        servings: "6-8",
        description: "Buko Pandan is a refreshing Filipino dessert made with young coconut, pandan-flavored jelly, cream, and condensed milk. It's a cool and creamy treat perfect for hot days.",
        image: "https://i.pinimg.com/736x/69/32/a6/6932a63893ba81dadd840a549043e306.jpg",
        ingredients: [
            "2 cups young coconut (buko), shredded",
            "1 pack green pandan jelly, cubed",
            "1 pack all-purpose cream (250ml)",
            "1 can condensed milk (300ml)",
            "1/2 cup kaong (sugar palm fruit), optional",
            "1/2 cup nata de coco (coconut gel), optional"
        ],
        instructions: [
            "In a large bowl, combine all ingredients.",
            "Mix gently until well combined.",
            "Refrigerate for at least 1 hour before serving.",
            "Serve chilled."
        ]
    },
    {
        id: 15,
        title: "Taho",
        category: ["dessert", "breakfast"],
        difficulty: "easy",
        time: "15 mins",
        servings: "2",
        description: "Taho is a popular Filipino street food made of soft tofu, arnibal (sweet syrup), and sago pearls. It's typically sold by vendors who carry it in large aluminum containers.",
        image: "https://i.pinimg.com/736x/23/1a/e4/231ae4bdc752a06b863f81bd7b650ce7.jpg",
        ingredients: [
            "2 cups fresh soft tofu (silken tofu)",
            "1/2 cup brown sugar",
            "1/4 cup water",
            "1/2 cup cooked sago pearls (tapioca pearls)",
            "1 tsp vanilla extract (optional)"
        ],
        instructions: [
            "In a small saucepan, combine brown sugar and water. Simmer until sugar dissolves to make arnibal. Add vanilla if using. Let cool slightly.",
            "In serving cups, layer tofu and sago pearls.",
            "Drizzle with arnibal syrup.",
            "Serve warm."
        ]
    },
    {
        id: 16,
        title: "Paksiw na Isda",
        category: ["ulam", "seafood"],
        difficulty: "easy",
        time: "30 mins",
        servings: "4",
        description: "A tangy, vinegar-based fish stew with ginger and garlic, often made with milkfish (bangus) or tuna. The sour broth balances the richness of the fish, making it a comforting Filipino staple.",
        image: "https://i.pinimg.com/736x/b8/2a/ac/b82aaca1b2dfbca7ef8968c9e7e2b92f.jpg",
        ingredients: [
            "1 whole fish (bangus or tuna), cleaned and sliced",
            "1/2 cup vinegar",
            "1 cup water",
            "3 cloves garlic, crushed",
            "1 thumb-sized ginger, sliced",
            "1 onion, sliced",
            "1 bitter melon (ampalaya), sliced (optional)",
            "1 tsp whole peppercorns",
            "2 tbsp fish sauce (patis)",
            "1 chili pepper (siling haba, optional)"
    ],
        instructions: [
            "In a pot, combine vinegar, water, garlic, ginger, onion, peppercorns, and fish sauce. Bring to a boil.",
            "Add the fish and bitter melon (if using). Simmer for 10–15 minutes until fish is cooked.",
            "Add chili pepper and adjust seasoning with patis or vinegar if needed.",
            "Serve hot with steamed rice."
    ]
    },
    {
        id: 17,
        title: "Pinakbet",
        category: ["ulam"],
        difficulty: "medium",
        time: "60 mins",
        servings: "4–6",
        description: "A traditional Ilocano vegetable dish made with a variety of local vegetables like eggplant, bitter melon, and squash, cooked in shrimp paste (bagoong) for a savory flavor.",
        image: "https://i.pinimg.com/736x/65/e2/7a/65e27ad4750d27ef31b7d2c2da4564bc.jpg",
        ingredients: [
            "1 cup shrimp paste (bagoong alamang)",
            "1 cup water",
            "1 medium squash (kalabasa), cubed",
            "1 cup eggplant, sliced",
            "1 cup bitter melon (ampalaya), sliced",
            "1 cup string beans (sitaw), cut into 2-inch pieces",
            "1 onion, sliced",
            "2 tomatoes, chopped",
            "2 cloves garlic, minced",
            "2 tbsp cooking oil"
        ],
        instructions: [
            "In a pot, heat oil and sauté garlic, onion, and tomatoes until fragrant.",
            "Add shrimp paste and cook for 2 minutes.",
            "Add water and bring to a boil.",
            "Add squash and cook until tender.",
            "Add eggplant, bitter melon, and string beans. Simmer until all vegetables are cooked but still crisp.",
            "Adjust seasoning if needed. Serve hot with rice."
        ]
    },
    {
        id: 18,
        title: "Bicol Express",
        category: ["ulam", "meat"],
        difficulty: "medium",
        time: "45 mins",
        servings: "4-6",
        description: "A fiery coconut milk-based stew from the Bicol region, packed with pork, shrimp paste (bagoong alamang), and finger chilies. Creamy, spicy, and deeply savory.",
        image: "https://i.pinimg.com/736x/44/e1/76/44e17655f3864e91a766099f70f2048b.jpg",
        ingredients: [
            "500g pork belly, sliced thinly",
            "2 cups coconut milk",
            "1 cup coconut cream (kakang gata)",
            "3 cloves garlic, minced",
            "1 onion, chopped",
            "2 tbsp shrimp paste (bagoong alamang)",
            "6-8 green chilies (siling haba), sliced",
            "1 thumb-sized ginger, julienned",
            "2 tbsp oil",
            "Salt to taste"
    ],
        instructions: [
            "Heat oil in a pan. Sauté garlic, onion, and ginger until fragrant.",
            "Add pork and cook until lightly browned.",
            "Stir in shrimp paste, then pour in coconut milk. Simmer for 20–25 minutes until pork is tender.",
            "Add chilies and coconut cream. Simmer for another 5–10 minutes until thick and oily.",
            "Season with salt if needed. Serve with rice."
    ]
    },
    {
        id: 19,
        title: "Puto",
        category: ["dessert", "mirienda"],
        difficulty: "easy",
        time: "30 mins",
        servings: "12",
        description: "Steamed rice cakes that are soft, fluffy, and slightly sweet. Often served as a side dish or snack, and can be topped with cheese or salted egg.",
        image: "https://i.pinimg.com/736x/58/1a/49/581a493d166e208a1758af31ddf0f424.jpg",
        ingredients: [
            "2 cups rice flour",
            "1 cup sugar",
            "1 tbsp baking powder",
            "1/2 tsp salt",
            "1 1/2 cups coconut milk",
            "1/4 cup water",
            "Cheese or salted egg slices for topping (optional)"
        ],
        instructions: [
            "In a bowl, mix rice flour, sugar, baking powder, and salt.",
            "Add coconut milk and water. Mix until smooth.",
            "Pour batter into greased puto molds or muffin tins.",
            "Top with cheese or salted egg if desired.",
            "Steam for 15–20 minutes until cooked through.",
            "Let cool slightly before serving."
        ]
    },
    {
        id: 20,
        title: "Ginataang Alimango",
        category: ["ulam", "seafood"],
        difficulty: "medium",
        time: "40 mins",
        servings: "4",
        description: "Crabs simmered in rich coconut milk with ginger, chili, and greens. A luxurious Bicolano dish where sweetness of crab meets creamy, spicy gata.",
        image: "https://i.pinimg.com/736x/90/b2/1c/90b21caab379792d90df56cd1359b443.jpg",
        ingredients: [
            "2 large crabs (alimango), cleaned and halved",
            "2 cups coconut milk",
            "1 cup coconut cream",
            "3 cloves garlic, minced",
            "1 onion, sliced",
            "1 thumb-sized ginger, julienned",
            "2-3 chili peppers (siling haba)",
            "1 cup spinach or malunggay leaves",
            "2 tbsp fish sauce (patis)",
            "1 tbsp oil"
    ],
        instructions: [
            "Heat oil in a pot. Sauté garlic, onion, and ginger until fragrant.",
            "Add crabs and cook until shells turn orange.",
            "Pour in coconut milk and simmer for 15–20 minutes.",
            "Add chili, coconut cream, and malunggay. Cook for 5 more minutes.",
            "Season with fish sauce. Serve hot."
    ]
    },
    {
        id: 21,
        title: "Kinilaw na Isda",
        category: ["ulam", "seafood"],
        difficulty: "easy",
        time: "20 mins (+marinating)",
        servings: "4",
        description: "Fresh raw fish cured in vinegar, calamansi, and spices—bright, tangy, and refreshing. Often called the Philippines' answer to ceviche.",
        image: "https://i.pinimg.com/736x/09/ec/93/09ec93d1a0be390eb8a7a1032772022a.jpg",
        ingredients: [
            "500g fresh tuna or tanigue, cubed",
            "1/2 cup vinegar (sukang iloko or coconut vinegar)",
            "1/4 cup calamansi juice (or lime)",
            "1 thumb-sized ginger, julienned",
            "1 onion, diced",
            "2 chili peppers (siling labuyo), minced",
            "1 tsp salt",
            "1 tbsp sugar (optional)",
            "1 cucumber, diced (optional)"
    ],
        instructions: [
            "Rinse fish in saltwater, then drain.",
            "In a bowl, mix fish with vinegar and calamansi. Let sit for 10 minutes.",
            "Drain excess liquid. Add ginger, onion, chili, salt, and sugar. Toss gently.",
            "Chill for 30 minutes. Serve with cucumber if desired."
    ]
    },
    {
        id: 22,
        title: "Champorado",
        category: ["breakfast", "dessert"],
        difficulty: "easy",
        time: "45 mins",
        servings: "4",
        description: "A sweet, chocolatey rice porridge made with sticky rice and cocoa, traditionally paired with salty dried fish (tuyo). A nostalgic Filipino comfort food.",
        image: "https://i.pinimg.com/736x/42/16/e8/4216e8d45182e62938bc37e6e6ccbd43.jpg",
        ingredients: [
            "1 cup glutinous rice (malagkit)",
            "4 cups water",
            "1/2 cup cocoa powder or tablea (Filipino chocolate tablets)",
            "1/2 cup sugar (adjust to taste)",
            "1/2 tsp salt",
            "Evaporated milk (for serving)",
            "Dried fish (tuyo, optional)"
    ],
        instructions: [
            "Rinse rice until water runs clear. Boil in water until soft (20–25 mins).",
            "Add cocoa powder/tablea, sugar, and salt. Stir until thick and creamy.",
            "Simmer for 10 more minutes. Add water if too thick.",
            "Serve hot with evaporated milk and tuyo on the side."
    ]
    },
    {
        id: 23,
        title: "Leche Flan",
        category: ["dessert"],
        difficulty: "medium",
        time: "60 mins",
        servings: "6-8",
        description: "A rich, caramel-topped custard influenced by Spanish flan but made distinctly Filipino with more egg yolks and condensed milk. Silky, sweet, and decadent.",
        image: "https://i.pinimg.com/736x/6a/66/d7/6a66d7c07a831f1eb9ccfcfeeb394788.jpg",
        ingredients: [
            "10 egg yolks",
            "1 can (390g) condensed milk",
            "1 can (354ml) evaporated milk",
            "1 tsp vanilla extract",
            "1 cup sugar (for caramel)"
    ],
        instructions: [
            "Melt sugar in a llanera (flan mold) over low heat until golden. Swirl to coat the bottom. Let cool.",
            "Whisk egg yolks, condensed milk, evaporated milk, and vanilla. Strain mixture.",
            "Pour into caramel-lined mold. Cover with foil.",
            "Steam for 30–40 mins (or bake at 350°F in a water bath).",
            "Chill overnight. Invert onto a plate to serve."
    ]
    },
    {
        id: 24,
        title: "Tinolang Manok",
        category: ["ulam", "meat"],
        difficulty: "easy",
        time: "45 mins",
        servings: "4-6",
        description: "A comforting Filipino chicken soup with ginger, green papaya, and chili leaves. Light yet flavorful, perfect for rainy days or when you need a warm pick-me-up.",
        image: "https://i.pinimg.com/736x/1f/54/3a/1f543acc21a55a7bd7c3ff6c947b994b.jpg",
        ingredients: [
            "1 whole chicken (cut into serving pieces)",
            "1 tbsp oil",
            "1 thumb-sized ginger (sliced into strips)",
            "4 cloves garlic (minced)",
            "1 onion (sliced)",
            "2 cups green papaya (peeled and cubed)",
            "2 cups chili leaves (dahon ng sili) or spinach",
            "4 cups water",
            "2 tbsp fish sauce (patis)",
            "Salt and pepper to taste",
            "1-2 green chili peppers (siling haba, optional)"
    ],
        instructions: [
            "Heat oil in a pot over medium heat. Sauté garlic, onion, and ginger until fragrant.",
            "Add chicken pieces and cook until lightly browned (about 5 minutes).",
            "Pour in water and bring to a boil. Skim off any scum that rises to the surface.",
            "Lower heat to a simmer. Cover and cook for 20-25 minutes or until chicken is tender.",
            "Add green papaya and cook for another 5-7 minutes until slightly soft.",
            "Season with fish sauce, salt, and pepper. Add chili peppers if using.",
            "Turn off heat. Stir in chili leaves and cover for 2 minutes to wilt.",
            "Serve hot with steamed rice."
    ]
    },
    {
        id: 25,
        title: "Lumpiang Ubod",
        category: ["ulam", "mirienda"],
        difficulty: "medium",
        time: "60 mins",
        servings: "4-6",
        description: "A fresh spring roll made with ubod (heart of palm), vegetables, and shrimp, wrapped in a thin crepe-like wrapper. Served with a sweet and savory sauce.",
        image: "https://i.pinimg.com/736x/14/b2/88/14b288701a2d9152f491cf548611e5e4.jpg",
        ingredients: [
            "1 cup ubod (heart of palm), julienned",
            "1 cup carrots, julienned",
            "1 cup green beans, sliced",
            "1/2 cup shrimp, peeled and deveined (optional)",
            "1/2 cup minced pork (optional)",
            "1/4 cup onions, chopped",
            "2 cloves garlic, minced",
            "1 tbsp soy sauce",
            "Salt and pepper to taste",
            "12 pieces lumpia wrappers",
            "Oil for frying"
        ],
        instructions: [
            "In a pan, sauté garlic and onions until fragrant. Add shrimp and pork (if using) and cook until done.",
            "Add ubod, carrots, and green beans. Stir-fry for 3-5 minutes. Season with soy sauce, salt, and pepper.",
            "Let the filling cool slightly. Place about 2 tbsp of filling on a lumpia wrapper. Fold sides inward and roll tightly.",
            "Heat oil in a pan over medium heat. Fry lumpia until golden brown and crispy (about 3-4 minutes per side).",
            "Drain on paper towels. Serve with sweet chili sauce or vinegar dipping sauce."
        ]
    },
    {
        id: 27,
        title: "Pancit Palabok",
        category: ["noodles", "mirienda"],
        difficulty: "medium",
        time: "60 mins",
        servings: "6-8",
        description: "A festive Filipino noodle dish with golden shrimp sauce, crushed chicharon, and a confetti of toppings. Bright, savory, and distinctly Pinoy.",
        image: "https://i.pinimg.com/736x/32/1f/c3/321fc3c81c665a818466810129ababe3.jpg",
        ingredients: [
            "500g rice sticks (bihon noodles)",
            "2 cups shrimp broth (from boiling shrimp heads/shells)",
            "1/2 cup annatto seeds (achuete) soaked in 1/2 cup warm water",
            "1/2 cup flour",
            "4 cloves garlic, minced",
            "1 onion, chopped",
            "200g ground pork",
            "2 tbsp fish sauce (patis)",
            "1 tsp black pepper",
            "Hard-boiled eggs, sliced",
            "Crushed chicharon (pork rinds)",
            "Tinapa flakes (smoked fish)",
            "Cooked shrimp, peeled",
            "Green onions, chopped",
            "Calamansi or lemon wedges"
    ],
        instructions: [
            "Soak rice noodles in water for 15 mins. Drain and set aside.",
            "Make the sauce: Strain annatto water. In a pan, sauté garlic and onion until soft.",
            "Add ground pork and cook until browned. Sprinkle flour and stir for 2 mins.",
            "Pour in shrimp broth and annatto water. Simmer until thick (like gravy). Season with fish sauce and pepper.",
            "Boil noodles in water for 3 mins. Drain and toss with a bit of oil to prevent sticking.",
            "Assemble: Place noodles on a platter. Ladle sauce over the top.",
            "Garnish with eggs, chicharon, tinapa, shrimp, and green onions.",
            "Serve with calamansi wedges for squeezing."
    ]
    },
    {
        id: 28,
        title: "Sopas",
        category: ["mirienda", "breakfast"],
        difficulty: "easy",
        time: "40 mins",
        servings: "6",
        description: "A creamy, hearty Filipino chicken and macaroni soup with evaporated milk, vegetables, and hot dog slices. A rainy-day classic that tastes like childhood.",
        image: "https://i.pinimg.com/736x/9a/ba/27/9aba273e757bf5506e718f3301535fbe.jpg",
        ingredients: [
            "2 cups elbow macaroni",
            "500g chicken breast or thighs, boiled and shredded",
            "1 cup hotdogs or ham, sliced diagonally",
            "1 onion, chopped",
            "3 cloves garlic, minced",
            "1 carrot, diced",
            "2 cups cabbage, shredded",
            "6 cups chicken broth (from boiling chicken)",
            "1 cup evaporated milk",
            "2 tbsp butter",
            "Salt and pepper to taste"
    ],
        instructions: [
            "Sauté garlic, onion, and hotdogs in butter until fragrant.",
            "Add shredded chicken and carrots. Cook for 2 mins.",
            "Pour in chicken broth and bring to a boil. Add macaroni and cook until al dente.",
            "Stir in cabbage and evaporated milk. Simmer for 5 mins (don’t boil after adding milk).",
            "Season with salt and pepper. Serve hot with bread."
    ]
    },
    {
        id: 29,
        title: "Lomi",
        category: ["noodles", "breakfast"],
        difficulty: "medium",
        time: "50 mins",
        servings: "4",
        description: "A thick, rich egg noodle soup from Batangas, loaded with pork, liver, and a sticky cornstarch-thickened broth. Best eaten with calamansi and patis.",
        image: "https://i.pinimg.com/736x/a9/f2/52/a9f252d0974dc167f0b5c908f65c6543.jpg",
        ingredients: [
            "500g fresh lomi noodles (or thick egg noodles)",
            "200g pork belly, sliced thin",
            "100g pork liver, sliced",
            "5 cups pork or chicken broth",
            "3 cloves garlic, minced",
            "1 onion, sliced",
            "2 tbsp cornstarch (mixed with 1/4 cup water)",
            "1 cup cabbage, shredded",
            "1 carrot, julienned",
            "2 eggs, beaten",
            "3 tbsp fish sauce (patis)",
            "1 tsp black pepper",
            "Calamansi and chili garlic oil (for serving)"
    ],
        instructions: [
            "Sauté garlic and onion until fragrant. Add pork belly and cook until browned.",
            "Add pork liver and fish sauce. Stir-fry for 2 mins.",
            "Pour in broth and bring to a boil. Add noodles and simmer for 5 mins.",
            "Stir in cornstarch slurry to thicken the broth.",
            "Add cabbage, carrots, and beaten eggs. Stir gently to create egg ribbons.",
            "Season with pepper. Serve hot with calamansi and chili oil."
    ]
    },
    {
        id: 30,
        title: "Silog Meals",
        category: ["breakfast", "rice"],
        difficulty: "easy",
        time: "30 mins",
        servings: "2",
        description: "A hearty Filipino breakfast combo of garlic fried rice (sinangag), cured beef (tapa), and sunny-side-up egg (itlog). Served with vinegar dip or atchara for balance.",
        image: "https://i.pinimg.com/736x/6e/3a/d9/6e3ad977021d54236744e69d048ec07c.jpg",
        ingredients: [
            "1 cup leftover rice (preferably day-old)",
            "Meat of you choice (beef, pork, chicken, etc.)",
            "3 cloves garlic (minced)",
            "2 eggs",
            "3 tbsp soy sauce",
            "2 tbsp vinegar (cane or coconut)",
            "1 tbsp brown sugar",
            "1 tsp ground black pepper",
            "2 tbsp cooking oil",
            "Salt to taste",
            "Atchara (pickled papaya) or vinegar dip (for serving)"
    ],
        instructions: [
            "Marinate the beef: Combine soy sauce, vinegar, sugar, and black pepper. Add sliced beef and marinate for 15 mins (or overnight for deeper flavor).",
            "Cook the tapa: Heat oil in a pan. Sauté marinated beef until browned and slightly caramelized. Set aside.",
            "Make sinangag (garlic rice): In the same pan, sauté minced garlic until golden. Add rice, breaking up clumps. Fry until crispy. Season with salt.",
            "Fry the eggs: Cook sunny-side-up eggs with runny yolks.",
            "Serve: Plate garlic rice, beef tapa, and egg together. Add atchara or vinegar dip on the side."
    ]
    }, 
    {
        id: 30,
        title: "Arroz Caldo",
        category: ["breakfast", "comfort food"],
        difficulty: "medium",
        time: "1 hour",
        servings: "4-6",
        description: "A savory Filipino rice porridge with tender chicken, ginger, and garlic, topped with crispy fried garlic, green onions, and calamansi. Perfect for chilly mornings or sick days.",
        image: "https://i.pinimg.com/736x/44/d2/3b/44d23b29926b590200120be360bd2d4f.jpg",
        ingredients: [
            "1 cup jasmine rice (or glutinous rice for thicker texture)",
            "500g chicken thighs or legs (bone-in for flavor)",
            "6 cups chicken broth (or water)",
            "1 thumb-sized ginger (julienned)",
            "5 cloves garlic (minced, divided)",
            "1 onion (chopped)",
            "2 tbsp fish sauce (patis)",
            "1 tsp safflower threads (kasubha) or turmeric (for color, optional)",
            "3 tbsp cooking oil",
            "Salt and pepper to taste",
            "Toppings: Fried garlic, green onions, calamansi, hard-boiled eggs"
    ],
        instructions: [
            "Sauté aromatics: Heat oil in a pot. Fry half the garlic until golden, then set aside for toppings. Sauté onion, ginger, and remaining garlic until fragrant.",
            "Cook chicken: Add chicken pieces and sear until lightly browned. Pour fish sauce and stir.",
            "Simmer rice: Add rice and broth. Bring to a boil, then lower heat. Simmer for 30-40 mins, stirring occasionally, until thick and creamy. Add kasubha/turmeric for color.",
            "Shred chicken: Remove bones, shred meat, and return to the pot. Season with salt/pepper.",
            "Serve: Ladle into bowls. Top with fried garlic, green onions, calamansi juice, and eggs."
    ]
    }   
];

// Initialize Recipes Page
// Initialize Recipes Page
function initializeRecipes() {
    const recipesGrid = document.getElementById('recipes-grid');
    const searchInput = document.getElementById('search-input');
    const categoryFilter = document.getElementById('category-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    
    // Get category from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const urlCategory = urlParams.get('category');
    
    if (urlCategory) {
        categoryFilter.value = urlCategory;
        // Immediately filter recipes when page loads with a category parameter
        filterRecipes();
    }
    
    // Display all recipes initially if no category filter
    if (!urlCategory) {
        displayRecipes(recipes);
    }
    
    // Rest of your code remains the same...
    // Add event listeners for filtering
    searchInput.addEventListener('input', filterRecipes);
    categoryFilter.addEventListener('change', filterRecipes);
    difficultyFilter.addEventListener('change', filterRecipes);
    
    // Function to filter recipes based on search and filters
    function filterRecipes() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;
        const selectedDifficulty = difficultyFilter.value;
        
        const filteredRecipes = recipes.filter(recipe => {
            // Search term filter
            const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) || 
                               recipe.description.toLowerCase().includes(searchTerm);
            
            // Category filter
            const matchesCategory = selectedCategory === 'all' || 
                                  recipe.category.includes(selectedCategory);
            
            // Difficulty filter
            const matchesDifficulty = selectedDifficulty === 'all' || 
                                    recipe.difficulty === selectedDifficulty;
            
            return matchesSearch && matchesCategory && matchesDifficulty;
        });
        
        displayRecipes(filteredRecipes);
    
    
    // Rest of your functions remain the same...
    }
    
    // Function to display recipes in the grid
    function displayRecipes(recipesToDisplay) {
        recipesGrid.innerHTML = '';
        
        if (recipesToDisplay.length === 0) {
            recipesGrid.innerHTML = '<p class="no-results">No recipes found. Try adjusting your filters.</p>';
            return;
        }
        
        recipesToDisplay.forEach(recipe => {
            const recipeCard = document.createElement('div');
            recipeCard.className = 'recipe-card';
            recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
                <div class="recipe-content">
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <div class="recipe-meta">
                        <span>${recipe.time}</span>
                        <span>${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
                    </div>
                    <p class="recipe-desc">${recipe.description}</p>
                    <a href="#" class="view-recipe" data-id="${recipe.id}">View Recipe</a>
                </div>
            `;
            recipesGrid.appendChild(recipeCard);
        });
        
        // Add click event to view recipe buttons
        const viewRecipeBtns = document.querySelectorAll('.view-recipe');
        viewRecipeBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const recipeId = parseInt(this.getAttribute('data-id'));
                showRecipeModal(recipeId);
            });
        });
    }
    
    // Function to show recipe modal
    function showRecipeModal(recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        const modal = document.getElementById('recipe-modal');
        const modalBody = document.querySelector('.modal-body');
        
        modalBody.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-img">
            <h2 class="modal-recipe-title">${recipe.title}</h2>
            <div class="modal-recipe-meta">
                <span><i class="fas fa-clock"></i> ${recipe.time}</span>
                <span><i class="fas fa-utensils"></i> ${recipe.servings}</span>
                <span><i class="fas fa-tachometer-alt"></i> ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</span>
            </div>
            <p class="modal-recipe-desc">${recipe.description}</p>
            
            <div class="ingredients-section">
                <h3 class="section-title">Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
            
            <div class="instructions-section">
                <h3 class="section-title">Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}
                </ol>
            </div>
        `;
        
        modal.style.display = 'block';
        
        // Close modal when clicking X
        document.querySelector('.close-modal').addEventListener('click', function() {
            modal.style.display = 'none';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
}