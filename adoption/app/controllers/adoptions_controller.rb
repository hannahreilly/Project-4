class AdoptionsController < ApplicationController

  before_action :set_adoption, only: [:show, :update, :destroy]

  # GET /dogs
  def index
    @adoptions = current_user.adoptions
    json_response(@adoptions)
  end

  # POST /dogs
  def create
    @adoption = current_user.adoptions.create!(adoption_params)
    json_response(@adoption, :created)
  end

  # GET /dogs/:id
  def show
    json_response(@adoption)
  end

  # PUT /dogs/:id
  def update
    @adoption.update(adoption_params)
    json_response(status: 'SUCCESS', message: 'updated the adoption', data: @adoption.title)
  end

  # DELETE /dogs/:id
  def destroy
    @adoption.destroy
    json_response(status: 'SUCCESS', message: 'deleted the adoption', data: @adoption.title)

  end

  private

  def adoptions_params
    # whitelist params
    params.permit(:title, :created_by)
  end

  def set_adoption
    @adoption = Adoption.find(params[:id])
  end

end
