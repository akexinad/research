# Write a function that sums up integers from a text file, one int per line.

# def sum_integers filename
#   sum = 0
#   file = File.new filename
#   file.each_line do |line|
#     sum += line.to_i
#   end
#   sum
# end

# OR

# def sum_integers filename
#   numbers = File.readlines(filename)
#   numbers.inject do |acc, num|
#     acc.to_i + num.to_i
#   end
# end

# OR

def sum_integers filename
  File.readlines(filename).map(&:to_i).inject(&:+)
end

puts sum_integers ('integers.txt')
