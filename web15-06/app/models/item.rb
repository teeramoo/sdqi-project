class Item < ActiveRecord::Base

  belongs_to :category
  has_many :comments, dependent: :destroy
  has_many :votes, dependent: :destroy

  has_many :upvoted_users, through: :votes, source: :user

  validates_presence_of :name,:price, :description
  validates_uniqueness_of :name


end
