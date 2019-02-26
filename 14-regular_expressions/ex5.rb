# Make a program that prints each line that has a two of the same nonwhitespace characters next to each other. It should match lines that contain words such as Mississippi, Bamm-Bamm, or llama.

# We use a BACK REFERENCE

# ARGF.each do |line|
#   puts line if line =~ /(x)\1/ # find me an x, and then 1 more x consecutively
# end

# ARGF.each do |line|
#   puts line if line =~ /(r)\3/ # find me an r, and then 3 more r
# end

ARGF.each do |line|
  puts line if line =~ /(.)\1/ # find me a letter, and then the same latter 1 more time.
end
