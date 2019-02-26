require 'pry'

class Actor
  def award_speech
    "I would like to thank my parents and my agent. We did it baby"
  end

  def deny_allegations
    "I deny that and I was drunk and I don't remember"
  end
end


class MarxBrother < Actor
  attr_accessor :name, :instrument, :vice # This is called a Macro and it writes the getter and setter defined "name"
  # attr_writer => # This will only SET
  # attr_reader => # This will only GET

  def initialize(n='', i='', v='') #Variadic via default parameters
    @name = n
    @instrument = i
    @vice = v
  end

  def perform
    "My name is #{ @name } and I play the #{ @instrument }"
  end

  # # Getters
  # def name()
  #   # return the name
  #   @name
  # end
  #
  # # Setters
  # def name=(n)
  #   @name = n
  # end

  # Getter
  # def instrument
  #   @instrument
  # end
  #
  # def instrument=(i)
  #   @instrument = i
  # end
  #
  # # Getter
  # def vice
  #   @vice
  # end
  #
  # def vice=(v)
  #   @vice = v
  # end


end

class Stooge < Actor
  def terrible?
    true
  end
end


# groucho = MarxBrother.new('Groucho', 'Guitar', 'Cigars') # This creates an instance object

binding.pry
