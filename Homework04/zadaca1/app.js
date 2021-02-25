$(document).ready(function() {

    let button = $("#button");
    let table = $("#nav");
    let table1 = $("#nav1");

    async function getDetails() {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let post = await response.json();
        detailForFirstApi(post);
        let response1 = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
        let user = await response1.json();
        detailForUser(user);
    }

    function detailForFirstApi(data) {

        table.append(`<tr><th><h4>User</h4></th><th><h4>ID</h4></th><th><h4>Tittle</h4></th><th><h4>Body</h4></th><tr><th>${data.userId}</th><th>${data.id}</th><th>${data.title}</th><th>${data.body}</th></tr>`);
        table.css("border", "1px solid yellow");
        table.css("color", "yellow");
        table.css("padding", "15px");
        $("th").css("padding", "15px");
    }

    function detailForUser(data) {



        table1.append(`<tr><th><h4>ID</h4></th><th><h4>Name</h4></th><th><h4>Username</h4></th><th><h4>Email</h4></th><th><h4>Street</h4></th><th><h4>Suite</h4></th><th><h4>City</h4></th><th><h4>Zipcode</h4></th><th><h4>Lat</h4></th><th><h4>Lng</h4></th><th><h4>Phone</h4></th><th><h4>Website</h4></th><th><h4>Company Name</h4></th><th><h4>Company CatchPhrase</h4></th><th><h4>Company Bs</h4></th><tr><th>${data.id}</th><th>${data.name}</th><th>${data.username}</th><th>${data.email}</th><th>${data.address.street}</th><th>${data.address.suite}</th><th>${data.address.city}</th><th>${data.address.zipcode}</th><th>${data.address.geo.lat}</th><th>${data.address.geo.lng}</th><th>${data.phone}</th><th>${data.website}</th><th>${data.company.name}</th><th>${data.company.catchPhrase}</th><th>${data.company.bs}</th></tr>`);
        table1.css("border", "1px solid yellow");
        table1.css("color", "yellow");
        table1.css("padding", "15px");
        $("th").css("padding", "15px");

    }

    button.click(function() {
        getDetails();

    })




});