SSTaskTracker::Application.routes.draw do
  resources :tasks

  get "app/main"

  root 'app#main'
end
