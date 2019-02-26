require 'pry'
# Array and Hash access
# A. Given the following data structure:
# a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?

a = ["Anil", "Erik", "Jonathan"]

a[1]
a << "danny"

# B. Given the following data structure:

h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

# How would you return the string "One"?
puts h[1]

# How would you return the string "Two"?
puts h[:two]

# How would you return the number 2?
puts h["two"]

# How would you add {3 => "Three"} to the hash?
h[ 3 ] = "Three"

# How would you add {:four => 4} to the hash?

h[:four] = 4

# JOEL'S ANSWER

h.merge({:four => 4})

# C. Given the following data structure:

is = {true => "It's true!", false => "It's false"}

# What is the return value of is[2 + 2 == 4]?

"It's true"

# What is the return value of is["Erik" == "Jonathan"]?

"It's false"

# What is the return value of is[9 > 10]?

"It's false"

# What is the return value of is[0]?

nil

# What is the return value of is["Erik"]?

nil



# D. Given the following data structure:

users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?

users["Jonathan"][:twitter]

# How would you add the number 7 to Erik's favorite numbers?

users["Erik"][:favorite_numbers] << 7

# How would you add yourself to the users hash?

users["danny"] = {:twitter => "akexinad", favorite_numbers => [4, 50, 12, 3]}

# How would you return the array of Erik's favorite numbers?

erik_array = users["Erik"][:favorite_numbers]

# How would you return the smallest of Erik's favorite numbers?

erik_array.sort.first

# JOEL'S ANSWER

erik_array = users["Erik"][:favorite_numbers].min

# How would you return an array of Anil's favorite numbers that are also even?

anil_array = users["Anil"][:favorite_numbers]
evens = anil_array.select { |n| n.even? }

# JOEL'S ANSWER

users["Anil"][:favorite_numbers].select{ |n| n.even? }

# JOEL'S ANSWER

users["Anil"][:favorite_numbers].reject{ |n| n.odd? }

# How would you return an array of the favorite numbers common to all users?

anil_array = users["Anil"][:favorite_numbers]
erik_array = users["Erik"][:favorite_numbers]
jonathan_array = users["Jonathan"][:favorite_numbers]

common_fav_numbers = anil_array & erik_array & jonathan_array

# JOEL'S ANSWER

users.map { |name, user| user[:favorite_numbers] }.inject(&:&)

# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?

all_sorted_no_duplicates = (anil_array | erik_array | jonathan_array).sort

# JOEL'S ANSWER

users.map { |name, user| user[:favorite_numbers] }.flatten.sort.uniq

binding.pry
