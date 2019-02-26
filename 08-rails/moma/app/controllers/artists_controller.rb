class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
  end

  def show
    @artist = Artist.find params[:id]
    render :show # rememebr that this happend implicitly
  end

  def new
    @artist = Artist.new
  end

  def create
    artist = Artist.create artist_params
    redirect_to artist_path(artist.id)
    # OR redirect_to artist
  end

  def edit
    @artist = Artist.find params[:id]
  end

  def update
    artist = Artist.find params[:id]
    artist.update artist_params
    redirect_to artist
    # OR redirect_to artist_path(artist.id)
  end

  def destroy
    artist = Artist.find params[:id]
    artist.destroy
    redirect_to artists_path
  end

  private
  # this is called 'strong params'
  def artist_params
    # Here we create a white list of parameters which are permitted
    params.require(:artist).permit(:name, :nationality, :birth, :period, :image)
  end
end
