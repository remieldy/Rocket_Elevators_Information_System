Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'
  get 'index' => 'pages#index'
  get 'RocketElevatorsWebpage_Residential.html' => 'pages#RocketElevatorsWebpage_Residential.html'
  get 'RocketElevatorsWebpage_Corporate.html' => 'pages#RocketElevatorsWebpage_Corporate.html'
  get 'RocketElevatorsWebpage_submission.html' => 'pages#RocketElevatorsWebpage_submission.html'
  get 'login.html' => 'pages#login.html'

end
