class ProblemsController < ApplicationController
  load_and_authorize_resource

	def create 
	@assignment = Assignment.find(params[:assignment_id])
	@problem = @assignment.problems.create(problemid: params[:problem][:problemid],name: params[:problem][:name])
	redirect_to assignment_path(@assignment)
	end
end
