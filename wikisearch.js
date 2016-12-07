$(".wikiSearch").autocomplete({
    source: function (request, response) {
        console.log(request.term);
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function (data) {
                response(data[1]);
            }
        });
    }
});

$("#searchBtn").click(function (event) {
    var searchValue = $("#searchInput").val().replace(/ /g, "_");
    if (!searchValue)
    {
        event.preventDefault();
        alert("Please fill your search form");
    }
    
    else {
        console.log(searchValue);


        window.location = "https://pl.wikipedia.org/wiki/" + searchValue;
    }
});
