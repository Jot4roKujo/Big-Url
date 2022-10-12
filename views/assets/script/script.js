// Attach a submit handler to the form
$( "#myForm" ).submit(function( event ) {
    // Stop form from submitting normally
    event.preventDefault();

    let url = '/api/short';
    let origUrl = $("#origUrl").val();

    // Send the data
    $("#origUrl").empty().append("");
    var posting = $.post( url, { origUrl }, function( data ) {
      $( "#short" ).empty().append( data.shortUrl );
      $( "#short" ).attr("href", () => {
        return data.shortUrl;
      })
      $( "#click" ).empty().append( "It's been clicked: " + data.clicks + " times!" );
      $( "#id" ).empty().append(data._id);
      $( "#results" ).removeClass("visually-hidden");
    } );
  });
  
  $( "#delete" ).click(function() {
    let url = '/del/short';
    let _id = $('#id').text();
    var posting = $.post(url, { _id });
    swal("", "Your Short URL has been deleted!", "success")
    .then((reload) => {
      if (reload) {
          location.reload();
      } else {
          location.reload();
      }
    });      
  });
