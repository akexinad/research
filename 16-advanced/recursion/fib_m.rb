def fib_m(n)

  # if @results.nil?
  #   @results = {}
  # end

  # OR

  # @results = @results || {}

  # OR

  @results ||= {}

  if @results[n]
    @results[n]
  elsif n == 1 || n == 2
    1
  else
    answer = fib_m(n - 1) + fib_m(n - 2)
    @results[n] = answer
    answer
  end

end

require'pry'
binding.pry
