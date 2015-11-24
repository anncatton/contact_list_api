# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  Contact.all.to_json
end

post '/contacts' do

end
# $.ajax('/localhost/contacts, "json" )