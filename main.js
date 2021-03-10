var a=
[
    "Chicken Tandoori pizza",
    "Deluxe Veggie pizza",
    "Paneer Tikka Pizza",
    "Veg Extravaganza pizza",
    "Veg Supreme pizza"
];

function getmenu() {
    var htmldata;
    htmldata="<ol class='menulist'>"
    a.sort();
    for (var i=0; i<a.length; i++) {
        htmldata=htmldata+"<li>"+a[i]+"</li>"
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item() {
    if (document.getElementById("add_item").value=="") {
        document.getElementById("None").innerHTML="Please fill out the field given above!<br>It is required!";
    }
    else {
        document.getElementById("None").style.display="none";
        var htmldata;
    var item=document.getElementById("add_item").value;
    a.push(item);
    a.sort();
    htmldata="<section class='cards'>"
    for (var i=0; i<a.length; i++) {
        htmldata=htmldata+'<div class="card">'+'<img src="https://i.postimg.cc/ZqKN56Yv/pizzaImg.png"/>'+a[i]+ '</div>'
    }
}
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML= htmldata;
    console.log(htmldata);
}