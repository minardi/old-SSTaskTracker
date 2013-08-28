json.array!(@projects) do |project|
  json.extract! project, :title, :created_at, :id
  json.url project_url(project, format: :json)
end
