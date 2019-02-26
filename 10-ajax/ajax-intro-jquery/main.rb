require 'httparty'
data = HTTParty.get 'http://numbersapi.com/random/trivia?json' # ruby is SYNCHRONOUS
puts data['text']
