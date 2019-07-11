class Api::ListingsController < ApplicationController
  def index    
    @listings = bounds ? Listing.in_bounds(bounds).with_attached_thumbnails.with_attached_photos.includes(:reviews) : Listing.all.with_attached_thumbnails.with_attached_photos.includes(:reviews)
    
    if @listings
      render :index  
    else
      render json: ["Listings not found!"], status: 422
    end
  end

  def show
    @listing = Listing.with_attached_thumbnails.with_attached_photos.includes(:reviews).includes(:reviewers).find_by(id: params[:id])

    if @listing
      render :show
    else
      render json: ["Listing not found!"], status: 422
    end
  end
  
  private

  def listing_params
    params.require(:listing).permit(:title, :description, :num_guests, :listing_type, :num_beds, :num_baths, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id, photos: [], thumbnails: [])
  end

  def bounds
    params[:bounds]
  end

  def user_id
    params[:user_id]
  end
end
