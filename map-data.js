window.PAIR_MAPS = {
  'pair-1': {
    title: 'Mango Sago / Mango Pomelo Sago',
    threads: [
      { id: 'all', label: 'All Stops' },
      { id: 'sago', label: 'Sago', color: '#b07d2b' },
      { id: 'tongsui', label: 'Tong Sui', color: '#a63a2b' },
      { id: 'emergence', label: 'Hong Kong & Singapore', color: '#2d6a4f' },
    ],
    routes: [
      {
        thread: 'sago',
        color: '#b07d2b',
        dashArray: '6 6',
        coords: [
          [-3.2385, 130.1453],
          [2.5, 124.5],
          [8.5, 121.0],
          [12.8797, 121.774],
          [17.5, 117.5],
          [22.35, 113.55],
          [14.0, 113.0],
          [1.2, 104.0],
          [2.1896, 102.2501],
          [7.5, 93.0],
          [5.8, 80.5],
          [8.0, 65.0],
          [-15.0, 42.0],
          [-35.0, 20.0],
          [-15.0, -5.0],
          [15.0, -24.0],
          [38.7, -9.5],
          [49.5, -5.0],
          [51.5072, -0.1276],
        ],
      },
      {
        thread: 'tongsui',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [34.3416, 108.9398],
          [30.5, 112.5],
          [25.8, 113.8],
          [23.1291, 113.2644],
          [22.4445, 114.0222],
          [15.0, 112.5],
          [10.5, 109.5],
          [1.3521, 103.8198],
        ],
      },
    ],
    stops: [
      {
        id: 'p1-philippines',
        step: 1,
        thread: 'sago',
        color: '#b07d2b',
        coords: [12.8797, 121.774],
        place: 'Philippines',
        era: '13th century • Tang Dynasty (618 to 907CE)',
        title: 'Origins of Sago',
        body: `
          <p>The exact origins of sago consumption are unclear. However, some sources suggest that the earliest recorded evidence of sago consumption dates back to the 13th century in the Philippines, where indigenous islanders used sago as a staple food (). Moore suggests that sago travelled to China during the Tang Dynasty (618 to 907CE), through trade routes between Southeast Asia and China.</p>
        `,
      },
      {
        id: 'p1-xincun',
        step: 2,
        thread: 'sago',
        color: '#b07d2b',
        coords: [22.35, 113.55],
        place: 'Xincun, Southern China (Pearl River Delta)',
        era: '3,350–2,470 BCE • Jin Dynasty (290–307 AD)',
        title: 'In China',
        body: `
          <p>Excavation efforts in Xincun on the southern coast of China, near the Pearl River Delta, found that before the cultivation of rice, between the years of 3,350–2,470 BCE, sago-type palms were an important food source and staple carbohydrate for the ancient Chinese (Yang et. al., 2013). Furthermore, they found that some historical records from the Jin Dynasty (290-307 AD) mention starch producing palms, while other literary records propose that the sugar palm was extracted as a starch resource by the Hakka of southern Hainan. This suggests that sago, or sago-like starch-producing palms, were already cultivated and consumed in east Asia way before the Tang Dynasty.</p>
          <p>Yang et. al. recovered a total of 454 starch granules during their excavation (a lot.)</p>
        `,
      },
      {
        id: 'p1-maluku',
        step: 3,
        thread: 'sago',
        color: '#b07d2b',
        coords: [-3.2385, 130.1453],
        place: 'Maluku Islands, Indonesian Archipelago',
        era: '1511–1512',
        title: 'Metroxylon Sagu & Maluku Islands',
        body: `
          <p>Sago is a starch that is extracted from the pith of the sago palm, which is native to the Indonesian Archipelago ().</p>
          <p>The starch granule we are most interested in is the starch extracted from the Metroxylon Sagu - a tropical palm tree native to the Maluku Islands of the Indonesian Archipelago (). This is the tree that produces the palm we then process into the sago we consume in mango sago.</p>
          <p>The Maluku Islands are also known as Indonesia's <strong>SPICE ISLANDS!</strong> The Portuguese arrived here in 1512, landing on Ambon, having landed in Malacca in 1511 ().</p>
        `,
      },
      {
        id: 'p1-malacca',
        step: 4,
        thread: 'sago',
        color: '#b07d2b',
        coords: [2.1896, 102.2501],
        place: 'Malacca & Macao',
        era: '1555 • 1570s • 1814',
        title: 'The Portuguese, Etymology of "sago" & The Modern Sago',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xt2tv16aV8nb7/Uvi/image.png?w=display',
            caption: 'Sago pudding is a sweet pudding made by combining sago with water and coconut milk. There are variations of sago pudding throughout Southeast Asia, as well as in the UK.',
          },
        ],
        body: `
          <p><strong>The Portuguese:</strong> The Portuguese tried to dominate the spice and silver trade by leveraging Malay Malacca's existing status as a spice emporium and developing Macao into an entrepôt to China. This establishes a historic connection of trade between Southeast Asia and China.</p>
          <p><strong>Etymology of "sago":</strong> The earliest known use of the word 'sago' is from 1555. It was borrowed from Austronesian (Malay) 'sagu' (), referring to the palm tree. It was then adopted by the Portuguese and the Dutch in the 1570s (), suggesting that sago was also introduced to Europe around this time.</p>
          <p><strong>A rhythm of connection - sago as the golden thread:</strong> The presence of starch indigenous to Indonesian islands in ancient Chinese diets suggest that there already existed trade relationships between southern China and Southeast Asia. The etymological connection of 'sago' to the Portuguese and Dutch spice trade symbolises the rhythm of trade relations and connection between southern China and Southeast Asia.</p>
          <p>There exists a similar sago gula melaka, a sago-based dessert made with coconut milk and palm sugar. Sago gula melaka originates from Malacca and is a traditional Malay and Peranakan dessert.</p>
          <p><strong>The Modern Sago:</strong> The appearance of the familiar, clean white pearls of sago can be traced back to the Chinese of Malacca around 1814 ().</p>
        `,
      },
      {
        id: 'p1-uk',
        step: 5,
        thread: 'sago',
        color: '#b07d2b',
        coords: [51.5072, -0.1276],
        place: 'United Kingdom',
        era: '18th-century',
        title: 'First appearances of sago in desserts',
        body: `
          <p>The UK version of sago pudding is said to begin appearing in cookbooks from the 18th-century. Recipes called for additions of sugar and lemon, as well as spices like cinnamon and nutmeg ().</p>
        `,
      },
      {
        id: 'p1-north-china',
        step: 6,
        thread: 'tongsui',
        color: '#a63a2b',
        coords: [34.3416, 108.9398],
        place: 'China',
        era: 'Ancient China • Before 1949',
        title: 'tong sui （糖水）',
        body: `
          <p>In parallel to the trade relationships happening between Southeast Asia and China through the dynasties, there also exists the spready of popularity of tong sui through China.</p>
          <p>'Tong sui' translates directly to 'sweet soup', originating from ancient northern China and were consumed by nobility and royalty throughout the Chinese dynasties for health benefits ().</p>
          <p><strong>Tong sui in Guangzhou:</strong> Tong sui gained popularity in Guangzhou due to the hot and humid climate of the region and the abundant sugarcane supply along the Pearl River Delta (). Before 1949, Hong Kong existed within the context of Guangdong, and frequent interactions of people and food cultures between the two places contributed to the introduction of tong sui in Hong Kong.</p>
        `,
      },
      {
        id: 'p1-hk',
        step: 7,
        thread: 'emergence',
        color: '#2d6a4f',
        coords: [22.4445, 114.0222],
        place: 'Hong Kong (Yuen Long)',
        era: '1940s–1960s • 1992',
        title: 'Postwar Hong Kong & The mango sago!',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xt3ig16aV8nbi/Mnp/image.png?w=400',
            caption: 'Sweet potato soup - a staple of Hong Kong tong sui / Image source: ',
          },
          {
            src: 'https://app.milanote.com/media/p/images/1Xt3hZ16aV8nbh/57G/image.png?w=400',
            caption: 'Red bean paste - a staple of Hong Kong-style tong sui / Image source: ',
          },
        ],
        body: `
          <p><strong>Postwar Hong Kong:</strong> A distinct Hong Kong identity emerged as large waves of migration from Mainland China into Hong Kong in the 1940s-60s created a new immigrant society. This identity was characterised by rapid economic growth and rising living standards, shaping consumerism in the middle class (Greatrex, 2026)</p>
          <p>Tong sui begins to gain popularity in Hong Kong during this time, and from there emerges distinct Hong Kong flavours of tong sui, in the forms of various pastes and sweet potatoes.</p>
          <p><strong>The mango sago!:</strong> In the 1960s, during the emergence of the Hong Kong middle class and new Hong Kong identity, a small, family-owned dessert shop called <strong>Hui Lau Shan</strong> opened in Yuen Long, Hong Kong selling herbal tea and jelly.</p>
          <p>In 1992, the shop launched the <strong>mango sago</strong>, which was very well-received by customers and popularised the inclusion of fresh fruit into <em>tong sui</em>. ()</p>
        `,
      },
      {
        id: 'p1-sg',
        step: 8,
        thread: 'emergence',
        color: '#2d6a4f',
        coords: [1.3521, 103.8198],
        place: 'Singapore (Lei Garden & Kovan)',
        era: '1984',
        title: 'The mango pomelo sago',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xt4HM16aV8nbz/LzG/image.png?w=400',
            caption: 'Mango pomelo sago is a sago-based dessert mixed with milk, fresh pomelo and mango. It is served cold. It bears striking similarities to Hong Kong\'s mango sago, but was actually invented specially for Singaporean palettes. / <strong>The threads that bind us:</strong> - The ingredient sago; - Chinese traditional \'sweet soup\'',
          },
          {
            src: 'https://app.milanote.com/media/p/images/1Xu9S11ChUgZ7r/kjH/image-183Wj.png?w=400',
            caption: 'Mango sago is a Cantonese dessert and type of \'tong sui\', served cold. But the mango sago in this photo is from a random coffee shop in Kovan.',
          },
        ],
        body: `
          <p>Mango pomelo sago is a very new invention compared to:</p>
          <ul>
            <li>the ancient origins of sago and its journey across continents,</li>
            <li>the ancient origins of tong sui, and</li>
            <li>the post-war origin of the mango sago dessert</li>
          </ul>
          <p><strong>Mango pomelo sago was invented for Singapore.</strong></p>
          <p>It was invented by Hong Kong restaurant <strong>Lei Garden</strong> in 1984, when it was opening its first branch in Singapore. The head chef was asked by the owner to create a new specialty dessert that would honour the Cantonese cuisine while catering to Singaporean taste preferences. He invented the mango pomelo sago after seeing many mangoes and pomelos imported from Thailand and Malaysia while on a walk through Singapore's streets.</p>
          <div class="callout-synthesis">
            <strong>Conclusion:</strong> The creation of mango sago in postwar Hong Kong, and the creation of mango pomelo sago as a blend of Cantonese and Singaporean culture represents how the two places developed their distinctive culture and identity and became a place of emergence.<br><br>
            <strong>Connection:</strong> Singapore's mango pomelo sago is a modern symbol of the connection between Hong Kong and Singapore. While the sago of Southeast Asia contributed to the creation of the mango sago, continued relationships shaped the development of the mango pomelo sago.<br><br>
            <strong>Enfolding:</strong> The history of how sago moved from Indonesia's spice islands to China and Europe, before becoming an iconic ingredient in a modern-day favourite dessert illustrates how deeply history is folded into our everyday life.
          </div>
        `,
      },
    ],
  },

  'pair-2': {
    title: 'Char Siew / Satay',
    threads: [
      { id: 'all', label: 'All Stops' },
      { id: 'charsiew', label: 'Char Siew / Siu Mei', color: '#a63a2b' },
      { id: 'satay', label: 'Satay & Spices', color: '#b07d2b' },
      { id: 'comparison', label: 'Hong Kong & Singapore', color: '#2d6a4f' },
    ],
    routes: [
      {
        thread: 'charsiew',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [34.2658, 108.9541],
          [30.6, 114.3],
          [25.5, 114.3],
          [23.1291, 113.2644],
          [22.3193, 114.1694],
          [15.0, 112.5],
          [10.5, 109.5],
          [1.3521, 103.8198],
        ],
      },
      {
        thread: 'satay',
        color: '#b07d2b',
        dashArray: '6 6',
        coords: [
          [24.7136, 46.6753],
          [26.5, 56.3],
          [18.0, 66.0],
          [9.5, 76.0],
          [5.8, 80.5],
          [6.5, 92.0],
          [3.5, 100.5],
          [-2.9761, 104.7754],
          [1.3521, 103.8198],
          [13.0, 112.0],
          [23.1291, 113.2644],
        ],
      },
    ],
    stops: [
      {
        id: 'p2-zhou',
        step: 1,
        thread: 'charsiew',
        color: '#a63a2b',
        coords: [34.2658, 108.9541],
        place: 'China (Zhou dynasty)',
        era: 'Zhou dynasty',
        title: 'Origin of Char Siew / A History of Hong Kong\'s Siew Mei',
        body: `
          <p>Char siew (roasted pork strips) belongs to a broader category of Cantonese-style roast meats known as siu mei.</p>
          <p><strong>A History of Hong Kong's Siew Mei:</strong> Siew mei originated from China, with royal recipes dating back to the Zhou dynasty. Skewered meats roasted over an open fire gained popularity and made its way to Guangdong. Migrating chefs from the Pearl River Delta brought one of the first variations of siew mei into Hong Kong in the form of the roast goose, seasoned with five-spice, garlic, dried tangerine peel and shallot oil and eaten with a sour plum sauce (). Yung Kee, a street hawker, started selling the roast goose in the 1940s, bringing the dish into the spotlight.</p>
        `,
      },
      {
        id: 'p2-guangdong',
        step: 2,
        thread: 'charsiew',
        color: '#a63a2b',
        coords: [23.1291, 113.2644],
        place: 'Guangdong',
        era: 'Tang and Song dynasties',
        title: 'Char Siew in Guangdong & Srivijaya',
        images: [
          {
            src: 'images/char-siew-woks-of-life.jpg',
            caption: 'Char siew! <em>Image source: , 2025</em>',
          },
        ],
        body: `
          <p>Char siew as we know it today is an evolution from the siew mei of the Zhou dynasty. Specifically, its distinct glaze is traced back to roasting workshops situated in the Guangdong province during the Tang and Song dynasties. <strong>Guangdong's trade relations with Arab and Indian traders brought spices like star anise and five-spice, which were introduced into the marinade</strong> ().</p>
          <p>Guangdong's trade with South Asia (India), West Asia (Arabia) and Southeast Asia developed it into an entrepôt of China. By tracing the origins of char siew, we also see that this trade is what led to the <strong>emergence</strong> of a distinct Cantonese culture, specifically through the unique flavours of food influenced by its trade relationships with the rest of the world.</p>
          <p><strong>Similarities with Southeast Asia - Srivijaya:</strong> Before Singapore, there was Srivijaya. Tributary trade relations of spices and luxury goods between Srivijaya and Tang dynasty Guangdong helped consolidate power and similarly, develop Srivijaya into a Southeast Asian entrepôt.</p>
          <p>Arabic traders brought skewered meat to Southeast Asia, starting with Indonesia and eventually Malaya. While the meat was initially speared through metals (the Arabs used their swords), the Southeast Asians adapted to use wooden skewers (satay stick!) instead. The meat was marinated with spices like coriander and cumin, both native to Southwest Asia ().</p>
        `,
      },
      {
        id: 'p2-arabia',
        step: 3,
        thread: 'satay',
        color: '#b07d2b',
        coords: [4.2105, 101.9758],
        place: 'Malaya',
        era: 'Spice Trade',
        title: 'Satay! / A Love Triangle of Spices <3',
        body: `
          <p>If the Cantonese used Arabian spices to make char siew what did the people of Malaya make?</p>
          <p><strong>Satay!</strong> While the concept of satay is traced back to the Arabs and not the Chinese, the origin of the spices used is what binds us.</p>
          <p><strong>A Love Triangle of Spices &lt;3:</strong> China &lt;&gt; Arabia &lt;&gt; Southeast Asia</p>
          <p>China flavoured its roast meats with Arabian and Indian spices to make char siew. Southeast Asia adapted Arabian skewered meats and the spices that came with it to make satay.</p>
        `,
      },
      {
        id: 'p2-hk',
        step: 4,
        thread: 'comparison',
        color: '#2d6a4f',
        coords: [22.3193, 114.1694],
        place: 'Hong Kong',
        era: '1950s',
        title: 'The similarity (Hong Kong)',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xu5pT122hmqd8/mLL/image.png?w=400',
            caption: '"The best char siew in Hong Kong" according to ',
          },
        ],
        body: `
          <p>Char siew became a staple in Hong Kong's chaa chaan tengs in the 1950s. Hong Kong's workforce was dominated by blue-collar workers who preferred hearty meals. This popularised the 'tor dei' char siew, made with pork belly that consisted of plenty of fatty meat. During Hong Kong's period of economic boom, society became wealthier and people became more health conscious ().</p>
          <p>From here, there emerged a new popularity for 'mui tau' char siew, made from pork collar to be less fatty and with a more distinct mouthfeel in its alternating layers of lean meat and fat.</p>
          <p>According to Cantonese Guy, the 'canonical Guandong-Hong Kong' char siew is marinated with hoisin sauce, light soy, sugar, maltose, fermented red bean curd, Chinese rose wine and honey. The pork shoulder is the prized cut.</p>
          <p><strong>Singapore:</strong> Char siew arrived in Singapore between 1819 to 1965, when Chinese immigrants came and took on blue-collar jobs. Street hawkers responded to the increased demand for calorie-dense and cheap foods by offering familiar dishes like porridge, cai png and Cantonese roast meats (<em>siu mei</em>) like char siew ().</p>
        `,
      },
      {
        id: 'p2-sg-charsiew',
        step: 5,
        thread: 'comparison',
        color: '#2d6a4f',
        coords: [1.2834, 103.8439],
        place: 'Singapore — Char Siew',
        era: '1819 to 1965 • Present',
        title: 'Singapore Char Siew & Why SG vs HK Differ',
        body: `
          <p> discusses how and why <em>char siew</em> in Singapore differs so much from the kind found in <em>siew mei</em> stores in Hong Kong.</p>
          <div class="callout-note">
            <strong>lilfoot0 (10y ago):</strong> "You are not eating the correct Charsiew. There are some hawker stores that sell decent Charsiew just like Hk type. The only thing I complain about is that they cut it so thinly but in Hk they have it pretty thick slice. The Singapore type of reddish Charsiew is not that bad lah but the Hk ones are definitely fatter and more tasty."<br><br>
            <strong>lumda OP (10y ago):</strong> "Hmmm that's my point. Hk Charsiew is noticeably more fatty and indeed more 'tasty'. Perhaps something to do with the pork they use? I do know that the chicken rice Michelin star restaurant in Chinatown serves a pretty decent Charsiew though"<br><br>
            <strong>gtahalo137 (10y ago):</strong> "HK tend to use more fat and thick cuts while SG often used lean cuts that's why. My father also said that the skills of the guy who roast the meat is what sets HK charsiew and SG charsiew apart."
          </div>
          <div class="callout-images has-multi" style="margin-bottom: 14px;">
            <figure class="callout-figure">
              <img src="https://app.milanote.com/media/p/images/1Xu5oa122hmqd7/M0I/image-7ngR3.png?w=display" alt="Singapore roast master Cho Siew Wan's char siew at his stall in Chinatown" loading="lazy" />
              <figcaption>Singapore "roast master" Cho Siew Wan's char siew (right) at his stall in Chinatown</figcaption>
            </figure>
            <figure class="callout-figure">
              <img src="https://app.milanote.com/media/p/images/1Xu9GC1ChUgZ7q/G6F/image-Zdghz.png?w=400" alt="Char siew and siew yuk with rice at the Hennessey Hong Kong Food Hall in Leisure Park Kallang" loading="lazy" />
              <figcaption>Char siew and siew yuk with rice at the Hennessey Hong Kong Food Hall in Leisure Park Kallang. It's a different colour and texture altogether.</figcaption>
            </figure>
          </div>
          <p><strong>A Few Potential Reasons:</strong> After independence, Hainanese immigrants who had previously worked as chefs for British and Peranakan households entered the local food and beverage industry. They dominated Chinese kitchens and prepared food familiar across the Chinese dialects to attract a wider customer base, diluting the dialect-specific flavours into a distinctly Singaporean Chinese food culture (Kueh, 2026). Since then, Singapore's blend of people and cultures has also introduced fusions to traditional foods. For example, <em>siew mei</em> at Char on Race Course Road is made by Vietnamese-born British Chef who incorporated his love for Hong Kong's roast meats with Western herbs and spices (; Tay, 2016). There may also be less willingness of the younger generation to learn these traditional cooking techniques, and traditional practices become lost in time.</p>
          <p><strong>Availabilities of Ingredients:</strong> Meanwhile,  suggests that there is no one true recipe for Singapore char siew, which can be made with ingredients including HP sauce, five spice powder and fish sauce, or even completely omit the pork for chicken.</p>
          <p><strong>Evolution of Singapore's Hawker Culture:</strong> Singapore's hawker culture is another emergence from its identity as an entrepôt of Southeast Asia during the pre-colonial and colonial eras. What started as street food evolved into regulated hawker centres. As stalls moved indoors, cooking methods adapted to the facilities that were available. Master Cho roasts his char siew with a gas cooker before moving it to charcoal because the hawker centre does not allow full charcoal roasting ().</p>
          <p><strong>Health Consciousness, Religion and Other Social Influences:</strong> Singapore's Health Promotion Board's recommendations of a healthier diet include using less oil, choosing cooking methods like boiling or baking, opting for less fat and salt and less gravy (). Children are taught the food pyramid and the more recent 'My Healthy Plate' in schools, while adults grow more aware of the importance of leading a healthier lifestyle. The increased health consciousness likely influences more people to choose leaner cuts of roast meat, less char and less sodium, not dissimilar to what happened in Hong Kong that led to the 'mui tau' variation of char siew. (It's not just char siew too - every Chinese New Year my favourite traditional snacks come under the radar for being too high in calorie/fat/sodium/sugar)</p>
          <p>Singapore's multireligious society also sees adaptations of food to make them more accessible to a wider consumer base. Where roast poultry in Hong Kong are usually sold at stalls that also sell pork, many of Singapore's roasted chicken rice stalls are Halal. Some Buddhists also eat vegetarian food, leading to varieties of mock meat. People may also opt for vegetarian food for environmental concerns ().</p>
        `,
      },
      {
        id: 'p2-sg-satay',
        step: 6,
        thread: 'satay',
        color: '#b07d2b',
        coords: [1.305, 103.895],
        place: 'Singapore — Satay',
        era: 'Modern Singapore',
        title: 'Satay in Singapore / Connecting Char Siew & Satay',
        body: `
          <p>Modern, Singaporean variations of satay include the use of shrimp paste and pineapple. Traditionally, satay is roasted over a charcoal fire and brushed with oil as it cooks (Vasu, 2017). However, as street hawkers moved into indoor hawker centres, and because of the extreme heat and smoke of the charcoal grill, it is now increasingly common to see satay being roasted over an electric grill.</p>
          <p>Similar to the multitude of adaptations and variations of char siew, there exists Chinese, Hainanese and Malay-style satays. While the meat remains skewered on a wooden stick and dipped in peanut sauce, the ingredients that go in the marinade differ.</p>
          <p>Pang's Satay in Chinatown uses pineapples in its peanut sauce, while Haron Satay 55 at East Coast Park uses lemongrass in its marinade, and Original Alhambra Satay at Geylang Serai adds dried shrimp and chilli ().</p>
          <div class="callout-note">
            I even bought frozen satay meat and threw them in my air fryer, sans stick - definitely not traditional. I also haven't seen the (definitely illegal) street vendors selling charcoal-fire roasted satay at my market in a few years, and kind of miss being able to smell it from several blocks away.
          </div>
          <p><strong>Connecting Char Siew and Satay:</strong> The most apparent similarity of char siew and satay is that they both emerged through spice trades between China, South and West Asia and Southeast Asia. The evolutions in these two types of skewered meats additionally shed light upon the lives of the people in Singapore and Hong Kong, and help us draw meaningful connections between food preferences, evolving lifestyles and the emergence of unique food cultures as both places developed distinct identities.</p>
          <div class="callout-synthesis">
            <strong>Conclusion:</strong> The evolutions in these two types of skewered meats shed light upon the lives of the people in Singapore and Hong Kong. They help us draw meaningful connections between food preferences and evolving lifestyles, and the emergence of unique food cultures as both places developed distinct identities.<br><br>
            <strong>Connection:</strong> The spices used in the making of char siew and satay represent how Singapore and Hong Kong, as entrepôts, were connected and developed through the spice trade.<br><br>
            <strong>Multiplicity:</strong> The variations of these dishes also suggest that there exist multiple layers to what makes a Hong Kong or Singaporean identity, symbolic of the diversity of communities living in Hong Kong and Singapore.
          </div>
        `,
      },
    ],
  },

  'pair-3': {
    title: 'Hong Kong Macaroni Soup / Hainanese Western Cuisine',
    threads: [
      { id: 'all', label: 'All Stops' },
      { id: 'macaroni', label: 'Hong Kong Macaroni Soup', color: '#a63a2b' },
      { id: 'western', label: 'Hainanese Western Cuisine', color: '#2d6a4f' },
      { id: 'colonial', label: 'Origins & Parallels', color: '#b07d2b' },
    ],
    routes: [
      {
        thread: 'macaroni',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [40.8518, 14.2681],
          [37.5, 4.0],
          [36.0, -5.5],
          [45.5, -5.0],
          [51.5072, -0.1276],
        ],
      },
      {
        thread: 'macaroni',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [51.5072, -0.1276],
          [45.5, -5.0],
          [36.0, -5.5],
          [34.5, 18.0],
          [30.0, 32.5],
          [19.0, 39.5],
          [12.5, 46.0],
          [11.0, 66.0],
          [5.8, 80.5],
          [2.5, 101.5],
          [11.0, 113.0],
          [14.5995, 120.9842],
          [22.3193, 114.1694],
        ],
      },
      {
        thread: 'western',
        color: '#2d6a4f',
        dashArray: '6 6',
        coords: [
          [51.5072, -0.1276],
          [45.5, -5.0],
          [36.0, -5.5],
          [34.5, 18.0],
          [30.0, 32.5],
          [19.0, 39.5],
          [12.5, 46.0],
          [11.0, 66.0],
          [5.8, 80.5],
          [2.5, 101.5],
          [1.3521, 103.8198],
        ],
      },
      {
        thread: 'western',
        color: '#2d6a4f',
        dashArray: '6 6',
        coords: [
          [19.5664, 109.9497],
          [15.0, 109.5],
          [9.5, 108.5],
          [1.3521, 103.8198],
        ],
      },
    ],
    stops: [
      {
        id: 'p3-uk',
        step: 1,
        thread: 'colonial',
        color: '#b07d2b',
        coords: [51.5072, -0.1276],
        place: 'United Kingdom',
        era: '1861 • 1950s',
        title: 'Origin of Macaroni Soup & Comparisons with British Food',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xu8WH122hmqdm/EbS/image.png?w=400',
            caption: 'Page from  (Beeton, 1861, pp. 70)',
          },
        ],
        body: `
          <p>The most prominent ingredient in a macaroni soup is the macaroni of Italian cuisine. However, the earliest appearance of macaroni soup can be traced back to a Victorian British cookbook from 1861. It acknowledges the pasta's Italian connection and adds Parmesan cheese.</p>
          <p><strong>Filipino "sopas":</strong> Another similar variation of macaroni soup is Filipino 'sopas', meaning soup in Tagalog. Its name and cooking method originates from the Spanish colonial period, while the introduction of macaroni, milk and meat to make the dish known today was inspired by the American chicken noodle soup during the American colonial period of the Philippines.</p>
        `,
      },
      {
        id: 'p3-hk',
        step: 2,
        thread: 'macaroni',
        color: '#a63a2b',
        coords: [22.3193, 114.1694],
        place: 'Hong Kong',
        era: '1950s and 60s',
        title: 'Hong Kong\'s Macaroni Soup & Cha Chaan Tengs',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xu974122hmqdn/D7A/image.png?w=400',
            caption: 'Macaroni soup / Image source: ',
          },
        ],
        body: `
          <p><strong>Hong Kong's Macaroni Soup:</strong> Macaroni soup is served in Hong Kong's cha chaan tengs as a breakfast and comfort food. It is composed of elbow macaroni in a thin, savoury broth topped with ham.</p>
          <p><strong>Cha Chaan Tengs:</strong> These classic Hong Kong diners emerged in postwar Hong Kong during the 1950s and 60s following the emergence of a Hong Kong middle class. The city grew in prosperity as the British laid the foundations for 'market-based governance and immigration-based growth' (Cheang, 2022), leading to a largely immigrant Hong Kong society. Rapid urbanisation followed, alongside the development of infrastructure like public housing to house its growing population. Cultural and class differences of workers in Hong Kong and Guangdong contributed to the emergence of a new, distinct and consumerist Hong Konger identity.</p>
          <p>Influenced by British rule, this working-class sought for colonial Western breakfasts at working-class price and speed. Predecessors to the cha chaan teng imported Italian elbow macaroni and cooked it in broth, satisfying the demand for cheap, fast Western food easy enough to fit into existing diner menus ().</p>
          <p>Hong Kong's macaroni soup symbolises the emergence of a capitalistic, Westernised Hong Konger identity under British governance.</p>
        `,
      },
      {
        id: 'p3-hainan',
        step: 3,
        thread: 'western',
        color: '#2d6a4f',
        coords: [19.5664, 109.9497],
        place: 'Hainan, China',
        era: '1821 • 1870',
        title: 'The Hainanese',
        body: `
          <p>The Hainanese first arrived in Singapore in 1821 as traders. However, it was only in 1870 that some Hainanese emigrated to Singapore, by which time other Chinese dialect groups had already taken the more lucrative jobs (). Less skilled, with little business contacts and unable to communicate with other dialect groups, the early Hainanese immigrants entered the service sector as hotel cooks and domestic servants in European and Peranakan households.</p>
        `,
      },
      {
        id: 'p3-sg',
        step: 4,
        thread: 'western',
        color: '#2d6a4f',
        coords: [1.3521, 103.8198],
        place: 'Singapore',
        era: '1920s–30s • Post-war',
        title: 'Hainanese Western Cuisine',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xu9Di1ChUgZ7p/xTE/image.png?w=400',
            caption: 'My partner\'s fried rice + chicken chop with Italian gravy (?) + fried egg that we bought from a Hainanese Western food stall in a coffee shop. Does this combination exist anywhere else in the world?',
          },
          {
            src: 'https://app.milanote.com/media/p/images/1Xu9UL1ChUgZ7s/dyv/image-luRCs.png?w=400',
            caption: 'Or this chicken chop with gravy, fries, coleslaw and butter toast. This was really good though (Golden Mile Food Centre).',
          },
        ],
        body: `
          <p>It's difficult to find a food court or coffee shop in Singapore without its own Western food stall, usually selling some combination of Western-Asian fusions of chicken chop, pasta and baked rice. Its distinctive combination of ingredients and flavour profile makes it unique from the usual Western fast-food.</p>
          <p>In the late 1920s to 30s, some Hainanese moved to set up their own hotels, bars and restaurants ().</p>
          <p><strong>The Food:</strong> Following the decline of British and Peranakan influence post-war, the Hainanese set up the first kopitiams (coffeeshops), contributing to the coffeeshop culture we have today (). Over time, they adapted the Western dishes they had become familiar with while serving the Westerners to fit local palates and reach a wider consumer base.</p>
          <p><strong>Comparisons with British Food:</strong> Classic Hainanese-Western dishes included deep-fried or crumbed pork chop, chicken cutlet, grilled or fried fish and sides like chips, coleslaw and rice.</p>
          <p><strong>Chicken Cutlet:</strong> The chicken cutlet is closest to 'parmo', a deep-fried and breaded chicken cutlet that originated from Middlesbrough, England in the 1950s (), but topped with a black pepper or brown gravy instead of cheese.</p>
          <p><strong>Fish and Chips:</strong> Fried battered fish mostly resemble British fish and chips, although it's usually paired with french fries, not chips, and usually not accompanied by mushed peas and vinegar.</p>
          <p><strong>Side Dishes:</strong> Most stalls offer coleslaw not too dissimilar from British coleslaw - cabbage and carrots mixed in mayonnaise. I've also seen baked beans and toast - kind of resembling a Full English Breakfast? Mashed potatoes in onion gravy - Bangers and Mash, sans bangers? Rice - usually buttered or spiced fragrant rice.</p>
          <div class="callout-note">
            Macaroni soup is also served to children in Singapore (source: my favourite school lunch in kindergarten, and still my go-to at Foodfare on a rainy day)
          </div>
          <div class="callout-synthesis">
            <strong>Conclusion:</strong> Hong Kong's macaroni soup starkly contrasts against Singapore's unique Hainanese-style Western food. Macaroni soup emerged as a Hong Kong staple as the very fabric of its identity was being shaped by British governance to become capitalistic and Westernised, and is symbolic of the Anglo-Chinese capitalism that contributed to its economic boom (). Meanwhile, it was the locals' taste preferences and immigrant innovation that led to the incorporation of Asian flavours into Western food, leading to the emergence of a whole new cuisine.<br><br>
            <strong>Connection:</strong> The origin stories of macaroni soup and Hainanese-Western cuisine symbolise Singapore and Hong Kong's shared history of life under British rule and the long-lasting socio-economic impacts of British governance on the identity and prosperity of these two places.<br><br>
            <strong>Multiplicity:</strong> The existence of these Western-Asian fusion dishes also tells us that despite the British attempts at establishing racial hierarchies, the British empire was run on the backs of the working-class locals and immigrants who came before. Without them, there is no "Hong Konger" or "Singaporean" identity.
          </div>
        `,
      },
    ],
  },

  'pair-4': {
    title: 'LO MAI CHI / ONDE-ONDE',
    threads: [
      { id: 'all', label: 'All Stops' },
      { id: 'ingredients', label: 'Glutinous Rice & Coconut', color: '#b07d2b' },
      { id: 'lomai', label: 'Lo Mai Chi', color: '#a63a2b' },
      { id: 'onde', label: 'Onde-Onde', color: '#2d6a4f' },
    ],
    routes: [
      {
        thread: 'ingredients',
        color: '#b07d2b',
        dashArray: '6 6',
        coords: [
          [-1.5, 113.5],
          [1.3521, 103.8198],
          [10.5, 109.5],
          [15.0, 112.5],
          [23.0215, 113.1214],
        ],
      },
      {
        thread: 'onde',
        color: '#2d6a4f',
        dashArray: '6 6',
        coords: [
          [-5.1477, 119.4327],
          [-5.8, 112.0],
          [0.9, 104.5],
          [2.1896, 102.2501],
          [1.3521, 103.8198],
        ],
      },
      {
        thread: 'lomai',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [23.0215, 113.1214],
          [22.1987, 113.5439],
          [22.3193, 114.1694],
        ],
      },
    ],
    stops: [
      {
        id: 'p4-foshan',
        step: 1,
        thread: 'lomai',
        color: '#a63a2b',
        coords: [23.0215, 113.1214],
        place: 'Foshan, Guangdong',
        era: 'Cantonese Origin',
        title: 'Origin of Lo Mai Chi (糯米糍) & Other East Asian Mochis',
        body: `
          <p>Lo mai chi is one of many variations of mochi found across Asia, but this distinct coconut-dusted format can be traced back to Foshan in Guangdong Province (). Lo mai chi is made with glutinous rice flour, which gives it its chewy texture, and filled with peanut or red bean pasted. It is then given a generous dusting of desiccated coconut, which is what distinguishes it from other mochis. Lo mai chi is a recognizable Cantonese dim-sum dish that can be found in restaurants, bakeries and cha chaan tengs across Guangdong and Hong Kong (). This association with cha chaan tengs in Hong Kong suggests that it likely gained popularity amongst Hong Kongers postwar, when its population consisted of mostly immigrants and it underwent an economic and social transformaion.</p>
          <p>In Hong Kong, lo mai chi has adapted to modern taste preferences by including fillings like green tea and fruit flavours, although the traditional red bean and peanut paste fillings remain popular.</p>
          <p><strong>Other East Asian Mochis:</strong> Japanese mochi similarly uses glutinous rice to achieve its chewy texture. However, while lo mai chi uses glutinous rice flour to form its dough, Japanese mochi uses steamed short-grain glutinous rice that is pounded into a paste and molded into small, rounded shapes. Additionally, Japanese mochi is dusted with rice flour or corn starch instead of coconut, and is usually served plain, although modern variations add sweet fillings like mango or matcha.</p>
          <p>Muah chee is another similar variation of mochi that is also made with glutinous rice flour. Oil and corn starch are added into the batter, which is then steamed and stirred to create a distinct springy texture (). Additionally, it differentiates itself from mochi as it uses a long-grain glutinous rice flour instead of the Japanese short-grain rice. Its preparation method results in a firmer texture than mochi (). Muah chee is then coated in a sugary peanut or sesame dusting.</p>
          <p>The coconut dusting is the most apparent difference between lo mai chi and these other forms of East Asian mochis.</p>
        `,
      },
      {
        id: 'p4-sulawesi',
        step: 2,
        thread: 'onde',
        color: '#2d6a4f',
        coords: [-5.1477, 119.4327],
        place: 'South Sulawesi, Indonesia (Bugis-Makassar)',
        era: '13th–14th Century',
        title: 'Origin of Onde Onde',
        body: `
          <p>Onde-onde originated as klepon or umba-umba from Indonesia. Its origins can be traced back to the Bugis-Makassar community, (), an ethnic group native to South Sulawesi with strong historic ties to the maritime trade. Klepon is a mandatory cake in their community thanksgiving ritual events and celebrations. Its round shape symbolises unity, and its sweet fillings represent hope, strength and happiness for its community (). In Malaysia, it is also known as buah melaka.</p>
          <p>Onde-onde is traditionally made with a dough of glutinous rice flour and sweet potatoes, filled with palm sugar and coated in grated coconut. The dough is usually mixed with pandan to give it its distinct green appearance, although it can also be orange from the sweet potatoes.</p>
          <p>Melaka Fruit Cake (Kue Malako Kua) is an adaptation of onde-onde that originates from Riau. It is either green or orange, and is thickened with coconut milk and salt, giving it a slightly different taste from onde-onde ().</p>
        `,
      },
      {
        id: 'p4-sea',
        step: 3,
        thread: 'ingredients',
        color: '#b07d2b',
        coords: [-1.5, 113.5],
        place: 'Southeast Asia / Malesia',
        era: 'Pre-colonial • 640 AD • 1030 AD • 1610s',
        title: 'Glutinous Rice Flour & Coconut',
        body: `
          <p><strong>The Foods that Bind Us:</strong> The presence of glutinous rice flour and shredded coconut in the onde-onde bears striking resemblance to the lo mai chi, suggesting early interactions and trade between Southeast Asia and East Asia.</p>
          <p><strong>Glutinous Rice Flour:</strong> A molecular analysis of glutinous rice by  found that it was likely the result of a single-origin mutation from Southeast Asia. While there are limited historical records that truly explain how glutinous rice came to be so culturally important in East Asia, Olsen and Purugaanan suggest that Chinese folklore dating more than 2000 years ago already indicate the existence of glutinous rice. In a similar fashion to sago, this suggests that the glutinous rice used in lo mi ci was likely introduced to China from Southeast Asia through relationships of trade predating the arrival of the British, Portuguese, and even Srivijaya.</p>
          <p><strong>Coconut:</strong> The coconut palm is native to Malesia, which comprises of Southeast Asia, Indonesia, Australia, New Guinea and the Pacific Islands. The humble coconut bears much cultural, religious and agricultural significance, used in food, medicine and religious practices across the region.</p>
          <p><strong>Etymology:</strong> The Sanskrit term for coconut is narikela, which  suggest is derived from the South Asian words niyor for oil and kolai for nut. Some argue this is evidence of the coconut's origins in the Malay Archipelago. When the Portuguese and Spanish arrived in Southeast Asia, they referred to the coconut palm as coco because the three holes at its base resembled a grinning face. Combined with nut—dating back to the Latin for nucleus (), this gave rise to its modern-day name in the 1610s.</p>
          <p>However,  note that the coconut was already being traded across Asia long before the 1610s. For example, the travelogue of a Chinese pilgrim who visited India in 640 AD mentions imports of coconut, while another text from 1030 AD states that coconut "makes excellent honey, and the merchants of India, Yemen and China buy it and take it to their own countries where they manufacture sweetmeats from it" (Gibbs, 1929; Randhawa, 1982, as cited in Ahuja et al., 2014).</p>
        `,
      },
      {
        id: 'p4-sg',
        step: 4,
        thread: 'onde',
        color: '#2d6a4f',
        coords: [1.3521, 103.8198],
        place: 'Singapore',
        era: 'Contemporary Emergence',
        title: 'Singaporean Emergence',
        body: `
          <p>While lo mai chi in its traditional form remains popular, onde onde in Singapore has undergone significant evolutions. In recent years, there has emerged a trend of deconstructing onde onde into cakes, ice cream, kaya toast and even curry (). These evolutions usually retain its distinct taste of coconut and gula melaka while omitting the texture of the glutinous rice.</p>
          <p>Its variations have made onde onde easily accessible and enjoyed by the masses, resulting in onde onde being an icon of the multicultural Singaporean identity.</p>
          <div class="callout-note">
            Fun fact: I had 3/4 of a whole onde-onde cake at my friend's Hari Raya celebration, and I think that's enough onde onde for a lifetime.
          </div>
        `,
      },
      {
        id: 'p4-hk-macau',
        step: 5,
        thread: 'lomai',
        color: '#a63a2b',
        coords: [22.1987, 113.5439],
        place: 'Hong Kong & Macau',
        era: 'Postwar • Present',
        title: 'Lo Mai Chi in Hong Kong & Macau & Conclusion',
        images: [
          {
            src: 'https://app.milanote.com/media/p/images/1Xul7510vSSe3o/BrC/image.png?w=800',
            caption: 'Lo mai chi from a pastry shop in Macau. I\'m not sure what I expected, but it was like muahchee if the peanut was inside and dusted with coconut instead.',
          },
        ],
        body: `
          <div class="callout-synthesis">
            <strong>Conclusion:</strong> Lo mai chi and onde onde started off similarly but have quite different ending points that serve both to connect and to contrast Singapore and Hong Kong.<br><br>
            <strong>Connection:</strong> Lo mai chi and onde onde have a shared history related to maritime trade, but the similarity does not stop there.<br><br>
            Both foods are remnants of the food cultures that persisted through the British colonial rule. For Hong Kong, lo mai chi represents the traditions, cultures and foods that immigrants brought with them following the closure of the Frontier Closed Area. It showcases how the immigrant population that entered Hong Kong are responsible for the development of a Hong Konger identity.<br><br>
            For Singapore, onde onde represents its lasting historic relationships with Southeast Asia - a callback to its pre-war identity as a Southeast Asian entrepôt. Its continued existence is symbolic of how British colonial Singapore was actually comprised of many of the people who were already there. Both foods tell a similar narrative - that the British may have been there once, but the ones who lived it are the ones who made it work.<br><br>
            <strong>Multiplicity of Singapore:</strong> In previous classes we described Hong Kong as sometimes "being more Chinese than China". I believe that the unwavering tradition of the lo mai chi represents how its community has held on tightly to the food cultures that were brought over from the mainland. In contrast, the numerous variations of a traditional Southeast Asian food like onde onde has been adopted by people of all races and fused into foods from all different cultures, resulting in a brilliant showcase of how Singapore is a place for all kinds of people.<br><br>
            <strong>Enfolding of history within the Hong Kong identity:</strong> The persistence of traditional foods to survive and thrive in Hong Kong is also a statement of how Hong Kong's history can be found in all corners of a Hong Konger's everyday life.<br><br>
            I suppose, paradoxically, Singapore's embracing of different cultures and practices in its onde onde <del>monstrosities</del> inventions also means Singapore's history of connectedness with Southeast Asia can be found in every layer of on onde onde cake, if our lives were made of onde onde!
          </div>
        `,
      },
    ],
  },

  'pair-5': {
    title: 'HK MILK TEA / YAKULT GREEN TEA',
    threads: [
      { id: 'all', label: 'All Stops' },
      { id: 'milktea', label: 'HK Milk Tea', color: '#a63a2b' },
      { id: 'bubbletea', label: 'Yakult & Taiwanese Tea', color: '#2d6a4f' },
    ],
    routes: [
      {
        thread: 'milktea',
        color: '#a63a2b',
        dashArray: '6 6',
        coords: [
          [22.2819, 114.1585],
          [15.0, 112.5],
          [10.5, 109.5],
          [1.3521, 103.8198],
        ],
      },
      {
        thread: 'bubbletea',
        color: '#2d6a4f',
        dashArray: '6 6',
        coords: [
          [35.6762, 139.6503],
          [29.0, 125.0],
          [23.6978, 120.9605],
          [16.0, 114.0],
          [10.5, 109.5],
          [1.3521, 103.8198],
        ],
      },
    ],
    stops: [
      {
        id: 'p5-hk',
        step: 1,
        thread: 'milktea',
        color: '#a63a2b',
        coords: [22.2819, 114.1585],
        place: 'Hong Kong',
        era: '1952 • 1970s',
        title: 'Origin of Hong Kong-Style Milk Tea 丝襪奶茶',
        body: `
          <p>Hong Kong-style milk tea was invented in 1952 in a cha chaan teng in Central, Hong Kong. It is made with Black ceylon tea and evaporated milk strained through a long cotton cloth.</p>
          <ul>
            <li>Hong Kong-style milk tea is traditionally made with Sri Lankan, Javanese and Chinese Ceylon tea</li>
            <li>The tea was brewed in a specially designed Britannia teapot made to fit in the limited space of small street stalls</li>
          </ul>
          <p>These characteristics make Hong Kong-style milk tea virtually undetachable from its past as a British colony.</p>
          <p><strong>The Hong Kong Spirit</strong> ()</p>
          <p>The "Hong Kong spirit" was founded on the British colonial government's moral standards of "obedience, tolerance, cooperation and harmony". This notion was strengthened with the immigrants' experiences of hardship as the British colonisers denied the immigrants basic citizenship rights and kept the people living in squalor. This inspired a belief that it is their resilience in the face of economic challenges that led to Hong Kong's economic development in the 70s.</p>
          <p>The Hong Kong-style milk tea, served in cha chaan tengs symbolic of the spirit of those who lived through this period of hardship, has thus become synonymous with the Hong Kong spirit.</p>
          <p>In this sense, the Hong Kong-style milk tea is an example of how the British rule led to Hong Kong being a place of <strong>emergence</strong> - of food culture, of a people, and a common identity</p>
        `,
      },
      {
        id: 'p5-japan',
        step: 2,
        thread: 'bubbletea',
        color: '#2d6a4f',
        coords: [35.6762, 139.6503],
        place: 'Japan',
        era: '1935 • 1964–1979',
        title: 'Yakult',
        body: `
          <p>Yakult was invented in Japan in 1935 by Dr. Shirota. He was concerned after seeing children suffering from malnutrition because of poor social-economic conditions (). He devoted his time to researching <em>lactobacilli</em>, a strain of bacteria that promotes good intestinal health. He incorporated the bacteria strain into a milk cultured drink, creating Yakult.</p>
          <p>Yakult began is operations in Taiwan in 1964, Hong Kong in 1969, and Singapore in 1979.</p>
        `,
      },
      {
        id: 'p5-taiwan',
        step: 3,
        thread: 'bubbletea',
        color: '#2d6a4f',
        coords: [23.6978, 120.9605],
        place: 'Taiwan',
        era: '1940s • 1980s • 2007',
        title: 'Origin of Yakult Green Tea & Taiwanese Hand Shaken Tea',
        body: `
          <p>Yakult Green Tea is a blend of the Japanese probiotic drink Yakult, and Taiwanese tea. Its popularisation is credited to a Taiwanese bubble tea chain Ching Shin Fu Chuan, who started selling the drink in 2007 (Google Gemini, 2026; ).</p>
          <p><strong>Taiwanese Hand Shaken Tea:</strong> The predecessor of the world-famous bubble tea, invented in the 1980s, is the Taiwanese hand-shaken foam tea. This can be traced back to the 1940s when a mixologist who worked at a Japanese izakaya opened a tea shop selling tea made with cocktail shakers (). This resulted in a rich tea with a foamy surface, forming the basis for bubble tea.</p>
        `,
      },
      {
        id: 'p5-sg',
        step: 4,
        thread: 'bubbletea',
        color: '#2d6a4f',
        coords: [1.3521, 103.8198],
        place: 'Singapore',
        era: '1985 • 1992 • Early 2000s',
        title: 'Popularisation of Taiwanese Tea in Singapore, Bubble Tea & Conclusion',
        body: `
          <p><strong>Popularisation of Taiwanese Tea in Singapore:</strong> Taiwanese tea was introduced and popularised in Singapore after Singapore's shift from an industrial economy to a financial hub and service economy after the 1985 recession. This shift pushed Singapore to be exposed to people, cultures and goods from around the world as it functioned not dissimilarly from its colonial role as an entry and exit into Southeast Asia. These contributed to a <strong>cultural emergence</strong>, shaped by the sudden economic restructuring and its new (old) role as an entrepôt that fundamentally changed the lives of people, their lifestyles and their interactions with the world.</p>
          <p><strong>Bubble Tea:</strong> Bubble tea arrived in Singapore in 1992 but experienced a surge in popularity in the early 2000s as bubble tea shops emerged in shopping malls, hawker centres and HDB estates across the island. Bubble tea became easily accessible and highly popular, especially among students. During this time, Yakult Green Tea was introduced to Singapore and became a Singaporean bubble tea shop staple over time.</p>
          <div class="callout-synthesis">
            <strong>Conclusion:</strong> Singapore's path to becoming a city of cultural emergence is <strong>illuminated</strong> by and mirrors Hong Kong's period of economic restructuring from the 1950s to 1970s. The popularisation of cha chaan tengs and the creation of the Hong Kong-style milk tea reveal the impact that separation of Hong Kong from Mainland China into British colonial rule had on the lives of the people.<br><br>
            <strong>Multiplicity:</strong> The Hong Kong-style milk tea was invented by Mainland Chinese immigrants living in Hong Kong under British rule, made with British tea (that's not really British). Yakult Green Tea, a staple of bubble tea shops in Singapore today, was introduced to Singapore during a period of economic restructuring that opened Singapore to the world. This way, Hong Kong-style milk tea and Yakult Green Tea also serve as examples that describe the multiple layers that make up today's Hong Konger and Singaporean identities.
          </div>
        `,
      },
    ],
  },
};
