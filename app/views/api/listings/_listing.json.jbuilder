json.extract! listing, :id, :title, :description, :num_guests, :num_rooms, :num_beds, :num_baths, :listing_type, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id

json.average_rating listing.average_rating
json.num_reviews listing.num_reviews

review_ids = []
listing.reviews.each { |review| review_ids << review.id}
json.reviewIds review_ids

if listing.photos.attached?
  json.photoUrls listing.photos.map {|file| url_for(file)}
end

if listing.thumbnails.attached?
  json.thumbnailUrls listing.thumbnails.map {|file| url_for(file)}
end
