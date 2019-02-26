def countdown_recursive(n = 10)
  if n < 0 # Base Case: End Condition
    puts "Blast Off!!!"
  else
    puts n
    sleep 1
    countdown_recursive(n - 1) # Move towards the Base Case without mutation
  end
end

require 'pry'
binding.pry
