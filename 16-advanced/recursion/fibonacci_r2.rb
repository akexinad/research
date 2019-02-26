# HOMEWORK: Write a fast recursive Fibonacci function

# It's not that recursion is slow. It's the way that it's written that makes it slow.

# def fibonacci_recursive(num)
#   if num == 1 || num == 2
#     1 + num
#   else
#     (num - 1) + fibonacci_recursive(num - 2)
#   end
# end


# def fibonacci(fib_index, first_occurrence=0, second_occurence=1)
#   if fib_index == 0
#     0
#   elsif fib_index == 1
#     second_occurence
#   else
#     puts "first_occurrence: #{first_occurrence}"
#     puts "second_occurence: #{second_occurence}"
#     sleep 0.25
#     fibonacci(fib_index - 1, second_occurence, (first_occurrence + second_occurence))
#   end
# end

def fibonacci(fib_index, first_occurrence = 0, second_occurence = 1)
  if fib_index == 0
    0
  elsif fib_index == 1
    second_occurence
  else
    fibonacci(fib_index - 1, second_occurence, (first_occurrence + second_occurence))
  end
end


require 'pry'
binding.pry
