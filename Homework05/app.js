$(document).ready(function() {

    let button = $("#button");
    let table = $("#nav");
    let table1 = $("#nav1");
    let country;
    let capital;
    let region;
    let number = $("#number");
    let array = [];

    async function getDetails() {
        let details = await fetch("https://restcountries.eu/rest/v2/capital/tallinn");
        let data = await details.json();
        detailForFirstApi(data);
        for (let code of data) {
            let result = code.currencies[0].code;
            let currency = await fetch(`https://restcountries.eu/rest/v2/currency/${result}`);
            let res = await currency.json();
            table1.append(`<tr><th><h4>Name</h4></th><th><h4>Capital</h4></th><th><h4>Region</h4></th></tr>`);
            for (let j of res) {
                country = j.name;
                array.push(country);
                capital = j.capital
                region = j.region
                table1.append(`<tr><th>${country}</th><th>${capital}</th><th>${region}</th></tr>`);
                table1.css("border", "1px solid yellow");
                table1.css("color", "yellow");
                table1.css("padding", "15px");
                $("th").css("padding", "15px");
            }

            number.append(`Number of countries using the same currency as Estonia is ${array.length}`)

        }


    }

    function detailForFirstApi(data) {

        table.append(`<tr><th><h4>Name</h4></th><th><h4>Alpha2Code</h4></th><th><h4>Capital</h4></th><th><h4>Region</h4></th><th><h4>Population</h4></th><th><h4>Currencies</h4></th><tr><th>${data[0].name}</th><th>${data[0].alpha2Code}</th><th>${data[0].capital}</th><th>${data[0].region}</th><th>${data[0].population}</th><th>${data[0].currencies[0].code}</th></tr>`);
        table.css("border", "1px solid yellow");
        table.css("color", "yellow");
        table.css("padding", "15px");
        $("th").css("padding", "15px");
    }

    button.click(function() {
        getDetails();

    })




});