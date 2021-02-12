$(document).ready(function() {
    let kopce = $("#button");
    let div = $("#nav");
    let array1 = ["Danilo", "Dragana", "Anamarija", "Sime", "Rozeta"];
    let array2 = ["Borozan", "Poposka", "Risteska", "Nokoski", "Markovska"];


    function studentList() {
        let listNum = 1;
        kopce.after(`<h1>List of students</h1><br>`);
        for (i = 0; i < array1.length; i++) {
            if (array1[i] !== null || array2[i] !== null) {
                div.after(`<h4>${listNum}. ${array1[i]} ${array2[i]} <br></h4>`);
                listNum++;

            }
        }

    }

    kopce.click(function() {
        studentList();
    })


});