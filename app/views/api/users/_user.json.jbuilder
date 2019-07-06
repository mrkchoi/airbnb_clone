
json.extract! user, :id, :firstname, :username, :email, :joined_date, :bio
if user.photo.attached?
  json.photoUrl url_for(user.photo) 
end

