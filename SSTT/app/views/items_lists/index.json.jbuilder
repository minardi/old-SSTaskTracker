json.array!(@items_lists) do |items_list|
  json.extract! items_list, :number, :date, :random, :id
  json.url items_list_url(items_list, format: :json)
end
