# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
  User.destroy_all
  ###################################
  # Users
  ###################################
  User.create(
    firstname: 'Kenneth',
    username: 'mrkchoi',
    email: 'mrkchoi@gmail.com',
    bio: 'Easy going SF-based software engineer. Loves learning & exploring new cutures through food. Has traveled to 26 countries and counting. Looking forward to the next adventure!',
    joined_date: 'Thu, 12 Apr 2018',
    password: 'password'
  )

  User.create(
    firstname: 'Kenneth',
    username: 'kennethichoi',
    email: 'kennethichoi@gmail.com',
    bio: 'Easy going SF-based software engineer. Loves learning & exploring new cutures through food. Has traveled to 26 countries and counting. Looking forward to the next adventure!',
    joined_date: 'Thu, 12 Apr 2016',
    password: 'password'
  )

  # Guest user
  User.create(
    firstname: 'Guest',
    username: 'guestuser',
    email: 'guest@guest.com',
    bio: 'Guest User is a SF-based software engineer who loves to travel. Currently at 26 countries and counting! Hobbies include meeting new people and exploring different cultures through food. Looking forward to crossing paths in the coming future! ...',
    joined_date: 'Tue, 19 Feb 2019',
    password: 'password'
  )

  # Other users
  User.create(
    firstname: 'Jason',
    username: 'geneva12',
    email: Faker::Internet.free_email,
    bio: 'Hi, Iʼm Jason. Easy going world traveller, formerly living in Geneva and London, now returned to California.',
    joined_date: '2019-01-07',
    password: 'password'
  )

  User.create(
    firstname: 'Tyler',
    username: 'tytytyler',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Tyler! I've lived in SF for over 12 years, and have traveled to over 40 countries for work assignments and for fun. I've flown 800K+ miles in my lifetime. I'll go far for amazing food, and even further for great art and design. As an airbnb Superhost, I will help you get to know SF as a local. As I've stayed in countless hotels and BnB's over the years (I used to have Diamond status at one of the hotel chains --- 65 nights a year on the road!), I know what great hospitality feels like and what's important to make your stay comfortable and feel a home away from home. I love sharing my favorite hidden spots in SF with my guests, and the many wonderful things I've collected over the years that bring me joy! I look forward to hosting you. As a guest, I am responsible, trustworthy, and I like to keep things neat. I take care of nice things. When I travel these days, I prefer to stay in a home instead of a hotel so that I really get to experience the city as a local and not a tourist. That's why I love airbnb. In my free time, I enjoy urban and rural hiking, a little leisurely biking, and a dash of yoga. I like building and crafting things --- my latest outlet is the potter's wheel.",
    joined_date: '2011-07-11',
    password: 'password'
  )

  User.create(
    firstname: 'Joshua',
    username: 'joshjosh',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Joshua! Hello! I am a theatre artist and teacher who recently moved to San Francisco with my wife. Outside of our love for theatre, we also have a passion for fine art and dining. We love to cook good food and drink good wine. We both are friendly, polite, and are looking forward to meeting you!",
    joined_date: '2016-05-03',
    password: 'password'
  )

  User.create(
    firstname: 'David',
    username: 'thedavid23',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm David! San Francisco native, runner, biker, museum nerd. :)",
    joined_date: '2012-11-27',
    password: 'password'
  )

  User.create(
    firstname: 'Carrie',
    username: 'especialcarrie',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Carrie! Originally from Colorado, I've lived in San Francisco for the better part of 25 years and still absolutely love it. I'm a global traveler (30 countries and counting), work in the travel industry, and love showing off my City! I'm a former tech start-up employee (Xoogler), ski instructor and yoga teacher, well-balanced, fun, professional, and all around pretty relaxed. I loved doing home stays nearly 20 years ago while traveling solo around the world. It's wonderful to return the favor thanks to Airbnb! I'm a very proud Superhost and invite you to make yourself completely at home during your stay. I'm also very knowledgeable about the City, and always happy to make recommendations for any type of trip to San Francisco, so please ask!",
    joined_date: '2011-11-01',
    password: 'password'
  )

  User.create(
    firstname: 'Koncha',
    username: 'worldtraveler',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Koncha! I'm a New York girl, now living in San Francisco, and loving it!! I work in Private Equity Real Estate and have been a professional accountant for 14 years now, first in Dallas, then New York and London, and now SF. Growing up, I lived all over the place, including Geneva, Dubai, India, Austin, Kuwait and Morocco, and then as an adult, in Austin, Dallas, Paris, New York, London and now San Francisco! I love to travel and am a long time Airbnb user. I recently made my way through Europe and Asia, and hope to travel through South America and Australia to follow in the next few years!! I love Wes Anderson movies, good red wines, Napa, the outdoors, clean eating, my sweet 5 year old nephew, and now of course, my sweet puppy Pokey (she's getting insta famous @petitepokey). Please read the useful info in my listing about parking, the neighborhood, the homeless situation in SF, check-in details, etc.",
    joined_date: '2011-10-31',
    password: 'password'
  )

  User.create(
    firstname: 'Matt & Jeff',
    username: 'matt_jeffy',
    email: Faker::Internet.free_email,
    bio: "Hi, We're Matt And Jeff! We've lived in San Francisco for over 35 years so we know it well and love to share our knowledge about The City with our guests. Matt is a teacher in the San Francisco Unified School District and Jeff is an audiologist. As Airbnb hosts we enjoy meeting people from all over the world. Getting to know our guests and the city they are from is one of the great things about being hosts. We enjoy traveling, good restaurants (San Francisco has some of the best), & live theater. We have a Golden Retriever named Jake (who is very friendly and loves to meet all of our guests) and two cats Mitts and Morsel (who rules the house).",
    joined_date: '2015-01-04',
    password: 'password'
  )

  User.create(
    firstname: 'Stacy',
    username: 'lovelygirls2',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Stacy! I'm a stay at home mom with two lovely girls. We love traveling (when we get the chance) and love having visitors stay at our home in San Francisco.",
    joined_date: '2016-07-15',
    password: 'password'
  )

  User.create(
    firstname: 'Katie',
    username: 'frenchchef99',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Katie! I've lived in SF for over 12 years, and have traveled to over 40 countries for work assignments and for fun. I've flown 800K+ miles in my lifetime. I'll go far for amazing food, and even further for great art and design. As an airbnb Superhost, I will help you get to know SF as a local. As I've stayed in countless hotels and BnB's over the years (I used to have Diamond status at one of the hotel chains --- 65 nights a year on the road!), I know what great hospitality feels like and what's important to make your stay comfortable and feel a home away from home. I love sharing my favorite hidden spots in SF with my guests, and the many wonderful things I've collected over the years that bring me joy! I look forward to hosting you. As a guest, I am responsible, trustworthy, and I like to keep things neat. I take care of nice things. When I travel these days, I prefer to stay in a home instead of a hotel so that I really get to experience the city as a local and not a tourist. That's why I love airbnb. In my free time, I enjoy urban and rural hiking, a little leisurely biking, and a dash of yoga. I like building and crafting things --- my latest outlet is the potter's wheel.",
    joined_date: '2015-03-10',
    password: 'password'
  )

  User.create(
    firstname: 'Carlos & Graciela',
    username: 'carlos_gracie',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Carlos & Graciela! I love SF and I enjoy talking about our great city with our guests. My girlfriend (Graciela) and I both enjoy meeting people from all over the world. We love to travel and therefore feel we relate well with people that visit us. *Please note: we do not have a permit to host short-term rentals (i.e. those that are less than 30 days).",
    joined_date: '2013-12-25',
    password: 'password'
  )

  User.create(
    firstname: 'Todd',
    username: 'todd_sail',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Todd! You will find this a friendly place to stay in San Francisco. Love to interact with all types of people from all nationalities. Presently a co-owner of Vasquez Coffee Company, a coffee roasting company in San Francisco. Online search Vasquez Coffee Company for more information. For Fun I am a USCG licensed Captain and a Padi Scuba Instructor. Online search Captain Todd Charters for more information. I have captained dive boats, live aboard sailing catamarans and taught scuba diving in the US Virgin Islands, British Virgin Islands and Monterey, California. May 2017 I was the Captain on a 46' 4 cabin 4 bath live a board catamaran for 8 of 300 graduating MBA's from MIT's Sloan School of Management in the British Virgin Islands. This was my 6th year being selected as a skipper for this trip. Love to practice Ashtanga Yoga. Handstand entries into some yoga positions are a fun part of my practice. Bicycling along San Francisco Bay 1 block from my house is also a pastime. Sailboat raced on San Francisco Bay through the San Francisco Yacht Club in Tiburon for 14 years. My specialty is the Foredeck (spinnaker) while racing sailboats.",
    joined_date: '2013-06-23',
    password: 'password'
  )

  User.create(
    firstname: 'Rigo',
    username: 'rigo_30',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Rigo! My wife and I are in our mid 30's and are natives of San Francisco. Our 1 year old daughter keeps us on our toes at every moment but we love it! Don’t hesitate asking any questions you might have for us, we’re happy to help.",
    joined_date: '2016-06-07',
    password: 'password'
  )

  User.create(
    firstname: 'Michaele & Andy',
    username: 'andycandy',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Michaele And Andy! We love traveling as much as we can but are always happy to return home to San Francisco. We feel like we struck gold when we discovered our neighborhood, Glen Park. It has the perfect combination of nature and convenience. We are excited to visit new places and to welcome new guests to our treasured city by the bay!",
    joined_date: '2013-02-09',
    password: 'password'
  )

  # Users v2
  User.create(
    firstname: 'Lori',
    username: 'lharvey',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Lori!",
    joined_date: '2018-05-03',
    password: 'password'
  )

  User.create(
    firstname: 'Gabriel',
    username: 'gabunion',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Gabriel! I have owned and managed three Airbnb locations over the last few years. It’s an amazing pleasure to host people from all over the world. I hope to make your stay in my homes a magical one.",
    joined_date: '2014-06-06',
    password: 'password'
  )

  User.create(
    firstname: 'Fran',
    username: 'franny',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Fran! I'm a Bay Area Serial Internet Entrepreneur, best known for Match Online Dating, TRUSTe, and now BabyQuip, baby equipment rental marketplace. I enjoy meeting new entrepreneurs and business people as well as tourists and work hard to be sure everyone has a positive experience in my home.",
    joined_date: '2012-04-07',
    password: 'password'
  )

  User.create(
    firstname: 'Louis',
    username: 'louis86',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Louis! Thank you for looking at my property. I grew up in Southern California but fell in love with San Francisco and have lived here the past 10 years. I love to get out and explore and have stayed with Airbnb in Sydney, Margaret River, Melbourne, Paris, Portland, Guatemala City, Lake Atitlan, Antigua, El Paredon, Los Cabos, San Diego and Hawaii. I am passionate about surfing and spending time with my two little boys.",
    joined_date: '2018-04-08',
    password: 'password'
  )

  User.create(
    firstname: 'Annie',
    username: 'annieremi',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Annie! I was born in San Francisco and am a fifth-generation native. I live in our Twin Peaks condo with my husband, Rémi, who moved to SF from Paris after university. He's an engineer who has worked at various startups and even started his own (8tracks), while I work in media. We love to travel and are excited to share our home with other travelers while we are out of town. We bought our condo in 2013, and have put a lot of our heart into it. We hope you enjoy it!",
    joined_date: '2011-01-06',
    password: 'password'
  )

  User.create(
    firstname: 'Ryan',
    username: 'ryanyogi',
    email: Faker::Internet.free_email,
    bio: "Hi, Iʼm Ryan! Photographer. Yogi. Travel addict.",
    joined_date: '2015-04-04',
    password: 'password'
  )

  User.create(
    firstname: 'Nikki',
    username: 'nikkicks',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Nikki! Whether you are traveling to San Francisco for a night or two, or are coming for a month or more, I can help you find the perfect clean and stylishly furnished place to call home.\n\n
 
    You can stay with me and my cat in my beautiful Inner Sunset Edwardian, or in one of many homes that I manage in the bay area. I specialize in 30 night+ furnished corporate rentals for traveling nurses and tech workers, so feel free to reach out and see how I can help.\n\n
    
    I love to create clean, beautiful, thoughtfully designed homes. Message me if you are interested in design consultation, or need help with Airbnb management of your listings! ",
    joined_date: '2012-09-04',
    password: 'password'
  )

  User.create(
    firstname: 'Patricia',
    username: 'pepyn',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Patricia! My husband and I are an international couple: I am a long time resident of San Francisco, Pepijn(my hubby) a Dutch expat who came to the city 5 years ago. Together we are looking forward to making your stay in the City By The Bay a most memorable one.",
    joined_date: '2014-03-11',
    password: 'password'
  )

  User.create(
    firstname: 'Chris',
    username: 'chrisbikes',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Chris! Hi - Originally from East coast / New York and Boston areas, I have been living in my home here in San Francisco for 18 years. Having explored not just the Bay Area but most of California and the surrounding areas I can be a great resource for any travel needs. I am an active hiker and mountain bike and get out multiple times a week. I love adventure travel and recent trips include circumventing the Adriatic Sea by motorcycle and trekking to Mount Everest base camp in Nepal. My home is filled with things I have collected in my travels.",
    joined_date: '2016-08-06',
    password: 'password'
  )

  User.create(
    firstname: 'Meirav',
    username: 'mvariem',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Meirav! I have lived in the Bay Area for the past 21 years and love it here. So much to do and see!! I work in Marketing and PR. To pay for college at UC Berkeley (10 years ago) I also become a professional tour guide in San Francisco. ",
    joined_date: '2011-11-09',
    password: 'password'
  )

  User.create(
    firstname: 'Helen',
    username: 'helen2011',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Helen! I am a Personal Assistant at a tech company.",
    joined_date: '2011-03-04',
    password: 'password'
  )

  User.create(
    firstname: 'Emma',
    username: 'ehoward',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Ignacio! I am based out of San Francisco and work in market research my specialty is the pharmaceutical industry. Married and have 3 girls.",
    joined_date: '2013-02-05',
    password: 'password'
  )

  User.create(
    firstname: 'Greg',
    username: 'mcgreg',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Greg! I'm a software engineer and manager, my wife is a designer and simple-living consultant. We are east coast natives but have lived in SF since 2000 and love the California way of life. To us, that's doing urban hikes around our gorgeous hilly city, eating farm-fresh food, crafting mezcal or whisky cocktails in the evening, listening to indie rock, meditating, and enjoying the company of our 1-year-old son.",
    joined_date: '2015-04-03',
    password: 'password'
  )

  User.create(
    firstname: 'John',
    username: 'johnny19',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm John! Now also renting directly from my own site: buttersuites\n\n
 
    I have lived in California (in various parts) my whole life. I love it here!
    I enjoy everything the area has to offer. One of the things I love most is the diversity, talent, and friendliness of the people. I've settled down here in San Mateo, and have a loving family with two little ones, with whom I spend all of my spare time.\n\n
    
    I love traveling with my family but we're also happy just learning about other cultures through the people we meet.\n\n
    
    I'm also kind of a nerd. I've been working in the video game industry for most of my career, and now I work at (Hidden by Airbnb).",
    joined_date: '2015-08-06',
    password: 'password'
  )

  User.create(
    firstname: 'Tim',
    username: 'tcarolyn',
    email: Faker::Internet.free_email,
    bio: "Hi, We are rugged elegant Jen and Tim! passionate entrepreneurs, philanthropists, partners, rebels with a cause, cyclists,sharing our unique creations and our blessings is in our dna. Jen was born in NYC. Tim was born in Wisconsin.",
    joined_date: '2015-02-11',
    password: 'password'
  )

  User.create(
    firstname: 'Julie',
    username: 'jkim',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Julie! We are an active family that enjoys skiing in Lake Tahoe in the winter and playing tennis & traveling in the summer. I am a native Californian and graduated from UCLA. I am currently working in Tech in downtown San Francisco.",
    joined_date: '2016-06-07',
    password: 'password'
  )

  User.create(
    firstname: 'Selam',
    username: 'sweldu',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Selam! I am a software engineer with an insatiable curiosity to learn new technologies and apply capabilities to solve problems.",
    joined_date: '2019-01-02',
    password: 'password'
  )

  User.create(
    firstname: 'Selam',
    username: 'sweldu',
    email: Faker::Internet.free_email,
    bio: "Hi, I'm Selam! I am a software engineer with an insatiable curiosity to learn new technologies and apply capabilities to solve problems.",
    joined_date: '2019-01-02',
    password: 'password'
  )




  ###################################
  # User Photos
  ###################################

  num_users = User.all.length


  (0...num_users).each do |idx|
    # Personal users
    if idx < 9
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/0#{idx+1}-user.jpg")
      u.photo.attach(io: file, filename: "0#{idx+1}-user.jpg")
      u.save!
    else
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/#{idx+1}-user.jpg")  
      u.photo.attach(io: file, filename: "#{idx+1}-user.jpg")
      u.save!
    end
  end



  
  ###################################
  # Listings
  ###################################

  Listing.destroy_all

  num_hosts = User.all.length

  # Listing template
  # Listing.create(
  #   title: "title",
  #   description: "description",
  #   num_guests: ,
  #   type: "type",
  #   num_rooms: ,
  #   num_beds: ,
  #   num_baths: ,
  #   price: ,
  #   self_check_in: "true",
  #   parking: "true",
  #   kitchen: "true",
  #   washer: "true",
  #   dryer: "true",
  #   dishwasher: "true",
  #   wifi: "true",
  #   tv: "true",
  #   bathroom_essentials: "true",
  #   bedroom_comforts: "true",
  #   coffee_maker: "true",
  #   hair_dryer: "true",
  #   location: "location",
  #   location_description: "description",
  #   lat: 34,
  #   long: -122,
  #   host_id: id,
  # )

  # Listing 1 
  Listing.create(
    title: "Downtown SF Studio Apartment Near Civic Center",
    description: "Explore the heart of San Francisco from this designer studio. Unwind in this boutique, open-concept space with carefully selected decor or gaze out across the city from the rooftop terrace with 360-degree views, a BBQ, and a seating area.",
    num_guests: 3,
    num_rooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "studio",
    price: 150,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The building is located in the Civic Center area, in the middle of town, and is equal distance to all of the nightlife options and places of interest. Discover the city with close access to the water and the iconic Mission District.",
    lat: 37.7856652,
    long: -122.4070889,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 2
  Listing.create(
    title: "Explore Valencia Street from a Room in a Serene Condo",
    description: "Relax in a beautiful, bright room in chic and calm condo in the vibrant Mission District, and explore local restaurant scene. Room has its own TV with Netflix and Hulu, and has an adjacent private bathroom just for guests. While the neighborhood is busy, the guest bedroom is not street facing and is quiet. Walk to Dolores Park, Castro, and Hayes Valley. Easy Uber or Bart ride from the airport! Please read useful info in the House Rules section below (scroll all the way down), including check-in information and parking details. A very sweet and quiet boston terrier (@petitepokey) lives here.",
    num_guests: 2,
    num_rooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "private bedroom",
    price: 140,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Condo is steps away from some of the most popular restaurants, shops, a supermarket, & public transportation (including BART). That said, SF is a small city best explored on foot! *Please* *read* parking/check-in info in the House Rules. Dog at home.",
    lat: 37.76016,
    long: -122.41929,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 3
  Listing.create(
    title: "Amazing Location with Breathtaking Bay Views",
    description: "Enjoy 180° Bay views in the sunny living room at this hidden oasis in the heart of the city. Listen for foghorns, sea lions, and the clang of nearby cable cars. Sit at the sleek marble dining table and admire the eclectic art featured throughout.",
    num_guests: 4,
    num_rooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "whole apartment",
    price: 185,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Nestled in North Beach, this is the place to be. Voted one of the country's Top 10 neighborhoods, it's walkable to downtown, the Wharf, Union Square, Lombard, Chinatown, and more. You're close to lovely cafes, great bars and fantastic restaurants.",
    lat: 37.7982,
    long: -122.41183,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 4
  Listing.create(
    title: "Contemporary Apartment in Potrero Hill",
    description: "Enjoy stunning views of the city at this renovated hilltop hideaway in one of San Francisco's sunniest neighborhoods. Marvel at the view while washing dishes in the fully equipped kitchen or while kicking back with coffee on the sunny balcony.",
    num_guests: 3,
    num_rooms: 1,
    num_beds: 1,
    num_baths: 3,
    listing_type: "whole apartment",
    price: 225,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Experience authentic San Francisco in Potrero Hill. Enjoy both old and new by taking a walk down cobblestone paths that date before the 1906 quake, leading to some of the city's most vibrant restaurants and shops.",
    lat: 37.75308,
    long: -122.40149,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 5
  Listing.create(
    title: "Stretch out in This Modern San Francisco Loft",
    description: "Relax in this authentic and thoughtfully decorated loft. The vibrant, open living room boasts 16-foot ceilings and sprawling windows letting in natural light. Admire original artwork, high end furniture and luxuries like a smart TV, and full kitchen.",
    num_guests: 4,
    num_rooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "whole apartment",
    price: 205,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The loft is located within walking distance to downtown and the Moscone center—SOMA has a walk score of 97! There are plenty of great bars and award winning restaurants within walking distance, as well as transport to all parts of the city.",
    lat: 37.77687,
    long: -122.40916,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 6
  Listing.create(
    title: "Fourth of July Penthouse with Views near Fisherman's Wharf",
    description: "Enjoy close-up views of iconic landmarks from all living areas or have a family BBQ on the deck and admire the Golden Gate Bridge from there. On a chilly evening, gather everyone indoors for a warm meal and a movie.",
    num_guests: 6,
    num_rooms: 2,
    num_beds: 3,
    num_baths: 3,
    listing_type: "whole house",
    price: 799,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is located in North Beach/Telegraph Hill. It is perfectly centered between Pier 39, Fisherman's Wharf and North Beach (the Italian District). It's walking distance to Chinatown, Union Square, and the Financial District. Coit Tower is a few block away. Giants games, Boutique shopping, and world-class museums are just a short Uber ride away. And, if you just want to spend a day at home, relaxing, you'll find the top floor to be peaceful and calm high above the hustle and bustle of SF.",
    lat: 37.80264,
    long: -122.41046,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 7
  Listing.create(
    title: "Indulge in a Designer Victorian in Pacific Heights",
    description: "Unwind in contemporary luxury in this spectacular 1900s Victorian home. The space offers the utmost privacy and instills a sense of peace and belonging with the large backyard, bright and modern kitchen, patio walkout, and designer furnishings.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "whole house",
    price: 800,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Regal mansions and prestigious buildings are the essence of Pacific Heights. This prim and proper neighborhood epitomizes old-world elegance. The quiet streets are mostly enlivened with passers-by appreciating its jaw-dropping architectural grandeur.",
    lat: 37.789,
    long: -122.43939,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 8
  Listing.create(
    title: "Stunning Family-Friendly House with Views in Noe Valley",
    description: "Wake up in a bright bedroom and admire a postcard view of hillside houses from the window. This colorful, art-filled home is made for entertaining. Cook in a chef's kitchen, serve dinner at a formal table, and gather on orange cushions by a fire pit.",
    num_guests: 8,
    num_rooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "whole house",
    price: 945,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Noe Valley is quaint and perfectly situated. Everything needed can be found within five blocks—from Whole Foods and upscale dining to neighborhood boutiques, cafes, and three MUNI lines. The 280 and 101 freeways are easily accessible.",
    lat: 37.75016,
    long: -122.43815,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 9
  Listing.create(
    title: "Revitalized Edwardian Residence with Rooftop Patio",
    description: "Find relics from the past in this update historical home. The space boasts original design features, wood finishes, a tasteful blend of different furnishings and decor, and a private backyard with an outdoor dining area.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 4,
    num_baths: 2,
    listing_type: "whole house",
    price: 1000,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "This tree-lined neighborhood is sandwiched between Lake Street, Mountain Lake Park, and the Presidio on one side and the shops and cafes of California and Clement Streets on the other. It is on the North side of town close to the Golden Gate Bridge.",
    lat: 37.78457,
    long: -122.46945,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 10
  Listing.create(
    title: "Stylish Home with Fireplace and Deck near Golden Gate Park",
    description: "Discover a quiet oasis right in the middle of the city. Filled with light and charm with all the comforts for every family member, young and old. Prepare meals in a home-style kitchen and dine at a formal table. Relax by the outdoor fire pit while looking out at the San Francisco skyline.",
    num_guests: 8,
    num_rooms: 4,
    num_beds: 5,
    num_baths: 3,
    listing_type: "whole house",
    price: 799,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is in the Lone Mountain neighborhood, next to University of San Francisco and a few blocks from Golden Gate Park, with its gorgeous trails and the De Young Museum. Walk to the Divisadero Corridor to discover new hot restaurants.",
    lat: 37.77858,
    long: -122.4492,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # # Listing 11
  Listing.create(
    title: "Retreat in a Roomy Apartment in Mission Dolores / Castro",
    description: "Stay in the vibrant heart of SF in a chic apt favored by airbnb employees! Steps from Dolores Park, Michelin star restaurants, and hip bars, this exceptionally-designed oasis is a walker's and foodie's paradise, unmatched in comfort and style.",
    num_guests: 2,
    num_rooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "whole apartment",
    price: 269,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Spectacular location in SF’s hottest neighborhood - walk to shops, bars and world-class eateries, with Dolores Park's warm breezes a block away. Also steps from 6 public transportation lines with direct access to Union Square, MOMA+ Golden Gate Park.",
    lat: 37.76166,
    long: -122.42943,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 12
  Listing.create(
    title: "Near Moscone Center, Privacy with Style - the SoMa Loft",
    description: "SoMa Second Home - the SoMa Loft - is a private, airy and bright SoMa loft style apartment. Unwind amongst the globally inspired decor, while the sun streams in through the giant windows, or head into the shared courtyard for a nap in the sun.",
    num_guests: 3,
    num_rooms: 1,
    num_beds: 1,
    num_baths: 1,
    listing_type: "whole apartment",
    price: 289,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "South of Market is one of the most diversified neighborhoods in San Francisco, close to everywhere. Walking distance to Moscone Center, MoMa, AT&T Park and Union Square. Whole Foods is only a block away. SoMa Second Home is surrounded by cafes, restaurants, breweries, clubs and shops.",
    lat: 37.77945,
    long: -122.40382,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 13
  Listing.create(
    title: "Industrial-Chic Loft with Private Roof Deck and City Views",
    description: "Gaze over a sprawling city from this cool urban loft characterized by steel fittings and polished, heated, concrete floors. The expansive roof deck is a spectacular spot. The third bedroom is a convertible bedroom that converts the living room into its own private space with sofa. Metal and glass doors in the 3rd bedroom picture can be moved to enclose the sofa nook. This qualifies as a hosted stay which means the host can be available when needed but otherwise guests will enjoy full privacy",
    num_guests: 7,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 407,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Known as the land of startups and famed for its bounty of new restaurants and bars, SoMa is a lively neighborhood defined by its warehouses and waterfront position. Explore on foot or take a short taxi ride to the city's other highlights. Please note that the first 2 guests are included in the price, but extra guests beyond 2 increase the pricing by 50 per guest per night. This really helps us with extra cleaning and laundry and especially rent (SF is a nightmare).",
    lat: 37.77461,
    long: -122.41034,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 14
  Listing.create(
    title: "Elegant and Eclectic Townhouse with Victorian Charm",
    description: "Select a classic novel from a shelf and curl up on a traditional sofa to read next to a sunny window. This spacious house has retained much of its Victorian charm and architectural details. A vintage gas stove and clawfoot tub add to the ambience.",
    num_guests: 8,
    num_rooms: 4,
    num_beds: 4,
    num_baths: 1,
    listing_type: "entire house",
    price: 430,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is in the Mission District, known for its great restaurants and coffee shops. It is in the heart of San Francisco, and is easily accessible to other neighborhoods. The area is famous for its mural art painted on many of the buildings.",
    lat: 37.75466,
    long: -122.41197,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 15
  Listing.create(
    title: "Walk to Golden Gate Park from a Radiant",
    description: "Breakfast at a bright nook table in the eat-in kitchen, step through the adjacent door for coffee on a sunny deck patio overlooking the garden, or sit down for a meal in the formal dining room. With its stately design elements, classic fittings, contemporary style, and traditional hardwood furnishings, this gorgeous Victorian home is a domain of reserved elegance.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 3,
    listing_type: "entire house",
    price: 450,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is in a beautiful area within a 5-minute walk from the Haight-Ashbury, Cole Valley, and Inner Sunset neighborhoods, offering a variety of restaurants, cafes, and shopping. Golden Gate Park is steps away, making for short walks to the Academy of Sciences, DeYoung Museum, Children's Park, and Botanical Gardens. The light rail stops a half block away in front of UCSF Hospital, for an easy trip downtown and points beyond.",
    lat: 37.765,
    long: -122.458,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 16
  Listing.create(
    title: "Iconic Victorian Architecture with City Views",
    description: "Relish staying in this Victorian San Francisco treasure. Classic architectural details have been carefully preserved and are evident at every turn. Fix a gourmet meal in the modern kitchen and spend the evening admiring the city from the balcony.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 3,
    listing_type: "entire house",
    price: 475,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Walk the streets of Noe Valley, a family-friendly area with shops, cafes, and restaurants for all tastes. Travel to many city areas easily by public transport, or rent a car and have a day out of the city enjoying nature, small towns, and wine.",
    lat: 37.74097,
    long: -122.42896,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 17
  Listing.create(
    title: "Luxury Balinese Oasis House with Garden Hot Tub",
    description: "Soak in the alfresco hot tub in the lush, secluded garden of this Balinese-influenced, resort-like retreat. Bali Hai Castro's stylish Asian Buddhist decor lends a zen ambiance to the sleek, modern luxury fittings. The plush patio hosts a fire table.",
    num_guests: 6,
    num_rooms: 2,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 695,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Bali Hai Castro is a short walk from the Castro District’s restaurants, cafes, bars, supermarkets, and MUNI transit station. It is also convenient for Corona Heights Park’s tennis and basketball courts, plus a hiking trail with stunning city views.",
    lat: 37.76379,
    long: -122.43972,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 18
  Listing.create(
    title: "Modern Minimalist Condo with Great City Views",
    description: "Relax by the cozy fireplace of this bright, top-floor condo. The apartment is centrally located and offers up sweeping views of San Francisco from the spacious and bright living room. Enjoy easy access to public transport or walk to Noe Valley.",
    num_guests: 5,
    num_rooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "entire condo",
    price: 500,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The building is located next to the landmark of Twin Peaks in the geographical center of San Francisco in what feels like a private perch above the city. However, the area’s conveniently located near Noe Valley and Castro with easy access downtown.",
    lat: 37.75259,
    long: -122.44498,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 19
  Listing.create(
    title: "Sunny Upper Floor Flat in an Authentic Neighborhood",
    description: "Grab a magazine from a rack and kick back old-style on a comfy couch or in a sunny bay window. Vibrant art, colorful furnishings, and cool accents give rooms a cheerful vibe. Jam with bongos and a ukulele beside an ornamental brick fireplace.",
    num_guests: 9,
    num_rooms: 4,
    num_beds: 4,
    num_baths: 2,
    listing_type: "entire apartment",
    price: 486,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is in the walkable Portola neighborhood, south of Bernal Heights. It's a family-friendly and ethnically diverse working-class area. Walk to restaurants, a brewery, a playground, tennis and basketball courts, and a grocery store.",
    lat: 37.729,
    long: -122.408,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 20
  Listing.create(
    title: "Unique, Modern Apartment with Contemporary Furnishings",
    description: "Wake up refreshed in this spacious bright full-floor apartment in an iconic Victorian corner building. Kick back in a renovated designer boutique-style space filled with mid-century and contemporary furniture and an eclectic modern art collection.",
    num_guests: 5,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire apartment",
    price: 580,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Nopa is a centrally located, vibrant residential neighborhood, an area of tree-lined streets between Alamo Square and Golden Gate Park, intersected by a lively boulevard lined with unique storefronts, cafes & some of San Francisco’s best restaurants.",
    lat: 37.77895,
    long: -122.43634,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 21
  Listing.create(
    title: "Gorgeous Serenity in the City with Views near Haight Ashbury",
    description: "Settle into this amazing, light filled, stunning old San Francisco home with incredible south facing city and park views! Relax in the open space of a large great room. Filled with character, this renovated Victorian has 112 years of history to tell",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 2,
    listing_type: "entire house",
    price: 675,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "In the heart of the city near incredible Golden Gate Park, the apartment is within walking distance of NOPA, Haight Ashbury, The DeYoung museum, Academy of Sciences, Conservatory of Flowers, Stow Lake, plus many great restaurants and shops",
    lat: 37.77306,
    long: -122.45278,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 22
  Listing.create(
    title: "Charming Victorian in Lower Haight",
    description: "Defined by the exuberant decor and eclectic furnishings within its vibrant rooms, this elegant Victorian bears a warmth and enchantment that inspires at every turn. Fix breakfast amid the kitchen's knotty-wood cabinetry to enjoy in the bay window booth.",
    num_guests: 7,
    num_rooms: 4,
    num_beds: 4,
    num_baths: 2,
    listing_type: "entire house",
    price: 550,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Lower Haight is a historic corridor that borders the iconic Castro, Haight-Ashbury, and Mission neighborhoods at the cultural core of the city. Charming restaurants, lively bars, and delightful boutiques, as well as 5 green spaces are all steps away.",
    lat: 37.77337,
    long: -122.43529,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 23
  Listing.create(
    title: "Classic Architecture with Modern Design in City Center",
    description: "Classic Victorian architecture coupled with a modern eclectic interior creates a feeling of warm minimalism. Indoor plants, antiques, and light fill the space. Relax on the spacious outdoor deck with grill surrounded by beautiful gardens.",
    num_guests: 4,
    num_rooms: 2,
    num_beds: 2,
    num_baths: 2,
    listing_type: "entire apartment",
    price: 425,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Centrally located and surrounded by parks, public transport, and fantastic bars and restaurants. Downtown is easily accessible via the metro rail line just blocks away. Iconic Haight-Ashbury, Golden Gate Park, and world-class museums are all nearby.",
    lat: 37.76719,
    long: -122.44824,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 24
  Listing.create(
    title: "Potrero Paradise with Stunning Views",
    description: "Wake up to iconic skyline views from a bedroom balcony. Brew coffee in the chef's kitchen and relax in the charming front garden. After a dip in the hot tub, read a book in a living room amid stunning decor and timeless furnishings. This spacious three-story, three bedroom home (plus Sitting Room that can be made up to a fourth bedroom) and its five patios and balconies feature stunning views of Twin Peaks, Downtown, and Bay Bridge. The house is set away from the street with a gracious front patio/garden and is very quiet.",
    num_guests: 8,
    num_rooms: 3,
    num_beds: 3,
    num_baths: 3,
    listing_type: "entire house",
    price: 650,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The house is set away from the street near the top of Potrero Hill, a quiet and walkable neighborhood known for its sunny weather, charming eateries, hip bars, quaint boutiques. Visit the nearby Museum of Craft and Design, or head to the neighboring Mission District. The home is also convenient to Moscone Convention Center, SoMa, and ATT Park. Parking is plentiful outside the home and no permit is required.",
    lat: 37.761,
    long: -122.404,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 25
  Listing.create(
    title: "Sunny, Modern House with Great Views",
    description: "Cook a delicious dinner in the bright and spacious kitchen, then serve up to eight guests in the elegant, simple dining room with floor-to-ceiling windows. This sunny, modern Edwardian atop Potrero Hill is thoughtfully minimalist with amazing views.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 4,
    num_baths: 2,
    listing_type: "entire apartment",
    price: 599,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Potrero Hill has some of the best views in the city. It is full of hidden gems: parks, views, eateries, history, and shopping. Nearby are the vibrant and fun SoMa and Mission neighborhoods.",
    lat: 37.76134,
    long: -122.40268,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 26
  Listing.create(
    title: "Superb Location Sunny Trails/Views Minutes from SF",
    description: "Gorgeous 3700 Square Foot home in the Oakland Hills. 20min ride to downtown San Francisco and 6min drive to Rockridge Bart station. Located on Joaquin Miller Road right across the street from two regional parks, Redwood Regional and Joaquin Miller park with ample trails, creeks and views of the Bay and San Francisco for those who also enjoy the outdoors.",
    num_guests: 12,
    num_rooms: 4,
    num_beds: 6,
    num_baths: 4,
    listing_type: "entire house",
    price: 695,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Located on Joaquin Miller Road, the property sits right across the street from two regional parks: Redwood Regional and Joaquin Miller park, home to ample trails, creeks, and views of the Bay. It's a 15-minute ride to downtown San Francisco.",
    lat: 37.80732,
    long: -122.18232,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 27
  Listing.create(
    title: "Hilltop Retreat with Panoramic Cityscape Vistas",
    description: "Indulge in comfort and style at this tranquil suburban home. The renovated residence features chic furnishings and decor, an open-plan main floor, soothing grays, unique artwork throughout, and a private deck.",
    num_guests: 11,
    num_rooms: 4,
    num_beds: 6,
    num_baths: 3,
    listing_type: "entire house",
    price: 695,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "The property is tucked away on a quiet hilltop corner lot in a coveted neighborhood. It is located just a short drive away from downtown SF and SFO airport, with easy access to freeways and the restaurants of Market Street.",
    lat: 37.70574,
    long: -122.42811,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )

  # Listing 28
  Listing.create(
    title: "Indulge in a Designer Victorian in Pacific Heights",
    description: "Unwind in contemporary luxury in this spectacular 1900s Victorian home. The space offers the utmost privacy and instills a sense of peace and belonging with the large backyard, bright and modern kitchen, patio walkout, and designer furnishings.",
    num_guests: 6,
    num_rooms: 3,
    num_beds: 4,
    num_baths: 3,
    listing_type: "entire house",
    price: 800,
    self_check_in: true,
    parking: true,
    kitchen: true,
    washer: true,
    dryer: true,
    dishwasher: true,
    wifi: true,
    tv: true,
    bathroom_essentials: true,
    bedroom_comforts: true,
    coffee_maker: true,
    hair_dryer: true,
    location: "San Francisco, California, United States",
    location_description: "Regal mansions and prestigious buildings are the essence of Pacific Heights. This prim and proper neighborhood epitomizes old-world elegance. The quiet streets are mostly enlivened with passers-by appreciating its jaw-dropping architectural grandeur.",
    lat: 37.789,
    long: -122.43939,
    host_id: User.all[(0...num_hosts).to_a.sample].id
  )



  ####################################
  # Listing Photos
  ####################################

  num_listings = Listing.all.length

  (0...num_listings).each do |idx|
    (0...8).each do |photo_idx|
      listing = Listing.all[idx]

      if idx < 9
        # Full size Image
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/0#{idx+1}-SF/original/0#{idx+1}-0#{photo_idx+1}-SF.jpg")  
        listing.photos.attach(io: file, filename: "0#{idx+1}-0#{photo_idx+1}-SF.jpg")
        
        # Thumbnail
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/0#{idx+1}-SF/thumbnail/0#{idx+1}-0#{photo_idx+1}-SF-thumb.jpg")  
        listing.thumbnails.attach(io: file, filename: "0#{idx+1}-0#{photo_idx+1}-SF-thumb.jpg")
      else
        # Full size Image
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/#{idx+1}-SF/original/#{idx+1}-0#{photo_idx+1}-SF.jpg")  
        listing.photos.attach(io: file, filename: "#{idx+1}-0#{photo_idx+1}-SF.jpg")

        # Thumbnail
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/#{idx+1}-SF/thumbnail/#{idx+1}-0#{photo_idx+1}-SF-thumb.jpg")  
        listing.thumbnails.attach(io: file, filename: "#{idx+1}-0#{photo_idx+1}-SF-thumb.jpg")
      end

      listing.save!
    end
  end









  ####################################
  # Reviews
  ####################################

  Review.destroy_all

  num_users = User.all.length
  num_listings = Listing.all.length
  reviews = ["We loved staying here! It was clean and comfortable and we loved being close to the beach and far enough from the city to unwind. He was available as needed but also gave us privacy. Would definitely stay there again!",
  "Nice AirBnB that is close to Ocean Beach, Golden Gate Park and public transportation! This place was modern and well equipped.",
  "Excellent place to stay. Room has everything you need. I really want to stay longer, next time.",
  "Loved everything about this space. Super private. Very cozy and comfortable. Has everything you need.",
  "What a beautiful, minimalist place. I was so impressed with all the small, thoughtful touches, and the location is fabulous. Great stay!",
  "Great experience! The place had everything you could think of. A lot of thoughtful touches. Everything was very organized. Loved the local tips for eating.",
  "The studio is perfect! We felt totally at home. We appreciated all of the little touches: the efficient design, nice appliances, available technology, and streaming services. The location is great! We would highly recommend making this your home base when visiting the Bay Area and we will look to stay here again when we revisit SF.",
  "Really good house with lots of high tech equipments. Very fast wifi.
  The studio was clean, cozy, and had everything that we needed! The location is near a bunch of cute restaurants and walking distance to the beach. We would definitely stay again!",
  "Amazing space and so clean!",
  "Nice location. Lots of interesting restaurants in the neighborhood!
  Really great studio and epic location. Very well appointed and stylish and functional interior. Was an awesome place to hole up and work for a couple days. And has a great pour over situation for a coffee dude like me.",
  "Comfortable, modern,quiet - safe neighborhood- great host- highly recommended, would definitely stay here again.",
  "This place is such a gem! The neighborhood is so laid back with great coffee, food, and shopping, all just a quick walk in the wonderful SF air!",
  "Fantastic place. Will stay here again. 5 star stay:)",
  "Very Quiet. Nice size bathroom. Easy in & out and lots of parking on street.",
  "Friendly, comfortable , fresh and stylish renovations, modern but cozy.", "Exceeded expectations. Friendly, helpful host.",
  "This place was amazing. I can't say enough good about it. The attention to detail -- candles, stars, bedding, cleanliness... I'm going to recommend this place to others. Host had a great energy as well.",
  "Everything was so clean and crisp! The amenities were great and I could tell a lot of care was put into the space for guests to have a comfortable stay.",
  "Wonderful studio apartment! Highly recommend!",
  "Clean, stylish, comfortable space — walking distance to restaurants and a cute little co-op. Loved all the tech and the well-stocked kitchenette. The host even put out fresh flowers! Would definitely stay again.",
  "What a gorgeous place. Walking distance to everything you want. Small touches and amenities that I didn’t know I needed and were there ! The space was beautiful and I wish we had planned to stay longer.",
  "The space is clean, bright, and well appointed. We were comfortable and plan to be back soon!",
  "Thank you for a wonderful stay! The studio was exactly how described, very clean and a perfect location!",
  "Small but efficient space. It has everything you need, including alexa!",
  "It's a great place to live in for travellers, highly recommended!",
  "The best! And that’s all we have to say.",
  "Nice quiet location. Great host. Very modern and comfy place. Truly a pleasure!",
  "Great stay, very comfortable!",
  "Wonderful place to stay in SF. Walking distance to an amazing sushi place, also a great breakfast place, and plenty of little coffee shops. Super comfortable and clean place to stay. Highly recommend staying here!",
  "So many great touches. I highly reccomend. Great on all fronts!",
  "Looking into living like a San Fransican for your stay this is the place.",
  "You will LOVE this place! Super modern and sleek, with food/ingredients in the fridge and cabinets that you are free to eat and add too if you'd like. The host is kind enough to include a welcoming packet with everything you need to know about your stay. It ranges from how to work the kitchen and bathroom appliances, to easy to understand directions to the local hotspots. Access in and out of the unit is flawless, all you need is a code and you're set. Highly HIGHLY recommended!",
  "Just the best place to stay. Highly highly recommend this spot. No complaints at all!!!",
  "The room/suite was clean, accommodating, and comfortable. We very much enjoyed our stay.",
  "Great place to stay! Clean and comfortable. Worth every penny, I will be back!",
  "This was our first experience with airbnb and it was amazing! The place is clean, comfortable, and beautifully done. We would love to stay here again the next time we are in SF. You will not be dissapointed.",
  "The host is thoughtful and room is decorated. Comfortable staying!",
  "This place is in a great location with many options for food. We were able to walk a few blocks down and get some food and dessert. We were also able to watch one of the NBA finals games in a bar that was walking distance away. We felt safe in this area. The host made checking in and out very easy.","Accommodating and made sure we were well informed about amenities. The decor was very homey and the place was clean and comfortable. I would definitely recommend staying here for many reasons!",
  "Lovely very clean every good location - very cute pupper!",
  "Parking is tough but overall great place to explore the city",
  "Excellent location in heart of SF with best amenities of a plus listing & amazing prices . For sure the best place for a short trip in SF
  Great space and location!",
  "Great place and great value. If this place is available, book it.",
  "Very nice place and very conveniently located! Great comfort!",
  "We had high expectations for a beautiful view in a charming part of San Francisco, and yet they were exceeded by such a great place to stay in an amazing city. So much fun and such a great apartment.",
  "Amazing space in the heart of it all! We loved the location and felt very safe. We could easily walk anywhere we wanted to see and although there is no designated parking, we managed to find spots throughout our stay with a little work. It was so much fun, clean, comfortable, and quiet. Loved it!",
  "Amazing space in the heart of it all! We loved the location and felt very safe. We could easily walk anywhere we wanted to see and although there is no designated parking, we managed to find spots throughout our stay with a little work. It was so much fun, clean, comfortable, and quiet. Loved it!",
  "Lovely apartment in a perfect spot to explore San Francisco.",
  "An amazing home. I would definitely recommend any of my friends who wants to visit SF.",
  "Great location! Great view!",
  "What can I add? As said before, the place is amazing. The view. Wow. The location is perfect. Residential area but walking to resturants, shops, bars, and the sites of San Fran. We were our most of the day but spent nights after dinner looking out over the bay. Great value for San Fran. Thanks again!",
  "Came with my girlfriends for a weekend trip to San Fran/Napa, and the place was the perfect spot to call home for our stay. Adorable, amazing view, and great location. We loved everything about it.",
  "Amazing place to stay in SF. Gorgeous apartment, great host !!!!",
  "If you can get this place, take it. It has everything you need: Location, views, decor, fully equipped kitchen and lots of cool reading material!",
  "As soon as I walked inside I felt right at home. The apartment is beautiful and the view is next level. We immediately tried to extend our stay but it was already booked. Will definitely be coming back here next time I'm in SF.",
  "Beautiful apartment. Presented with a lot of very helpful information prior to our stay. Apartment has a fantastic view and is nestled in the middle of a very quiet block. Would definitely recommend this apt to anyone.",
  "An absolutely amazing apartment with a beautiful view and great value!",
  "An amazing apartment in a perfect position with a brilliant host. Highly recommend.",
  "Go for it! The apartment was the highlight of our trip!",
  "Beautiful flat in perfect location. We felt very comfortable and enjoyed our stay very much.",
  "A fantastic base for exploring and relaxing in a city I have always wanted to experience. I could live here in a heartbeat!",
  "Had an amazing 4 days in San Francisco at this awesome location. Either get lots of exercise up and down the famous hills or make use of uber to get anywhere really cheap. Host was really helpful and responsive, took into account our specific needs and did her best to accommodate us.",
  "Amazing flat, with super cozy rooms amazing collection of travel souvenirs and beautiful view of the water. All major attractions are about 20 min walking. Super easy checkin + great communication, highly recommend!",
  "Amazing view, comfortable and stylish apartment. We had a wonderful time!",
  "Great studio, well decorated and cared for. A terrific host - very responsive to questions and concerns.",
  "The apartment is very comfortable. everything is thought out to the smallest detail, in the kitchen there is absolutely everything necessary for cooking. very cool that the washing machine and dryer in the apartment. The apartment is clean and cozy. next to an incredible park, from which a beautiful view of the city. Thank you for everything :)",
  "This is clearly the best place to stay in SF !",
  "Great apartment - modern, clean and comfortable with everything you might need. Great location out of the city centre but very easy to get around on public transport - including to and from the airport. Great restaurants nearby as well as grocery store.",
  "Nice host and nice place! Very good location in the city",
  "This was a beautiful place in great location and the hosts were incredible
  Excellent host, communicating quickly and allowing me to extend my stay multiple times. The unit is exactly as described and well appointed. It has everything you need for a stay in the city for work or pleasure. Would definitely recommend!",
  "It was great staying at your place for ~3 weeks. It's a great location, close to everything, but still quiet and comfortable indoors.",
  "Incredible place, clean and really beautiful.",
  "I enjoyed my stay in San Francisco. The unit was well appointed with high-end amenities and all the creature comforts you could want while traveling. The high tech parking facilitiy was a huge bonus.",
  "Great Place! and Even Greater Hosts!!! Totally recomended for short and long stay!",
  "All around amazing experience staying here and enjoying all that his place and SF has to offer",
  "Beautiful place and central location! Booking it was a breeze and the host gave easy directions. Would recommend to anyone!",
  "We felt invited and very welcome to stay. The listing was accurately described too, which is a good thing.",
  "I booked this apartment for my parents. The place was immaculate and comfortable and host was easy to communicate with and super helpful. My parents had a wonderful 3 nights in San Fran.",
  "Loved it!!! The apt is all brand new, and has everything you may need during your stay. I'm not sure if it's the best spot in the city if you are just visiting, but other than that, I highly recommend staying here. I'm going to miss living there :)",
  "Stayed here with a colleague for work. It was a great location. It's super close to everything and extremely convenient.",
  "Great place! Love it! Stayed 8 weeks.",
  "Wonderful to communicate with and so very accommodating! Would highly recommend this place to anyone! Thanks for the hospitality!",
  "Amazing place, super nice, and the host was great! Would totally stay here again!",
  "A great space. The apartment is beautiful (huge shower!) with a perfect location. Look forward to staying here again!",
  "Very nice and clean",
  "Great space, smooth check in and check out, awesome all around. Thanks!",
  "Great space, perfect location with thoughtful touches and everything I needed for a 2 night business trip.",
  "This listing is in a central location near public transit with great amenities - the gym is amazing! I stayed here for a business trip. Check-in was easy, the wifi was fast, and the room and shared spaces were very clean , comfortable and thoughtfully designed. There's also a large closet to store all of your things, which is extremely helpful since I was there for a longer stay. I appreciated the excellent communication, and the detail puts into hosting. I would highly recommend staying here!",
  "Great location, clean, and exactly as advertised. Would stay again.",
  "Great location!",
  "Everything's great! Felt at home.",
  "Such a beautiful view! I thoroughly enjoyed my stay and will hopefully stay again. Amenities are great and the coffee shop downstairs is cute. Host is quick with responses, kind and generous. The apartment was spotless! Thank you."]


  # num_users = User.all.length
  # num_listings = Listing.all.length
  # reviews = [...]


  10.times do
    reviews.each_with_index do |review, review_idx|
      Review.create(
        review: review, 
        user_id: User.all[(0...num_users).to_a.sample].id, 
        listing_id: Listing.all[(0...num_listings).to_a.sample].id, 
        rating: (4..5).to_a.sample,
        accuracy: (4..5).to_a.sample,
        communication: (4..5).to_a.sample,
        cleanliness: (4..5).to_a.sample,
        location: (4..5).to_a.sample,
        check_in: (4..5).to_a.sample,
        value: (4..5).to_a.sample,
        )
      end
    end


end