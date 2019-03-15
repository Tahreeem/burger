$(function () {



  $(".create-burger").on("click", function (event) {  //if want on submit instead, the $('element') has to be the form element, not buttob

    var newBurger = {
      "burger_name": $("#create-burger-input").val().trim(),
      "burger_devoured": false
    }

    $.ajax('http://localhost:3000/api/burgers', {
      type: 'POST',
      data: JSON.stringify(newBurger),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function () {
        location.reload();
      },
      error: function () { console.log('error'); }
    });
  });




  $(".devour").on("click", function (event) {

    var updateBurger = {
      burger_id: $(this).data("id")
    }

    console.log(updateBurger);

    $.ajax('http://localhost:3000/api/burgers', {
      type: 'PUT',
      data: JSON.stringify(updateBurger),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function () {

        //location.reload();
        window.location.replace("/burgers");

      },
      error: function () { console.log('error'); }
    });
  });


});
