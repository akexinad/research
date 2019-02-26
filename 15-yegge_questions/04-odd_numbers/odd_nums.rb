# def odd_nums
#   num = 0
#   while num < 100
#     if num % 2 != 0
#       puts num
#     end
#   num += 1
#   end
# end
#
# odd_nums

def odd_nums_r (bound=99, n=3)
  if n <= bound
    puts n
    odd_nums_r(bound, n + 1)
  end
end

odd_nums_r()

require'pry'
binding.pry
