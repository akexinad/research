# This will run forever
# while true
#   print "OMG"
# end

# This won't
i = 0
while i < 5
  puts "i: #{ i }"
  i += 1
end

# until loops
j = 0
until j == 5
  puts "j: #{ j }"
  j += 1
end

# iterators
5.times do
  puts "OMG"
end

5.times {puts "0mG"}

5.times do |k|
  puts "k: #{ k }"
end
