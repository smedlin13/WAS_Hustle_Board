class Api::MileagesController < ApplicationController
  before_action :set_mileage, only: [:show, :update, :destroy]
  before_action :authenticate_user!
  def index
    render json: current_user.mileages
  end
  
  def show
    render json: @mileage
  end

  def create
    @mileage = current_user.mileages.new(mileage_params)
    if @mileage.save
      render json: @mileage
    else 
      render json: { errors: @mileage.errors } , status: :unprocessable_entity
    end
  end

  def update
    if @mileage.update(mileage_params)
      render json: @mileage
    else
      render json: { errors: @mileage.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @mileage.destroy
    render json: { message: 'Mileage entry deleted'}
  end

  private
  def mileage_params
    params.require(:mileage).permit(:miles, :date)
  end

  def set_mileage
    @mileage = current_user.mileages.find(params[:id])
  end

end
