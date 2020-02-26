class DogsController < ApplicationController

  skip_before_action :authorize_request
    before_action :set_dog, only: [:show, :update, :destroy]

    # GET /dogs
    def index
      @dogs = Dog.all
      json_response(@dogs)
    end

    # POST /dogs
    def create
      #@dog = current_user.dogs.create!(dogs_params)
      #json_response(@dog, :created)
      @dog= Dog.new(dog_params)
      #if current_user.dogs << @dog
        render json: @dog, status: :created, location: @dog
      #else
      #  render json: @dog.errors, status: :unprocessable_entity
      #end
    end

    # GET /dogs/:id
    def show
      json_response(@dog)
    end

    # PUT /dogs/:id
    def update
      @dog.update(dog_params)
      json_response(status: 'SUCCESS', message: 'updated the dog', data: @dog.name)
    end

    # DELETE /dogs/:id
    def destroy
      @dog.destroy
      json_response(status: 'SUCCESS', message: 'deleted the dog', data: @dog.name)

    end

    private

    def dog_params
      # whitelist params
      params.require(:dog).permit(:name, :location, :breed, :age)
    end

    def set_dog
      @dog = Dog.find(params[:id])
    end

end
