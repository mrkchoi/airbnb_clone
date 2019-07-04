json.array! @listings do |listing|
  json.partial! 'listing', listing: listing
end
