const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

let students = [{
        name: "Danilo",
        age: 23,
        gender: "Male",
        academy: "SEDC",
        subject: "JavaScript"

    },
    {
        name: "Anamarija",
        age: 24,
        gender: "Female",
        academy: "Khan",
        subject: "Chemistry"

    },
    {
        name: "Sime",
        age: 22,
        gender: "Male",
        academy: "SEMOS",
        subject: "Python"

    },
    {
        name: "Rozeta",
        age: 24,
        gender: "Female",
        academy: "Drexel",
        subject: "Medical"

    },
    {
        name: "Aleksandar",
        age: 25,
        gender: "Male",
        academy: "SEDC",
        subject: "Network Security"

    },
    {
        name: "Ana",
        age: 24,
        gender: "Female",
        academy: "Tekfocus",
        subject: "Embedded"

    },
    {
        name: "Kristijan",
        age: 25,
        gender: "Male",
        academy: "Udemy",
        subject: "Digital Marketing"

    }

]

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.write(JSON.stringify(students));
    res.end();
})
server.listen(port, hostname, () => {
    console.log(`Server listening on ${hostname} - ${port}`);
})