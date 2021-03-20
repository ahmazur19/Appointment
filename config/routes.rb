Rails.application.routes.draw do
  
  resources :doctors do 
    resources :appointments
  end
  resources :patients
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
    get "/api_test", to:'static#api_test'
  end
end
