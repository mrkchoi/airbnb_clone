
json.extract! user, :id, :firstname, :username, :email, :joined_date, :bio
json.photoUrl url_for(user.photo)
