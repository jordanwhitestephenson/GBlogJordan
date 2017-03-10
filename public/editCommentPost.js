$(document).ready(function() {

    var myLocation = decodeURIComponent(window.location.search).split("=")[1]

    $.ajax({
        method: 'GET',
        url: `/commentroute/${myLocation}`,
        contentType: "application/json",
        data: JSON.stringify()
    }).then(function(success) {
        console.log(success)
        $('#emailComment').val(success.username_email)
        $('#messageComment').val(success.body)
    });


    $('#submitEditComment').on('click', function(event) {
        event.preventDefault();
        myEdittedComment = {
            id: `${myLocation}`,
            email: $('#emailComment').val(),
            body: $('#messageComment').val()
        };
        console.log(myEdittedComment)
        $.ajax({
                method: "PUT",
                url: `/commentroute/${myLocation}`,
                data: JSON.stringify(myEdittedComment),
                contentType: "application/json"
            })
            .then(response => {
                window.location = 'index.html';
            });
    });
})
