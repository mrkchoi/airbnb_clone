class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
