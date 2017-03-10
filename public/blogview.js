var myLocation = decodeURIComponent(window.location.search).split("=")[1];
var locationIndex = myLocation -1;

$(document).ready(function() {
    $.get('/blogroute', function(data) {
        for (var j = 0; j < data.length; j++) {
          var time = data[j].created_at;
          var splicedTime= time.replace('T', ' ').slice(0, 10);
            if (myLocation == data[j].id) {
              console.log('in if statement');
                $('.page-heading').append('<div>' +  '<h1>' + data[j].title + '</h1>' +  '</div>');
                $('#blogAuthor').append('<p>' +  'Written By : ' +  data[j].name + '</p>' + '<p>' + ' Written On : ' + splicedTime + '</p>')
                $('#blogBody').append( '<p>' + data[0].body + '</p>');

            }
        }
    });
});
