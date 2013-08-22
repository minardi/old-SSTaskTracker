SSTaskTracker::Application.routes.draw do
  resources :stories

  resources :tasks

  get "app/main"

  root 'app#main'
end
