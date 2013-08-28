SSTaskTracker::Application.routes.draw do
  resources :projects

  get "app/main"

  root 'app#main'
end
