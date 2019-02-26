def factorial_recursive num
  if num > 1
    num * factorial_recursive(num - 1) # moving closer the base case
  else
    1 # base case
  end
end

require 'pry'
binding.pry
