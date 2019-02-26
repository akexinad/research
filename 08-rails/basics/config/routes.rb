Rails.application.routes.draw do
  # 1 Get this action and send them to the pages controller
  root :to => 'pages#hello' # THIS IS THE ROOT OF THE WHOLE SITE. Same as
  get '/hello' => 'pages#hello'
  get '/about' => 'pages#about'
  get '/faq' => 'pages#faq'
  get '/funny' => 'pages#funny'

  get '/auto/:color' => 'auto#color'
  get '/auto/:hp/:torque' => 'auto#engine'

  # reverse polish notation
  get '/calc/:x/:y/:operator' => 'calculator#calculate'
end

# 2 now you have to go the terminal and touch app/controllers/pages_controller.rb file
