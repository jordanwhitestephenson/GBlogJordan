var myLocation = decodeURIComponent(window.location.search).split("=")[1];
var locationIndex = myLocation -1;

$(document).ready(function() {
    $.get('/blogroute', function(data) {
      console.log(data);
        for (var j = 0; j < data.length; j++) {
          console.log('IN THE for loop');
            if (myLocation == data[j].id) {
              console.log('in if statement');
                $('.page-heading').append('<div>' +  '<h1>' + data[j].title + '</h1>' +  '</div>');
                $('#blogAuthor').append('<p>' +  'Written By : ' +  data[j].name + '</p>')
                $('#blogBody').append( '<p>' + data[0].body + '</p>');

            }
        }
    });
});
