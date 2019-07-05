class Api::ReviewsController < ApplicationController
  def index
    @reviews = Review.all
    render :index
  end
end
