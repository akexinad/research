require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :home
end

get'/about' do
  erb :about
end

get '/price' do
  @stock_symbol = params[:stock_symbol]
  @info = StockQuote::Stock.quote @stock_symbol

  redirect to('/') if @info.nil?   ## This sends the user back to the home page if they enter the text incorrectly.

  @price = @info.close
  erb :price
end
