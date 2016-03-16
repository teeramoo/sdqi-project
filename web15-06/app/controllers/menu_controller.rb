class MenuController < ApplicationController

  before_filter :authenticate_user!, :except => [:index, :show]

  def index
    @items = Item.all
  end

  def sendfeedback
    @user = current_user.email
    @feedback_text = params[:body]
    UserMailer.feedback(@user,@feedback_text).deliver
    flash.now[:notice] = 'Message sent'
    redirect_to root_url
  end

  def makereservations
    @user = current_user.email
    @feedback_text = params[:body]
    UserMailer.reservations(@user,@feedback_text).deliver
    flash.now[:notice] = 'Message sent'
    redirect_to root_url
  end

end