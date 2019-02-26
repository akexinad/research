# 3. Sydney Suburbs
# Create a program that asks what suburbs you live in.
# Depending on the answer, print an appropriate response of your choosing

# suburbs = ["wenty", "newtown", "campbelltown", "castle hill"];
#
# print "Where do you live? "
# suburb = gets.chomp()

# if suburb == suburbs[0]
#   puts "Sweet you live out west."
# elsif suburb == suburbs[1]
#   puts "The inner west is lovely, #{suburb} is not for far from Marrickville!"
# elsif suburb == suburbs[2]
#   puts "Down south! Plenty of green!"
# elsif suburb == suburbs[3]
#   puts "Up north! great!"
# else
#   puts "Sounds like a nice place!"
# end


# JOEL'S answer

print "What suburb do you live in? "
residence = gets.chomp.capitalize

puts case residence # what i want you to PUTS will depend on the CASE of the RESIDENCE
when 'Glebe'
  puts "Beautiful foreshore walk"
when 'Greenwich'
  puts "Cool mummified corpse"
when 'Fairlight'
  puts 'what a fancy name'
when 'Cabramatta'
  puts 'Fine dining. Also heroin'
else
  puts "I'm sure its a lovely place"
end
