$(document).ready(function() {
  
  $('#load-contacts').on('click', function() {
    $.ajax({
      url: '/contacts',
      method: 'GET',
      success: function(data) {
        console.log(data);
      },
      datatype: 'json'
    });
  });

  $('#find-contact').submit(function(event) {
    var data = $('#search-id').val();
    event.preventDefault();
    $.ajax({
      url: `contacts/${data}`,
      method: 'GET',
      success: function(data) {
        console.log("running", data);
        $('#search-result-name').append(data["name"]);
        $('#search-result-email').append(data["email"]);
        $('#search-result-city').append(data["city"]);
      },
      datatype: 'json'
    });
  });

});

