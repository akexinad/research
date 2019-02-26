require 'sinatra'
require 'sinatra/reloader'
# NB: Server restart still necessary if you add a new 'require'

require 'pry'

# Sinatra is a DSL - Domain Specific Language

get '/hello' do
  "Hello world from Sinatra!!!"
end

get '/lucky_number' do
  "Here is your lucky number #{ rand 1..40 }"
end

get '/uptime' do
  "The server uptime is #{ `uptime` }"
end

# Dynamic URL's
get '/fanclub/:name' do
  "#{ params[:name].capitalize } is a proud member of the Fellini fan club."
end

get '/fanclub/:first/:last' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a member of the Fellini fan club."
end

get '/fanclub/:first/:last/:favorite' do
  "#{ params[:first].capitalize } #{ params[:last].upcase } is a member of the Fellini fan club. Favourite film is #{ params[:favorite].capitalize }"
end

# Crappy calculator
get '/multiply/:x/:y' do
  result = params[:x].to_f * params[:y].to_f
  "The result is #{ result }"
end

############################## SIGNIFICANT PROBLEMS ###################################

# 1. Where is the HTML?
# 2. How do we get information from the user without making the rewrite the URL?
