class PagesController < ApplicationController

  # A Method inside of a controller is called an action

  def home
    # if you don't say what to render...
    # It will implicitly render a view with the name of 'home'. But you have to follow the convention.
  end

  def numbers
    @amount = 108234.5654
    @large_number = 23567887345670000000000988
    @phone = 2125551212
  end

  def text
    @numbers = (1..20).to_a
    @friend_count = 1
    @enemy_count = 2
    @story = "A very very very very very very very very long time ago in a galaxy far far far far far far far far away" * 80
  end

  def assets
  end

  def url
  end

end
