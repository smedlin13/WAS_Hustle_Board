class Mileage < ApplicationRecord
  belongs_to :user

  validates :miles, :date, presence: true
end
