$(document).ready(function() {


    // <--ADD BLOG POST-->

    $('#blogSubmitButton').on('click', function(e) {
        e.preventDefault();
        var myLocation = decodeURIComponent(window.location.search).split("=")[1];
        myNewPost = {
            name: $('#nameBlog').val(),
            title: $('#titleBlog').val(),
            body: $('#bodyBlog').val(),
            email: $('#bodyEmail').val()
        };
        console.log(myNewPost);

        $.ajax({
                method: "POST",
                url: "/blogroute",
                data: JSON.stringify(myNewPost),
                contentType: "application/json"
            })
            .then(response => {
                console.log(myNewPost);
            });
    });

    // <--DELETE--->

});
