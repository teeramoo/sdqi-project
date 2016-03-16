class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :role, foreign_key: :role_id

  has_many :comments, dependent: :destroy
  has_many :votes, dependent: :destroy
  has_many :upvoted_items, through: :votes, source: :item

  before_save :assign_role

  def assign_role
    self.role = Role.find_by_name("Member") if self.role.nil?
  end

  def admin?
    self.role.name == "Admin" if !self.role.blank?
  end

  def member?
    self.role.name == "Member" if !self.role.blank?
  end

  def vendor?
    self.role.name == "Vendor" if !self.role.blank?
  end

  def online?
    updated_at > 5.minutes.ago
  end
  
end
