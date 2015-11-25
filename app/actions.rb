# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  @contacts = Contact.all.to_json
end

post '/contacts' do

end

get '/contacts/:id' do
  content_type :json
  @contact = Contact.find(params[:id]).to_json
end

# get 'contacts/new' do

# end

# delete 'contact/:id' do

# end