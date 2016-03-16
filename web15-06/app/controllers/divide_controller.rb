class DivideController < ApplicationController
	def Index
	end

	def result
		begin
		@result = 1/0
		rescue ZeroDivisionError => e
		@result = e.backtrace
		end
	end
end
