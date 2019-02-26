a = Array.new(1000) { rand(1..1000) }

def largest(integers) {
  max = -1.0 / 0.0

  integers.each do |n|
    max = n if n > max
  end

  max
}

puts a.max
puts largest(a)
