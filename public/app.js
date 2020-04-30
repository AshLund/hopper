$("#addbrewery").on("click", function () {
    $.ajax ({
        type: "POST",
        url: "/submit",
        dateType: "json",
        data: {
            name: $("#name").val().toLowerCase(),
            address: $("#address").val(),
            state: $("#state").val(),
            zip: $("#zip").val(),
            website: $("#website").val(),
            outdoor: $("#seating").val(),
            gluen: $("#gluten").is(":checked"),
            wine: $("#wine").is(":checked"),
            cocktails: $("#cocktails").is(":checked"),
            fullbar: $("#full").is(":checked"),
            na: $("#na").is(":checked"),
            insidedog: $("#insidedog").is(":checked"),
            outsidedog: $("#outsidedog").is(":checked"),
            nofood: $("#nofood").is(":checked"),
            kitchen: $("#kitchen").is(":checked"),
            snacks: $("#snacks").is(":checked"),
            accessible: $("#accessible").is(":checked"),
            created: Date.now(),
       
        }
    })
    .then(function(data) {
        console.log(data);
        console.log(data.name)
        // $("#name").val("");
        // $("#address").val("");
        // $("#gluen").val("");
    });
    return false
})

function allBreweries () {
    $.getJSON("/all", function(data) {
        for (var i=0; i<data.length; i++) {
            $("#results").append("<p class='data-entry' data-id=" + data[i]._id + ">" + data[i].name + "</p>")
        }
    })
}

$("#search-btn").on("click", function() {
    var searchedBrewery = $("#brewery-search").val().trim();

    $.getJSON("/all/" + searchedBrewery, function(data) {
      console.log(data);
      if (data) {
        $("#brewery").append("<p class='data-entry' data-id=" + data._id + ">" + data.name + "</p>")
    }
      else {
        $("#brewery").text("No Brewery found.");
      }
    });
  });

allBreweries();
