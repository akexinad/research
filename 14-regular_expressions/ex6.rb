# Extra credit exercise: write a program that prints out any input line that mentions both wilma and fred.

ARGF.each do |line|
  # puts line if line =~ /(fred.*wilma)|(wilma.*fred)/
  # OR
  puts line if line =~ /(fred)/ && line =~ /(wilma)/
end
