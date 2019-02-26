require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails will do this automatically for you but meanwhile in sinatra...
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional Bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# THESE ARE MODELS (Butterfly model)
class Butterfly < ActiveRecord::Base
  belongs_to :plant, :optional => true # required since rails 5
end

# plant model
class Plant < ActiveRecord::Base
  has_many :butterflies
end

get '/' do
  erb :home
end

# INDEX - Show all butterflies
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

# NEW - Form for adding a new butterfly
get '/butterflies/new' do
  erb :butterflies_new
end

# CREATE - Add a new butterfly to the collectio of butterflies
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save

  redirect to ('/butterflies') # Redirect will make a GET request
end

# SHOW - Show a single butterfly, based on its ID
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end


# EDIT - Show a form allowing editing of a particular butterfly
get '/butterflies/:id/edit' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_edit
end

# UDPATE
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to("/butterflies/#{ params[:id] }")
end

# DELETE - Delete a particular butterfly from the DB
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to("/butterflies")
end


############################### PLANTS ##################################

get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

# NEW STEP
get '/plants/new' do
  erb :plants_new
end

# SHOW STEP
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end


#CREATE STEP
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save

  redirect to ("/plants/#{ plant.id }")
end

# EDIT
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

# UPDATE
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save

  redirect to ("/plants/#{ plant.id }")
end

#DELETE
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to ('/plants')
end


# SECRET SQUIRREL SHH
get '/pry' do
  binding.pry
end


# AFTER every above request you make, this below will close the connection.
after do
  ActiveRecord::Base.connection.close
end





# def query_db(sql_statement)
#   puts sql_statement # Opional feature which is nice for debugging
#
#   db = SQLite3::Database.new 'database.sqlite3'
#   db.results_as_hash = true
#   results = db.execute sql_statement
#   db.close
#
#   results # implicit return
# end
