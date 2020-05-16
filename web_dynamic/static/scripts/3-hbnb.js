$(document).ready(function () {
  let amenities = {};
  $('input:checkbox').change(function () {
    if ( $(this).is(':checked') ) {
      amenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenities[$(this).data('id')];
    }
    let tex = "";
    if (!(Object.values(amenities).length)) {
      $('.amenities h4').replaceWith('<h4>&nbsp;</h4>');
    } else {
      tex = Object.values(amenities).join(', ');
      $('.amenities h4').html(tex);
    }
  });

  let status = () => {
    $.ajax({
      type: "GET",
      url: "http://0.0.0.0:5001/api/v1/status/",
      success: (response) => {
        $('DIV#api_status').addClass('available');
      }
    }).fail(function (jqXHR, textStatus, error) {
      $('DIV#api_status').removeClass('available');
      $('DIV#api_status').css('background-color', '#CCCCCC');
    });
  }
  status();
});
