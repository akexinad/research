class PagesController < ApplicationController

  def home
  end

  def hamldemo
    @number = Random.rand(100)
  end

end
