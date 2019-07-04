# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


ActiveRecord::Base.transaction do
  # Users

  User.create(
    username: 'mrkchoi',
    email: 'mrkchoi@gmail.com',
    bio: 'A SF-based software engineer who loves exploring cultures through food ...',
    joined_date: 'Thu, 12 Apr 2018',
    password: 'password'
  )
  User.create(
    username: 'kennethichoi',
    email: 'kennethichoi@gmail.com',
    bio: 'A SF-based software engineer who loves to travel ...',
    joined_date: 'Thu, 12 Apr 2016',
    password: 'password'
  )
  # Guest user
  User.create(
    username: 'guest',
    email: 'guest@guest.com',
    bio: 'Guest User is a SF-based software engineer who loves to travel. Currently at 26 countries and counting! Hobbies include meeting new people and exploring different cultures through food. Looking forward to crossing paths in the coming future! ...',
    joined_date: 'Tue, 19 Feb 2019',
    password: 'password'
  )

end