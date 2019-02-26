def fibonacci_recursive num
  if num == 1 || num == 2
    1
  else
    fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2)
  end
end

require 'pry'
binding.pry
