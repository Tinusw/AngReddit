class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  respond_to :json

  # Before action for devise to allow additional username parameter! (the lazy way™)
  before_action :configure_permitted_parameters, if: :devise_controller?
  
  def angular
  	render 'layouts/application'
  end

  private
  # setting the config param that devise should allow through
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) << :username
  end
end