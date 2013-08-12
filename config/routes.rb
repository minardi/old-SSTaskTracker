SSTaskTracker::Application.routes.draw do
  get "app/main"

  root 'app#main'
end
