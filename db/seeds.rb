# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

ActiveRecord::Base.transaction do
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
  
  # https://aerbnb-seeds.s3-us-west-1.amazonaws.com/photos/users/01-user.png
  
  
  ###################################
  # Listings
  ###################################

end