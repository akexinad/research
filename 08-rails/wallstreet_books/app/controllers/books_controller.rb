class BooksController < ApplicationController
  def form
    render :form
  end

  def info
    @title = params[:title]
    url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title }" # title is provided by user
    info = HTTParty.get url
    @cover = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
    render :info
  end
end
