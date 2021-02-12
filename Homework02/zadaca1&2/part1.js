$(document).ready(function() {
    let kopce = $("#button");
    let tabela = $("#nav");
    let next = $("#next");
    let prev = $("#previous");
    let loader = $("#img");

    let planets = "https://swapi.dev/api/planets/?page=1"
    let nextUrl = ""
    let previousUrl = ""

    let toggleElement = function(toggleCondition, element) {
        if (toggleCondition)
            element.css("display", "block");
        else
            element.css("display", "none");
    }

    function print(url) {
        toggleElement(true, loader);
        $.ajax({
            url: url,
            success: function(rez) {
                toggleElement(false, loader);
                tabela.append(`<tr><th><h5>Name:</h5></th><th><h5>Population:</h5></th><th><h5>Climate:</h5></th><th><h5>Gravity:</h5></th></tr>`);
                for (i = 0; i <= 9; i++) {
                    tabela.append(`<tr><th>${rez.results[i].name}</th><th>${rez.results[i].population}</th><th>${rez.results[i].climate}</th><th>${rez.results[i].gravity}</th></tr>`);
                    tabela.css("border", "1px solid yellow");
                    tabela.css("color", "yellow");
                    tabela.css("padding", "15px");
                    $("th").css("padding", "15px");
                }
                nextUrl = rez.next;
                previousUrl = rez.previous;
                toggleElement(nextUrl, next);
                toggleElement(previousUrl, prev);
            },
            error: function() {
                tabela.append("Please correct the mistake")
            }

        })
    };
    kopce.click(function() {
        print(planets)
        tabela.empty();
    })
    next.click(function() {
        print(nextUrl);
        tabela.empty();
    });
    prev.click(function() {
        print(previousUrl);
        tabela.empty();
    });

});