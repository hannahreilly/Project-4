class User < ApplicationRecord
  has_many :adopts, dependent: :destroy
  has_many :pets, through: :adopts

  has_secure_password

  validates_presence_of :username, :name, :location
  validates_uniqueness_of :username, :case_sensitive => false
end
