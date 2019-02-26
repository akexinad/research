# lr.rb - Ruby line reader (cat equivalent)
# Usage: ruby lr.rb somefile.txt otherwhile.md

# ARGV is an array of command line argument strings: ["somefile.txt", "otherwhile.md"]
# ruby lr.rb groucho harpo chico

# ARGV.each do |filename|
#
#   file = File.new filename
#   file.each_line do |line|
#     puts line
#   end
#
# end

# ARGF is an array of the lines of each file mentioned in ARGV
ARGF.each do |line|
  puts line if line =~ /Fred/
end
