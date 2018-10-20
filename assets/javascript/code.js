$(document).ready(function () {

  $("#find-giphy").on("click", function(event) {

    event.preventDefault();

    var giph = $("giphy-input").val();

    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=m49dp38ck8IOmA26XZqQ7kr8Fw6plpoF";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
       console.log(response);
      $("#giphy-view").text(JSON.stringify(response));
    });

    $(giph).append("giphy-input")
  
  })
});