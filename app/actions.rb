# Homepage (Root path)
get '/' do
  @contacts = Contact.all
  erb :index
end

get '/contacts' do
  content_type :json
  Contact.all.to_json
end

# $.ajax('/localhost/contacts, "json" )