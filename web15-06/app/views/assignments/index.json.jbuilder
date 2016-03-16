json.array!(@assignments) do |assignment|
  json.extract! assignment, :id, :name, :url
  json.url assignment_url(assignment, format: :json)
end
