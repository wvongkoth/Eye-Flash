   /*$(document).on('click', '#savenote', function () {
        var thisId = $(this).attr('data-id');

        $.ajax({
            method: "POST",
            url: "/articles/" + thisId,
            data: {
                title: $('#titleinput').val(),
                body: $('#bodyinput').val()
            }
        })
            .done(function (data) {
                console.log(data);
                $('#notes').empty();
            });


        $('#titleinput').val("");
        $('#bodyinput').val("");
    });*/


$.ajax({
    method: "POST",
    url: "/deck/" + thisId,
    data: {
       deckName: "myles",
       user_id: "userid",
       cardNum: 9
    }
}).done(function (data) {
   console.log(data);
});

$.ajax({
    method: "POST",
    url: "/cardSet/" + thisId,
    data: {
        cards_id: "",
        sets_id: "" ,
    }
}).done(function (data) {
    console.log(data);
    });

$.ajax({
    method: "POST",
    url: "/flashCard/" + thisId,
    data: {
        front: "",
        back: ""
    }
}).done(function (data) {
    console.log(data);
});

$.getJSON('/flashCard', function (data) {
    for (var i = 0; i < data.length; i++) {
        $('#flashCard').append('<p data-id="' + data[i]._id + '">' + data[i].front + '<br />' + data[i].back + '</p>');
    }
});