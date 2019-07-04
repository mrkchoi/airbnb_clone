class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.with_attached_photos.all
    render :index  
  end

  def show
    @listing = Listing.with_attached_photos.find(params[:id])
    render :show
  end
  
  private

  def listing_params
    params.require(:listing).permit(:title, :description, :num_guests, :type, :num_beds, :num_baths, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id, photos: [])
  end
end
