$(document).ready(function() {
  
  // $('#load-contacts').on('click', function() {
  //   $.ajax({
  //     url: '/contacts',
  //     method: 'GET',
  //     success: function(data) {
  //       // console.log(data);
  //       $data = $(data);
  //       $data.each(function(index, value) {
  //       $('#search-result-name').append(data.name);
  //       $('#search-result-email').append(data.email);
  //       $('#search-result-city').append(data.city);      
  //       });
  //     },
  //     datatype: 'json'
  //   });
  // });



  $('#load-contacts').on('click', function() {
    var contactTemplate = _.template($('#contact-template').html());

    $.ajax({url: '/contacts'}).then(function(data) { // defaults to GET
      var output = '';
      data.forEach(function(contact) {
        output += contactTemplate({
          name: contact.name,
          email: contact.email,
          city: contact.city
        });
      $('#search-result').html(output);
      });
    });

  });

    // $.ajax(request).then(function(data) {
    //   var output = ''

    //   data.result.forEach(function(beer) {
    //     output += beerTemplate({
    //       name: beer.name,
    //       breweryName: beer.producer_name,
    //       origin: beer.origin,
    //       tastingNotes: beer.tasting_note,
    //       style: beer.style + ' / ' + beer.secondary_category,
    //       imageURL: beer.image_url
    //     });
    //   });

  $('#find-contact').submit(function(event) {
    event.preventDefault();
    var data = $('#search-id').val();
    $.ajax({
      url: `contacts/${data}`,
      method: 'GET',
      success: function(data) {
        console.log(data);
        $('#search-result-name').append(data.name);
        $('#search-result-email').append(data.email);
        $('#search-result-city').append(data.city);
      },
      datatype: 'json'
    });
  });

  $('#add-contact').submit(function(event) {
    event.preventDefault();

    var contactName = $('#contact-name').val();
    var contactEmail = $('#contact-email').val();
    var contactCity = $('#contact-city').val();
    var data = { name: contactName,
                email: contactEmail,
                city: contactCity }

    $.ajax({
      url: '/contacts',
      method: 'POST',
      data: data,
      success: function() {
        console.log("You've successfully saved a new contact.");
      }
    });
  });

  $('#delete-contact').submit(function(event) {
    event.preventDefault();

    var data = $('#delete-id').val();
    
    $.ajax({
      url: 'contacts/' + data,
      method: 'DELETE',
      success: function() {
        console.log("It's been deleted!");
      }
    });
  });
});

