class PagesController < ApplicationController
  def hello
    render :hello
    # 0.5 render :plain => "ciao mondo"
  end

  def about
    render :about
  end

  def faq
    render :faq
  end

  def funny
    render :funny
  end
end

# 1 PagesController inherits from the controller in the same folder. i.e. the application_controller.rb file

# 2 Now mkdir apps/views/pages
# 3 Then touch apps/views/pages/hello.html.erb

# Repeat for the about page
