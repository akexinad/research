Rails.application.routes.draw do
  # A wonderful mystery about routes will be revealed tomorrow
  root :to => 'planets#index'
  get '/planets' => 'planets#index'
  # CREATING
  get 'planets/new' => 'planets#new'     # This request goes before show so it doesnt confuse the word new for an ID.
  post '/planets' => 'planets#create'

  get 'planets/:id' => 'planets#show', :as => 'planet'
  # EDITING
  get '/planets/:id/edit' => 'planets#edit', :as => 'planet_edit'
  post '/planets/:id' => 'planets#update'

  delete '/planets/:id/' => 'planets#destroy'
end
