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

});
