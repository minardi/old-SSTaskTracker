json.array!(@tables) do |table|
  json.extract! table, :number, :date, :random, :id
  json.url table_url(table, format: :json)
end
