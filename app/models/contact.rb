class Contact < ActiveRecord::Base

  def initialize(name, email, city)
    @name = name
    @email = email
    @city = city
  end

end