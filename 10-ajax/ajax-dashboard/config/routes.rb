Rails.application.routes.draw do
  # this is the only html page: The single HTML Page.
  root :to => 'pages#home'

  # these are JSON and Plaintext API Endpoints
  get '/brother' => 'dashboard#brother'
  get '/time' => 'dashboard#time'
  get '/uptime' => 'dashboard#uptime'
  get '/info' => 'dashboard#info'
end
