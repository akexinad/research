# 2. Air Conditioning
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."

require 'pry' # opening the exeercise within pry
print "What is the current temperature? "
current_temp = gets.chomp().to_f

print "What temperature would you like? "
desired_temp = gets.chomp().to_f

print "Does the A/C work? (y/n)"
ac_function = gets.downcase[0]  # This gets the lowercase version of the answer, and only takes the first character.

# binding.pry # Pause the command and take me to pry.

# p - programmers puts
p current_temp
p desired_temp
p ac_function


if current_temp > desired_temp && ac_function == "y"
  puts "Turn on the A/C please!"
elsif current_temp > desired_temp && ac_function == "n"
  puts "Fix the A/C now! It's hot"
elsif current_temp < desired_temp && ac_function == "n"
  puts "Fix the A/C when you have the chance... It's cool..."
end
