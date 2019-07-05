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


  ###################################
  # User Photos
  ###################################

  (0..15).each do |idx|
    # Personal users
    if idx > 0 && idx < 2
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/01-user.png")  
      u.photo.attach(io: file, filename: '01-user.png')
      u.save!
    elsif idx == 2
      # Guest user
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/02-user.png")  
      u.photo.attach(io: file, filename: "02-user.png")
      u.save!
    elsif idx < 9
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/0#{idx+1}-user.jpg")  
      u.photo.attach(io: file, filename: "0#{idx+1}-user.jpg")
      u.save!
    elsif idx == 9
      u = User.all[idx]
      file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/10-user.jpg")  
      u.photo.attach(io: file, filename: "10-user.jpg")
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

  # # Listing 12
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




  ####################################
  # Listing Photos
  ####################################

  num_listings = Listing.all.length

  (0...num_listings).each do |idx|
    (0...8).each do |photo_idx|
      listing = Listing.all[idx]

      if idx < 9
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/0#{idx+1}-SF/0#{idx+1}-0#{photo_idx+1}-SF.jpg")  
        listing.photos.attach(io: file, filename: "0#{idx+1}-0#{photo_idx+1}-SF.jpg")
      else
        file = EzDownload.open("https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/listings/SF/#{idx+1}-SF/#{idx+1}-0#{photo_idx+1}-SF.jpg")  
        listing.photos.attach(io: file, filename: "#{idx+1}-0#{photo_idx+1}-SF.jpg")
      end

      listing.save!
    end
  end






end