class Comment < ActiveRecord::Base
  belongs_to :user
  belongs_to :item

  validates_presence_of :comment_text
  validates_length_of :comment_text, minimum: 10, maximum: 100
end
