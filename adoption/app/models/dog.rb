class Dog < ApplicationRecord
  has_one :adopt
  has_one :user, through :adopt
end
