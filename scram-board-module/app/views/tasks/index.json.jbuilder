json.array!(@tasks) do |task|
  json.extract! task, :id, :x, :y, :text
  json.url task_url(task, format: :json)
end
