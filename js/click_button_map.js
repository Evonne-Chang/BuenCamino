"use strict";

let routes_button = document.getElementsByClassName('routes_button');
for (let i = 0 ; i < routes_button.length ; i++){

    routes_button[i].addEventListener('click', function(e){
        e.preventDefault();
        //console.log(routes_button);
        //console.log(maps_bn);
        
        let link_id = routes_button[i].getAttribute("data-id");
        //console.log(link_id);

    });
}

let maps_bn = document.getElementsByClassName('maps_bn');
// console.log(maps_bn[i].innerHTML.getAttribute);
// maps_bn[i].innerHTML=("./img/"+ routes_button[i].getAttribute("data-id") + ".jpg");


