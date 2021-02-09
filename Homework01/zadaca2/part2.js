let tabela = document.getElementById("nav");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
document.querySelector("button").addEventListener("click", function() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(function(response) {
            response.json().then(
                function(data) {
                    console.log(data);
                    thead.innerHTML += "<tr><th>Id</th><th>Name</th><th>Username</th><th>Email</th><th>Adress</th><th>Geo</th><th>Phone</th><th>Website</th><th>Company</th></tr>";
                    tabela.appendChild(thead);
                    tbody.innerHTML += `<tr><td>${data.id}</td><td>${data.name}</td><td>${data.username}</td><td>${data.email}</td><td>${data.address.street}<br>${data.address.suite}<br>${data.address.city}<br>${data.address.zipcode}</td><td>${data.address.geo.lat}<br>${data.address.geo.lng}</td><td>${data.phone}</td><td>${data.website}</td><td>${data.company.name}<br>${data.company.catchPhrase}<br>${data.company.bs}</td></tr>`;
                    tabela.appendChild(tbody);
                }
            )
        })
        .catch(function(error) {
            console.log(error)
        });
});