# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do

end

# $.ajax('/localhost/contacts, "json" )