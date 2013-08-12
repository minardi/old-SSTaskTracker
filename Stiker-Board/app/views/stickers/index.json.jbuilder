json.array!(@stickers) do |sticker|
  json.extract! sticker, :x, :y, :id
  json.url sticker_url(sticker, format: :json)
end
