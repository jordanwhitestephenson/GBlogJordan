$(document).ready(function() {

 var myLocation = decodeURIComponent(window.location.search).split("=")[1]
  console.log(myLocation)

    $.ajax({
            method: 'GET',
            url: `/blogroute/${myLocation}`,
            contentType: "application/json",
            data: JSON.stringify()
          }).then(function(success) {
            console.log(success)
              $('#nameBlog').val(success.name)
              $('#titleBlog').val(success.title)
              $('#bodyBlog').val(success.body)
            });
        

            $('#blogEditButton').on('click', function(event) {
                event.preventDefault();
                myEdittedBlogPost = {
                    id: `${myLocation}`,
                    name: $('#nameBlog').val(),
                    title: $('#titleBlog').val(),
                    body: $('#bodyBlog').val(),
                };
                $.ajax({
                        method: "PUT",
                        url: `/blogroute/${myLocation}`,
                        data: JSON.stringify(myEdittedBlogPost),
                        contentType: "application/json"
                    })
                    .then(response => {
                        window.location = "/index.html";
                    });
            });
          })
