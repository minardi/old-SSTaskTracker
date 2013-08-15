SSTaskTracker::Application.routes.draw do
  resources :items_lists

  get "app/main"

  root 'app#main'
end
