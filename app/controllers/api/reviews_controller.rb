class Api::ReviewsController < ApplicationController
  def index
    @reviews = listing_id ? Review.get_by_listing_id(listing_id) : Review.all
    render :index
  end

  private

  def listing_id
    params[:listing_id]
  end
end
