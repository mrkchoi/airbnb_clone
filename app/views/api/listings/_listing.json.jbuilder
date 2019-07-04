json.extract! listing, :title, :description, :num_guests, :type, :num_beds, :num_baths, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id

json.photoUrls listing.photos.map {|file| url_for(file)}
