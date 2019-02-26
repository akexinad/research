class DashboardController < ApplicationController
  def brother
    brother = %w{ Fellini Benigni Germi Pasolini }.sample
    render :plain => brother
  end

  def time
    render :plain => Time.now
  end

  def uptime
    uptime = `uptime` # Backticks will not work on heroku
    render :plain => uptime
  end

  def info
    brother = %w{ Fellini Benigni Germi Pasolini }.sample
    time = Time.now
    uptime = `uptime` # Backticks will not work on heroku

    info = {
      :brother => brother,
      :time => time,
      :uptime => uptime,
      :fortune => `fortune`
    }

    render :json => info
  end
end
