json.array!(@cats) do |cat|
  json.extract! cat, :name, :color, :weight
  json.url cat_url(cat, format: :json)
end
