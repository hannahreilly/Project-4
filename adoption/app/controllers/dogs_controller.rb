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
      @dog = current_user.dogs.create!(dog_params)
      json_response(@dog, :created)
    end

    # GET /dogs/:id
    def show
      json_response(@dog)
    end

    # PUT /dogs/:id
    def update
      @dog.update(dog_params)
      json_response(status: 'SUCCESS', message: 'updated the dog', data: @dog.title)
    end

    # DELETE /dogs/:id
    def destroy
      @dog.destroy
      json_response(status: 'SUCCESS', message: 'deleted the dog', data: @dog.title)

    end

    private

    def dogs_params
      # whitelist params
      params.permit(:title, :created_by)
    end

    def set_dog
      @dog = Dog.find(params[:id])
    end

end
