//za gradovite ne mi rabotese apito

$(document).ready(function() {
    let kopce = $("#button");
    let ul = $("#nav")

    function print() {
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon`,
            success: function(rez) {
                //forot e odnopaku zatoa sto se vo apito odnazad nanapred so i=0 i<=9 i++ ke go pecati od 10 do 1
                for (i = 9; i >= 0; i--) {
                    ul.after(`<li>URL: ${rez.results[i].url}</li><hr><br>`);
                    ul.after(`<li> Pokemon name: ${rez.results[i].name}</li>`);

                }
            },
            error: function() {
                ul.after(`<li>Please correct the mistake</li><hr>`);
            }

        })
    };
    kopce.click(function() {
        print();
    })

});