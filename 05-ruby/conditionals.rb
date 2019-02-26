a = 3;

if a > 5
  puts "a greater than 5"
end

grade = 'D'

if grade == 'A'
  puts "You are killing it"
elsif grade == 'B'
  puts "You are coasting fine"
elsif grade == 'C'
  puts "Acceptable"
else
  puts "Please see Linna"
end

# Case statement (equivalent to JS's switch statement BUT it does not suck)
grade = 'B'
case grade
when 'A'
  puts "You are killing it"
when 'B'
  puts "You are coasting fine"
when 'C'
  puts 'Acceptable'
else
  puts 'See Linna'
end

# modifier conditional AKA backwards if statement
a = 7
puts "a is greater than 5" if a > 5

# Unless -- opposite of if
x = 1
unless x > 2
  puts "x is not greater than 2"
end


puts "x is not greater than 2" unless x > 2
