class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  
  # Super important!
  respond_to :json

  def angular
  	render 'layouts/application'
  end
end
