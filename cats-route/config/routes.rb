SSTaskTracker::Application.routes.draw do
  get "app/main"
  #get 'app[/:data]' => 'app#index'
  root 'app#main'
end
