def fibonacci_iterative n
  a = 1
  b = 1
  while n > 2 # Base case
    a, b = b, a + b # an atomic operation: parallel assignment
    n -= 1 # Move towards the base case (mutation)
  end

  b # this is the nth fibonacci value
end

require 'pry'
binding.pry
