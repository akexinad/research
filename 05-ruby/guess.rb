# Title: Guess The Number
# Activity:
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# Specification:
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# Extensions:
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"

# puts "Let's play a guessing game. Select a number and that will represent the maximum number I'm allowed to guess: "
# print "> "
# range = gets.chomp.to_i
#
# pc_choice = Random.rand(0..range).to_i
#
# puts "Ok, now I'm guessing a number between 0 and #{ range }, can you guess it? "
# puts "Pick your number? "
#
# game = true;
#
# while game == true
#   print "> "
#   guess = gets.chomp.to_i
#
#   if guess < 0
#     puts "It can't be less than 0"
#   elsif guess < pc_choice
#     puts "Ooooh higher!"
#   elsif guess > pc_choice
#     puts "Aaaah lower!"
#   elsif guess > range
#     puts "Way too high!"
#   elsif guess == pc_choice
#     puts "You got it!!! WOOOOOOOOOOOOWEEEEEEEEEEEEEEE"
#     game = false
#   else
#     puts "I don't think that's a number"
#   end
# end


# JOEL'S ANSWER

debug_mode = false

print "What is the maximum possible value you'd like to guess? "
MAX_VALUE = gets.to_i

SECRET_NUMBER = Random.rand 0..MAX_VALUE
puts "The secret number is #{ SECRET_NUMBER }." if debug_mode

# get a guess
print "Guess a secret number between 0 and #{ MAX_VALUE }: "
guess = gets.to_i

until guess == SECRET_NUMBER
  if guess > SECRET_NUMBER
    print "Wrong! Guess lower: "
  else
    print "Wrong! Guess higher: "
  end
  guess = gets.to_i
end

puts "Congratulations"

# loop until the guess is correct
  # get another

# congratulate
