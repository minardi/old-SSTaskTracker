json.array!(@stories) do |story|
  json.extract! story, :stage, :text
  json.url story_url(story, format: :json)
end
