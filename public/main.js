var commentCount = 0;
var editCount = 0;
var myLocation = decodeURIComponent(window.location.search).split("=")[1];




$(document).ready(function(knex, moment) {
    $.get('/blogroute', function(data) {
        for (var i = 0; i < data.length; i++) {
          var time = data[i].created_at;
          var splicedTime= time.replace('T', ' ').slice(0, 10);
            $('.post-preview').append(
                `<div>
                <h2 class="post-title"><a href ="/blogView.html?id=${data[i].id}">
                 ${data[i].title} ${data[i].id} </h2></div><div>
                <p class="post-meta" id = "shortsentence"> ${data[i].body} </p>

                <h6 class="post-meta"> Posted On : ${(splicedTime)} </h6>

                <button type="button" class ="editBlog" id=${data[i].id}>
                <a id=${data[i].id}> Edit </a>
                </button>

                <button type="button" class ="comment">
                <a id=${data[i].id}> Comment </a>
                </button>

                <button type="button" class ="deleteButton">
                <a id=${data[i].id}> Delete </a>
                </button>
            </div>`);
        }

        // <---SUBMIT COMMENT-->
        $('#submitButtonID').on('click', function(e) {
            e.preventDefault();
            console.log('what up');
            var myLocation = decodeURIComponent(window.location.search).split("=")[1];
            myNewComment = {
                blog_id: myLocation,
                body: $('#messageComment').val(),
                username_email: $('#emailComment').val()
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
            console.log(deleteID);
            $.ajax({
                    method: "DELETE",
                    url: `/blogroute/${deleteID}`,
                    contentType: "application/json"
                })
                .then(response => {
                    window.location.reload(true);
                });
        });

        //--MOVE TO COMMENT PAGE--//
        $('.comment').on('click', function(e) {
            e.preventDefault();
            window.location = `/comment.html?id=${$(this).find('a').attr('id')}`
        });
        //--MOVE TO EDIT PAGE--//
        $('.editBlog').on('click', function(e) {
            e.preventDefault();
            var id = $(this).attr('id');
            window.location = `/blogedit.html?id=${id}`
        });
    });
  });
