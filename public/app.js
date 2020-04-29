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