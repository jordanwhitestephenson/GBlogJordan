var commentCount = 0;
var editCount = 0;
var myLocation = decodeURIComponent(window.location.search).split("=")[1]

$(document).ready(function(knex, Promise) {

    $.get('/blogroute', function(data) {
        for (var i = 0; i < data.length; i++) {
            commentCount++;
            editCount++;
            $('.post-preview').append(
                `<div>
                <h2 class="post-title">${data[i].title} ${data[i].id} </h2>
                <p class="post-meta"> ${data[i].body} </p>
                <h6 class="post-meta"> Posted On : ${data[i].created_at} </h6>

                <button type="button" class ="edit">
                <a id=${data[i].id}> Edit </a>
                </button>

                <button type="button" class ="comment">
                <a id=${data[i].id}> Comment </a>
                </button>

                <button type="button" class ="deleteButton">
                <a id=${data[i].id}> Delete </a>
                </button>
            </div>`
            );
        }

        $('.comment').on('click', function(e) {
            console.log(this);
            window.location = `/comment.html?id=${$(this).find('a').attr('id')}`

        });

        $('#submitButtonID').on('click', function(e) {
            e.preventDefault();
            var myLocation = decodeURIComponent(window.location.search).split("=")[1];
            myNewComment = {
                blog_id: myLocation,
                body: $('#messageComment').val(),
                // username_id: 5
            };
            console.log(myNewComment);

            $.ajax({
                    method: "POST",
                    url: "/commentroute",
                    data: JSON.stringify(myNewComment),
                    contentType: "application/json"
                })
                .then(response => {
                    console.log(myNewComment);
                });
        });

        // <---DELETE BLOG POST-->
        $('.deleteButton').on('click', function(e) {
            e.preventDefault();
            var deleteID = $(this).find('a').attr('id');
            console.log(deleteID)

            $.ajax({
                    method: "DELETE",
                    url: `/blogroute/${deleteID}`,
                    contentType: "application/json"
                })
                .then(response => {
                    console.log('sucess');
                });
        });
    });
    // $.get('/commentroute', function(data) {
    //   var commentID = $(this).find('a').attr('id')
    //   var myIndex = myLocation -1
    //   console.log(data)
    //   // console.log(data[myIndex].body)
    //   if(data.blog_id === data.id){
    //     $('#commentIDPara').append('<p>' + data[myIndex].body + '</p>' + 'ojaoiodfan' + '<p>');
    //   }
    //
    // });
});
