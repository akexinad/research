def factorial_iterative num
  result = 1
  while num > 1 # Base case
    result = result * num
    num -= 1 # Moving towards the base using mutation
  end

  result
end

require 'pry'
binding.pry
