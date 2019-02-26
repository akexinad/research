def countdown_iterative(n = 10) # initial value
  while n >= 0 # you need an n condition
    puts n
    n -= 1 # Mutation: You need to move towards the end condition
    sleep 1
  end

  puts "Blast Off!!!"
end

require 'pry'
binding.pry
