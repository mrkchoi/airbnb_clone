# == Schema Information
#
# Table name: listings
#
#  id                   :bigint           not null, primary key
#  title                :string
#  description          :text
#  num_guests           :integer
#  type                 :string
#  num_beds             :integer
#  num_baths            :integer
#  price                :integer
#  self_check_in        :boolean          default(TRUE)
#  parking              :boolean          default(TRUE)
#  kitchen              :boolean          default(TRUE)
#  washer               :boolean          default(TRUE)
#  dryer                :boolean          default(TRUE)
#  dishwasher           :boolean          default(TRUE)
#  wifi                 :boolean          default(TRUE)
#  tv                   :boolean          default(TRUE)
#  bathroom_essentials  :boolean          default(TRUE)
#  bedroom_comforts     :boolean          default(TRUE)
#  coffee_maker         :boolean          default(TRUE)
#  hair_dryer           :boolean          default(TRUE)
#  location             :string
#  location_description :text
#  lat                  :float
#  long                 :float
#  host_id              :integer
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class Listing < ApplicationRecord
  # validates :title, :description, :num_guests, :type, :num_beds, :num_baths, :price, :self_check_in, :parking, :kitchen, :washer, :dryer, :dishwasher, :wifi, :tv, :bathroom_essentials, :bedroom_comforts, :coffee_maker, :hair_dryer, :location, :location_description, :lat, :long, :host_id, presence: true

  has_many_attached :photos
end
