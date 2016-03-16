class Assignment < ActiveRecord::Base
	has_many :problems, dependent: :destroy
end
