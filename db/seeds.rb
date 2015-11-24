30.times do
  Contact.create!(
    name: Faker::Name.name,
    email: Faker::Internet.email,
    city: Faker::Address.city
    )
end