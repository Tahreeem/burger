$(function () {



  $(".create-burger").on("click", function (event) {  //if want on submit instead, the $('element') has to be the form element, not buttob

    var newBurger = {
      "burger_name": $("#create-burger-input").val().trim(),
      "burger_devoured": false
    }

    $.ajax('/api/burgers', {
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
      id: $(this).data("id")
    }

    console.log(updateBurger);

    $.ajax('/api/burgers', {
      type: 'PUT',
      data: JSON.stringify(updateBurger),
      dataType: "json",
      contentType: 'application/json; charset=utf-8',
      success: function () {

        location.reload();

      },
      error: function () { console.log('error'); }
    });
  });


});
