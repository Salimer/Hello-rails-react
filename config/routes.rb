Rails.application.routes.draw do
  get 'root/index'
  get '/random_greeting', to: 'greetings#random'

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root 'root#index'
  # root "articles#index"
end
