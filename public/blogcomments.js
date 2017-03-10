

$(document).ready(function() {
    var myLocation = decodeURIComponent(window.location.search).split("=")[1];
    var locationIndex = myLocation - 1


    $.get('/commentroute', function(data) {

        for (k = 0; k < data.length; k++) {
            var time = data[k].created_at;
            var splicedTime= time.replace('T', ' ').slice(0, 10);
            console.log(splicedTime);

            if (myLocation == data[k].blog_id) {
                console.log(data[k].blog_id);
                $('#commentIDPara').append(`<div><p> ${data[k].body}</p> <p> Posted On :  ${splicedTime} </p>

          <button type="button" class ="edit" id = "editCommentButton">
          <a id=${data[k].id}> Edit </a>
          </button>
          <button type="button" class ="deleteCommentButton">
          <a id=${data[k].id}> Delete </a>
          </button><div>`);

                $('#currentBlogComments').append(`<div><p> " ${data[k].body} " </p></div>`);
            }
        }


        $('#editCommentButton').on('click', function(e) {
            e.preventDefault();
            var edittedComment = $(this).attr('id');
            window.location = `/editComment.html?id=${$(this).find('a').attr('id')}`;

        });



        $('.deleteCommentButton').on('click', function(e) {
            var deletecommentID = $(this).find('a').attr('id');
            var id = $(this).attr('id');
            console.log('deletebuttonclicked!, ID =', id)
            e.preventDefault();

            $.ajax({
                    method: "DELETE",
                    url: `/commentroute/${deletecommentID}`,
                    contentType: "application/json"
                })
                .then(response => {
                    // window.location.reload(true);
                });
        });
    });

});
