# == Schema Information
#
# Table name: artists
#
#  id         :bigint(8)        not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Artist < ApplicationRecord
  has_many :songs
  # artist can look into genre by going through songs
  # i.e. you can skip songs and find and artist's genres with @artist.genre
  has_many :genres, :through => :songs
  has_many :albums, :through => :songs
end
