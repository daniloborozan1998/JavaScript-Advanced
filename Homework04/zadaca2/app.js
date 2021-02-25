$(document).ready(function() {
    let button = $("#button");
    let text = $("#text");
    let div = $("#nav");


    function getInput(input) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                if (Number(input)) {
                    reject(input);
                }
                if (typeof(input) === "string") {
                    resolve(input.toUpperCase());
                }
            }, 4000)
        })
    }

    button.click(function() {
        getInput(text.val())
            .then(success => {
                div.append(success);
                text.val("");
            })
            .catch(error => {
                text.val("");
                div.append(error);

            })
    })


});