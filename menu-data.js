window.ZONE_MENU=[];
function section(category,side,lines){for(const line of lines.trim().split('\n')){const [name,price,description='']=line.split('|');ZONE_MENU.push({id:ZONE_MENU.length+1,name,price,description,category,side});}}
section('Appetizers','food',`
Miso Soup|88|Dashi broth, miso paste, dried seaweed, chives and tofu.
Edamame|199|Steamed soybeans with salt.
Spicy Edamame|210|Steamed soybeans with special hot sauce.
Gyozas|225|Japanese pork dumplings, steamed or fried.
Lumpiang Shanghai|195|Filipino fried spring rolls.
Hiyashi Wakame|205|Fresh seaweed salad with ponzu sauce.
Spicy Maguro Tartar|265|Four toasted gyoza wrappers with tuna, avocado, chives and chili.
Spicy Sake Tartar|265|Four toasted gyoza wrappers with salmon, avocado, chives and chili.
Kanikama Tempura|225|Deep-fried crab sticks with spicy mayo or sweet dipping sauce.
Uzusukuri|265|Rolled salmon with fresh seaweed and avocado, chives and ponzu sauce.
Ceviche Sakana|285|Salmon tempura with onion, chives and ponzu sauce.
Sonomono|318|Fried salmon, cucumber, wakame, kanikama, shrimp and rice vinegar dressing.
Age Dashi Tofu|209|Fried tofu with tenyusu sauce, chives and bonito flakes.
`);
section('Hosomaki','food',`
Kappa Maki|105|Cucumber. Six thin sushi rolls.
Avocado Maki|115|Avocado. Six thin sushi rolls.
Sake Maki|145|Salmon. Six thin sushi rolls.
Tekka Maki|145|Tuna. Six thin sushi rolls.
Unagi Maki|165|Eel. Six thin sushi rolls.
Kanikama Maki|125|Crabstick. Six thin sushi rolls.
`);
section('Sashimi & Nigiri','food',`
Maguro Sashimi|310|Tuna. Seven slices.
Sake Sashimi|310|Salmon. Seven slices.
Unagi Sashimi|345|Eel. Seven slices.
Hamachi Sashimi|399|Yellowtail. Seven slices.
Saba Sashimi|295|Mackerel. Seven slices.
Kanikama Sashimi|285|Crabsticks. Seven slices.
Hamachi Nigiri|288|Yellowtail. Two rice balls with fish on top.
Sake Nigiri|125|Salmon. Two pieces.
Maguro Nigiri|125|Tuna. Two pieces.
Saba Nigiri|135|Mackerel. Two pieces.
Unagi Nigiri|145|Eel. Two pieces.
Ebi Nigiri|135|Shrimp. Two pieces.
Kanikama Nigiri|100|Crabstick. Two pieces.
Sake Tatake|410|Thinly sliced seared salmon, fresh seaweed and special sauce.
Maguro Tatake|410|Thinly sliced seared tuna, fresh seaweed and special sauce.
`);
section('Poke & Rice','food',`
Chirashi Bowl|699|Rice with a variety of sashimi.
Tatake Bowl|439|Seared tuna or salmon, rice, avocado, fresh seaweed, masago and ponzu.
Sake / Maguro Poke|329|Salmon, tuna or both, rice, avocado, carrots, cucumber, edamame and passion fruit sauce.
Spicy Sake / Maguro Poke|329|Salmon, tuna or both, rice, avocado, carrots, cucumber, edamame, chives and chili sauce.
Yakimeshi|175|Japanese fried rice, sesame oil, soy sauce, vegetables, egg and chives.
Special Yakimeshi|210|Japanese fried rice with chicken or beef, vegetables, egg and chives.
Shrimp Yakimeshi|255|Japanese fried rice with shrimp, vegetables, egg and chives.
Premium Yakimeshi|285|Japanese fried rice with chicken, beef and shrimp, vegetables, egg and chives.
`);
section('Baked & Special Rolls','food',`
California Maki Baked|355|Sushi rice, crabstick, masago, spicy mayo, cream cheese, chives and sesame.
Spicy Tuna Baked|385|Sushi rice, tuna, chili sauce, spicy mayo, chives, masago and sesame.
Shrimp Tempura Baked|395|Baked sushi. Please ask the team for the ingredient list.
Creamy Salmon Baked|385|Sushi rice, salmon, cream cheese, spicy mayo, chives, masago and sesame.
California Maki|190|Surimi, avocado and cucumber. Eight pieces.
California Tempura|210|Surimi, avocado and cucumber. Fried roll, eight pieces.
California Supreme|215|Surimi, avocado, cucumber and masago. Eight pieces.
Mikkuso Roll|245|Salmon, tuna and avocado. Eight pieces.
Philadelphia Maki|265|Salmon, cream cheese and avocado. Eight pieces.
Philadelphia Tempura|288|Salmon, cream cheese and avocado. Fried roll, eight pieces.
Tico Roll|245|Surimi, avocado and cucumber, covered with sweet plantain. Eight pieces.
Vegetarian Roll|245|Cucumber, carrots and avocado. Eight pieces.
Shiiro Roll|275|Salmon tempura, avocado, cucumber and spicy mayo. Eight pieces.
Salmon Skin Crispy|265|Crispy salmon skin, avocado and chives. Eight pieces.
`);
section('Sushi Deluxe','food',`
Sake Roll|355|Salmon, avocado, cream cheese, torched salmon, spicy mayo and masago.
Kasake Roll|355|Fried crabstick, avocado, cream cheese, torched salmon, spicy mayo and chives.
Bombastik Roll|375|Chopped salmon, tuna, kanikama and surimi, spicy mayo, masago, sriracha, sesame oil and chives.
Fusion Roll|355|Salmon and avocado with torched tuna and spicy mayo.
Toshi Roll|355|Chicken teriyaki, cucumber and avocado, covered with sweet plantain.
Veggie Deluxe Roll|355|Cucumber, carrots, avocado, lettuce and fresh seaweed. Also listed at ₱335 in the vegetarian section; confirm with the team.
Creamy Tofu Roll|355|Fried tofu, spicy mayo and avocado, topped with chopped tofu and spicy mayo.
Ebi Avocado Roll|355|Shrimp tempura, cream cheese and cucumber, covered with avocado.
Kani Supreme Roll|355|Avocado, cucumber, chopped kanikama, cream cheese, chives and masago.
Yokio Roll|310|Tuna, salmon, avocado and cream cheese. Six pieces, no rice.
Mizuki Tempura Roll|345|Tuna, salmon, kanikama and chives. Six pieces, fried, no rice.
Rejn Roll|379|Shrimp tempura, cucumber, cream cheese and crabstick. Ten pieces, fried.
Kamaguro Roll|355|Tuna, avocado, cream cheese and kanikama.
Kisyohi Roll|355|Salmon, avocado, cream cheese, salmon topping and fresh seaweed.
Rainbow Roll|355|Kanikama, cucumber and avocado, covered with tuna, salmon and avocado.
Taal Roll|355|Salmon, avocado, cream cheese, chopped salmon, chives and masago.
Tiger Roll|355|Tuna, cream cheese, avocado, tuna topping and spicy mayo.
Shiori Roll|355|Salmon, steamed shrimp, salmon topping, lemon and salt.
Spicy Sake Roll|369|Chopped salmon, chili garlic, chives, sriracha and sesame oil.
Mango Roll|355|Shrimp tempura and cream cheese, topped with sweet mango.
Shrimp Tempura Roll|365|Shrimp tempura, avocado and spicy mayo.
Dragon Roll|355|Tempura salmon, cream cheese, tuna and avocado.
Unagi Roll|365|Cucumber and avocado, covered with eel.
Spicy Maguro Roll|365|Chopped tuna, chili garlic, chives, sriracha and sesame oil.
`);
section('Combinations & Bento','food',`
Combo for 1|615|One roll of your choice, six chef-selected nigiri and one miso soup.
Combo for 2|1190|Two rolls of your choice, twelve chef-selected nigiri and two miso soups.
Combo for 4|2255|Two rolls, twelve nigiri, twelve sashimi, four miso soups and steamed edamame.
Combo for 6 — Four Rolls|4010|Four rolls, twelve nigiri, twelve sashimi, tekka maki, sake maki, six miso soups and steamed edamame.
Combo for 6 — Seven Rolls|6990|Seven rolls, twelve nigiri, twelve sashimi, tekka maki, sake maki, eight miso soups, eight fried gyozas and edamame. Party size is listed as six in the source menu; confirm with the team.
Bento 1 — Chicken|399|Teriyaki or katsu chicken, yakimeshi, salad, four California rolls, four fried gyozas and miso soup.
Bento 2 — Shrimp|499|Teriyaki or katsu shrimp, yakimeshi, salad, four California rolls, four fried gyozas and miso soup.
Bento 3 — Beef|499|Teriyaki or katsu beef, yakimeshi, salad, four California rolls, four fried gyozas and miso soup.
Bento 4 — Tofu|399|Fried tofu, yakimeshi, salad, four vegetarian rolls, steamed edamame and miso soup.
`);
section('Tempura & Teriyaki','food',`
Chicken Tempura|365|Tempura sauce and miso soup included.
Shrimp Tempura|459|Tempura sauce and miso soup included.
Veggie Tempura|305|Mixed vegetables, tempura sauce and miso soup.
Mixto Tempura|445|Vegetables, chicken and shrimp, tempura sauce and miso soup.
Chicken Teriyaki|375|Chicken breast in teriyaki sauce with sautéed vegetables, rice and miso soup.
Pork Teriyaki|385|Pork tenderloin in teriyaki sauce with sautéed vegetables, rice and miso soup.
Beef Teriyaki|399|Beef tenderloin in teriyaki sauce with sautéed vegetables, rice and miso soup.
Salmon or Tuna Teriyaki|410|Fish in teriyaki sauce with sautéed vegetables, rice and miso soup.
Shrimp Teriyaki|410|Shrimp in teriyaki sauce with sautéed vegetables, rice and miso soup.
`);
section('Donburi & Noodles','food',`
Gyudon|375|Thinly sliced beef and onions in sweet soy broth, over rice with miso soup.
Katsudon|375|Panko-breaded pork, egg and onions in dashi broth, over rice with miso soup.
Tendon|395|Crispy shrimp tempura with concentrated tempura sauce, over rice with miso soup.
Oyakodon|365|Breaded chicken and egg in a sweet-savory sauce, over rice with miso soup.
Tori Katsu|375|Breaded chicken with rice and miso soup.
Ramen|355|Noodles in special broth with pork, egg, chives, toasted garlic and nori.
Spicy Ramen|365|Noodles in special broth with pork, egg, chives, toasted garlic, nori and chili.
Seafood Ramen|399|Miso-based broth with shrimp, mussels, squid, crabstick and wakame.
Nabeyaki Udon / Soba|365|Noodles in broth with shrimp tempura, egg, nori and chives.
Tempura Udon / Soba|365|Noodles in broth with shrimp and vegetable tempura, nori and chives.
Yakiudon / Yakisoba|365|Sautéed noodles, vegetables, chicken, beef, shrimp and katsu sauce, bonito flakes and calamansi. Not a soup.
`);
section('Pasta','food',`
Penne Alla Vodka|365|Tomato and cream sauce with vodka and salmon.
Spaghetti Bolognesse|375|Tomato sauce with ground beef.
Fettuccine Alfredo|365|White sauce with chicken breast.
Spaghetti de la Nonna|365|Olive oil, cherry tomatoes, black olives and Parmesan.
Amatriciana|385|Spaghetti in pomodoro sauce with bacon and black olives.
`);
section('Seafood & Korean','food',`
Seafood Platter|1210|For 1–2. Shrimp, crabs, squid, mussels, potatoes and sweet corn. Rice included; total weight 1 kg.
Seafood Platter L|2355|For 2–4. Shrimp, crabs, octopus, squid, mussels, potatoes and corn. Rice, miso soup and Shanghai; 2.5 kg.
Seafood Platter XL|4550|For 6–8. Shrimp, crabs, octopus, lobster, squid, mussels, sausage, potatoes and corn. Rice, miso, edamame and Shanghai; 3.5 kg.
Bibimbap|345|Rice, beef, zucchini, carrots, spinach, onion, sesame oil, egg and chili paste. Miso soup included.
Gimbap|295|Beef bulgogi, cucumber, carrots, egg and sesame oil. Miso soup included.
Gimbap Veggie|275|Fried tofu, cucumber, carrots and sesame oil. Miso soup included.
Bibimbap Veggie|325|Rice, tofu, zucchini, carrots, spinach, onion, sesame oil and chili paste. Miso soup included.
Bulgogi Bowl|355|Rice, beef, chives and sesame seeds. Miso soup included.
`);
section('Filipino','food',`
Pancit Guisado|485|For sharing. Rice noodles, chicken and vegetables, topped with crispy pork belly and chives.
Tokwa at Baboy|375|For sharing. Fried tofu and pork with onion, chives and toyomansi.
Kare-Kare|395|For sharing. Peanut sauce, crispy pork belly and vegetables. One cup of rice included.
Chicken Wings|395|For sharing. Buffalo, BBQ, honey garlic or garlic Parmesan sauce.
Crispy Pata|895|For sharing. Deep-fried pork leg with toyomansi.
Pork Sisig|395|For sharing. Fried pork, onion, mayo and toyomansi. One cup of rice included.
Baby Back Ribs — Half|560|Slow-cooked pork ribs with special sauce and caramelized BBQ glaze.
Baby Back Ribs — Full|1090|Slow-cooked pork ribs with special sauce and caramelized BBQ glaze.
Sisig Tofu|345|Fried tofu, onion and toyomansi. One cup of rice included.
`);
section('Sulit Meals','food',`
Burger Steak|175|Sizzling burger steak with rice.
Chicken Inasal|175|Grilled chicken marinated in calamansi, lemongrass, ginger and soy sauce. Steamed rice included.
Pork Adobo|175|Braised pork with soy sauce, vinegar and garlic, over rice.
Fish Fillet|175|Crispy fried fish with creamy tartar sauce and steamed rice.
Tuna Teppanyaki|195|Butter-seared tuna with soy sauce and garlic, with steamed rice.
`);
section('Fruit Shakes','drinks',`
Banana Shake|185
Melon Shake|185
Watermelon Shake|185
Buko Shake|195
Mango Shake|195
Strawberry Shake|195
Avocado Shake|195
`);
section('Cocktails','bar',`
White Lady|350|Served in a martini glass.
Cosmopolitan|350|Served in a martini glass.
Jack Rose|350|Served in a martini glass.
Matador|350|Served in a martini glass.
Blue Kamikaze|350|Served in a margarita glass.
Sunset Margarita|350|Served in a margarita glass.
Berry Sour Refresher|350|Served in a margarita glass.
Classic Margarita|350|Served in a margarita glass.
Tequila Sunrise|350|Served in a highball glass.
Blue Hawaiian|350|Served in a highball glass.
Madras|350|Served in a highball glass.
Caribbean Gin Breeze|350|Served in a highball glass.
`);
section('Spirits','bar',`
Jack Daniels|2799 / 220|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
JW Black Label|2899 / 220|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Bacardi|2199
Jagermeister|2699 / 220|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Jose Cuervo|2499 / 220|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
1800 Tequila|3999
Absolut Vodka|2199 / 220|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Tanqueray Gin|2899
Grey Goose Vodka|4399
Bombay Sapphire|2499
`);
section('Beer & Mixes','bar',`
Stallion|130
Pale Pilsen|130
San Mig Light|130
San Mig Apple|130
Smirnoff|130
Jager Bomb|270
Jack Coke|270
Rum Coke|270
Tonic Vodka|270
`);
section('Wine','bar',`
Jacob’s Creek — Red|1299 / 280|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Yellow Tail — White|1299 / 280|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Matua Marlborough|1399 / 290|Prices as listed in the bar menu. Ask the team to confirm serving sizes.
Perlino Moscato Rosé|1399|Sparkling wine.
Bottega White Gold|2999|Sparkling wine.
`);
section('Non-alcoholic','drinks',`
Bottled Water|50
Coke / Sprite|130
Pineapple Juice|145
Red Bull|200
`);
