$("#addbrewery").on("click", function () {
    $.ajax ({
        type: "POST",
        url: "/submit",
        dateType: "json",
        data: {
            name: $("#name").val(),
            address: $("#address").val(),
            gluen: $("#gluten").val(),
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
    $.getJSON("/name", function(data) {
        for (var i=0; i<data.length; i++) {
            $("#results").append("<p class='data-entry' data-id=" + data[i]._id + ">" + data[i].name + "</p>")
        }
    })
}

allBreweries();
