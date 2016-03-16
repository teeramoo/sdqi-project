Rails.application.routes.draw do

  devise_for :users
  resources :votes
  resources :comments
  resources :items
  resources :categories
  resources :roles
  get 'menu/index'
  get 'menu/sendfeedback'
  get 'menu/makereservations'


  resources :users
  root :to => 'menu#index'
  get 'assignments/contents'
  get 'basics/plsql_solution'
  get 'basics/quotations'
  get 'basics/ps2_index'
  get 'basics/ps3_index'
  get 'basics/ps4_index'
  get 'basics/ps5_index'
  get 'basics/users'
  get 'basics/UML_general'
  get 'basics/UML_admin'
  get 'assignments/index'
  get 'menu/index'
  post 'basics/create'
  post 'users/ban'
  get 'basics/categories'
  get 'basics/search_function'
  post 'basics/kill_values'
  post 'basics/clear_cookies'
  post 'basics/export_xml'
  post 'basics/export_json'
  get  'basics/import_server'
  get 'basics/export_xml'
  get 'nokogiri/index'
  get 'nokogiri/parse'
  post 'items/upvote'
 
  resources :assignments
  resources :assignments
  resources :assignments
  resources :assignments  do 
  resources :problems
	end
  resources :divide
  get 'result' => 'divide#result', as: 'result'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
