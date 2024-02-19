// var product = document.querySelector("h5.card-title");
// product.innerHTML = "Product";



// var parent = document.querySelector("body");

// var newElement = document.createElement("h2");
// newElement.innerHTML = "Hi nigga";
// parent.prepend(newElement);

// var newElement2 = document.createElement("p");
// newElement2.innerHTML = "Price";
// product.append(newElement2);

// var title = document.querySelector("h1");
// title.remove();

const list = [

    {
        Name: "Product 1",
        Price: 80,
        Description: "This is Trash"
    },

    {
        Name: "Product 1",
        Price: 80,
        Description: "This is Trash"
    },
    {
        Name: "Product 1",
        Price: 80,
        Description: "This is Trash"
    },
    {
        Name: "Product 1",
        Price: 80,
        Description: "This is Trash"
    },

];


for (var i = 0; i < list.length; i++) {
    var parentRow = document.querySelector(".container .row");

    var cardTemplate = document.querySelector("#Template");

    var clone = cardTemplate.content.cloneNode(true);

    clone.querySelector(".card .card-body h5.card-title").innerHTML = "Title " + (i + 1); 

    clone.querySelector(".card .card-body b").innerHTML = list[i].Price;
    clone.querySelector(".card .card-body p.card-text").innerHTML = list[i].Description;
    parentRow.append(clone);
}
