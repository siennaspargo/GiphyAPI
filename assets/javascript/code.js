$(document).ready(function () {

  $("#find-giphy").on("click", function(event) {

    event.preventDefault();

    var giph = $("#giphy-input").val();

      console.log(giph);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + giph + "&api_key=m49dp38ck8IOmA26XZqQ7kr8Fw6plpoF&limit=10";
  
    console.log(queryURL);

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      for(i = 0; i < response.data.length; i++){
        var imgUrl = response.data[i].images.fixed_height.url;
        var div = document.getElementById("giphy-view")
        var x = document.createElement("IMG");
        x.setAttribute("src", imgUrl);
        x.setAttribute("width", "304");
        x.setAttribute("height", "228");
        div.appendChild(x);
      }

       console.log(response);

    });


  })

  $(imgUrl).on("click", function(event) {

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
    console.log(response);
  }
  )

});