class WorksController < ApplicationController
  def index
    @works = Work.all
  end

  def show
    @work = Work.find params[:id]
  end

  def new
    @work = Work.new
  end

  def create
    work = Work.create work_params
    redirect_to work_path(work.id)
    # OR
    # redirect_to work
  end

  def edit
    @work = Work.find params[:id]
  end

  def update
    work = Work.find params[:id]
    work.update work_params
    # redirect_to work_path(work.id)
    # OR
    redirect_to work
  end

  def destroy
    work = Work.find params[:id]
    work.destroy
    redirect_to works_path
  end

  private
  def work_params
    params.require(:work).permit(:title, :year, :medium, :style, :image, :artist_id)
    # PLEASE REMEMBER YOU HAVE TO PERMIT THE ARTIST ID WHEN YOU COMBINE THE DATA BASES OR ELSE IT WONT LOAD AND IF YOU CHECK YOUR LOG IT WILL SHOW THAT YOU DID NOT PERMIT ID TO BE ADDED TO THE DATABASE. THIS IS A FUNCTION TO STOP INJECTION ATTACKS.
  end
end
