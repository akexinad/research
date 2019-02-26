def fib_r(n, a=1, b=1)
  if n == 1 || n == 2
    b
  else
    fib_r(n - 1, b, a + b)
  end
end

require 'pry'
binding.pry
