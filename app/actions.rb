get '/' do
  erb :index
end

get '/contacts' do
  content_type :json
  @contacts = Contact.all.to_json
end

get '/contacts/:id' do
  content_type :json
  @contact = Contact.find(params[:id]).to_json
end

post '/contacts' do
  @contact = Contact.create!(
    name: params[:name],
    email: params[:email],
    city: params[:city]
  )
end

delete '/contacts/:id' do
  content_type :json
  @contact = Contact.find(params[:id])
  @contact.destroy

  { success: true}.to_json
end