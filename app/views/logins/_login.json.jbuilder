json.extract! login, :id, :id_login, :email, :password, :created_at, :updated_at
json.url login_url(login, format: :json)
