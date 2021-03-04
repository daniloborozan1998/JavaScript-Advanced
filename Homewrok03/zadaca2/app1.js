$(document).ready(function() {
    let studentGradeHig3 = $("#button");
    let allFemaleNameAvgGrade5 = $("#button1");
    let allFemaleAvgGradeAge24 = $("#button2");
    let allMaleFnameLiveSk = $("#button3");
    let allMaleStudentNameAvgGrade2B = $("#button4");
    let table = $("#nav");
    let loader = $("#img");

    let toggleElement = function(toggleCondition, element) {
        if (toggleCondition)
            element.css("display", "block");
        else
            element.css("display", "none");
    }

    studentGradeHig3.click(function() {
        toggleElement(true, loader);
        table.empty();
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
            success: function(res) {
                toggleElement(false, loader);
                let parsedObject = JSON.parse(res);
                table.append(`<tr><th><h4>Name</h4></th><th><h4>Surname</h4></th><th><h4>Age</h4></th><th><h4>Gender</h4></th><th><h4>City</h4></th><th><h4>averageGrade</h4></th></tr>`);
                let allStudentGradeHig3 = parsedObject.filter(students => students.averageGrade > 3)
                allStudentGradeHig3.map(students => table.append(`<tr><th>${students.firstName}</th><th>${students.lastName}</th><th>${students.age}</th><th>${students.gender}</th><th>${students.city}</th><th>${students.averageGrade}</th></tr>`));
                table.css("border", "1px solid yellow");
                table.css("color", "yellow");
                table.css("padding", "15px");
                $("th").css("padding", "15px");

            },
            error: function() {
                table.append("Please correct the mistake")
            }

        })


    })

    allFemaleNameAvgGrade5.click(function() {
        toggleElement(true, loader);
        table.empty();
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
            success: function(res) {
                toggleElement(false, loader);
                let parsedObject = JSON.parse(res);
                table.append(`<tr><th><h4>Name</h4></th><th><h4>Surname</h4></th><th><h4>Gender</h4></th><th><h4>averageGrade</h4></th></tr>`);
                let allStudentGradeHig3 = parsedObject.filter(students => students.averageGrade == 5 && students.gender != "Male")
                allStudentGradeHig3.map(students => table.append(`<tr><th>${students.firstName}</th><th>${students.lastName}</th><th>${students.gender}</th><th>${students.averageGrade}</th></tr>`));
                table.css("border", "1px solid yellow");
                table.css("color", "yellow");
                table.css("padding", "15px");
                $("th").css("padding", "15px");

            },
            error: function() {
                table.append("Please correct the mistake")
            }

        })


    })

    allFemaleAvgGradeAge24.click(function() {
        toggleElement(true, loader);
        table.empty();
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
            success: function(res) {
                toggleElement(false, loader);
                let parsedObject = JSON.parse(res);
                table.append(`<tr><th><h4>Name</h4></th><th><h4>Surname</h4></th><th><h4>Age</h4></th><th><h4>Gender</h4></th><th><h4>averageGrade</h4></th></tr>`);
                let allStudentGradeHig3 = parsedObject.filter(students => students.age >= 25 && students.gender != "Male")
                allStudentGradeHig3.map(students => table.append(`<tr><th>${students.firstName}</th><th>${students.lastName}</th><th>${students.age}</th><th>${students.gender}</th><th>${students.averageGrade}</th></tr>`));
                table.css("border", "1px solid yellow");
                table.css("color", "yellow");
                table.css("padding", "15px");
                $("th").css("padding", "15px");


            },
            error: function() {
                table.append("Please correct the mistake")
            }

        })


    })

    allMaleFnameLiveSk.click(function() {
        toggleElement(true, loader);
        table.empty();
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
            success: function(res) {
                toggleElement(false, loader);
                let parsedObject = JSON.parse(res);
                table.append(`<tr><th><h4>Name</h4></th><th><h4>Surname</h4></th><th><h4>Age</h4></th><th><h4>Gender</h4></th><th><h4>City</h4></th></tr>`);
                let allStudentGradeHig3 = parsedObject.filter(students => students.age >= 19 && students.gender != "Female" && students.city == "Skopje")
                allStudentGradeHig3.map(students => table.append(`<tr><th>${students.firstName}</th><th>${students.lastName}</th><th>${students.age}</th><th>${students.gender}</th><th>${students.city}</th></tr>`));
                table.css("border", "1px solid yellow");
                table.css("color", "yellow");
                table.css("padding", "15px");
                $("th").css("padding", "15px");

            },
            error: function() {
                table.append("Please correct the mistake")
            }

        })


    })

    allMaleStudentNameAvgGrade2B.click(function() {
        toggleElement(true, loader);
        table.empty();
        $.ajax({
            url: `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`,
            success: function(res) {
                toggleElement(false, loader);
                let parsedObject = JSON.parse(res);
                table.append(`<tr><th><h4>Name</h4></th><th><h4>Surname</h4></th><th><h4>Gender</h4></th><th><h4>averageGrade</h4></th></tr>`);
                // povtorno ne mi gi pecati tie sto zapocnuvaat na B.
                let allStudentGradeHig3 = parsedObject.filter(students => students.averageGrade > 2 && students.gender != "Female" && (/[B]/i.test(students)))
                allStudentGradeHig3.map(students => table.append(`<tr><th>${students.firstName}</th><th>${students.lastName}</th><th>${students.gender}</th><th>${students.averageGrade}</th></tr>`));

                table.css("border", "1px solid yellow");
                table.css("color", "yellow");
                table.css("padding", "15px");
                $("th").css("padding", "15px");

            },
            error: function() {
                table.append("Please correct the mistake")
            }

        })


    })


});