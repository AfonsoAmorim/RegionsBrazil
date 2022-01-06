function adicionar(){

let text = document.getElementById("texto").value;

let list = document.getElementById("lista").innerHTML;


    list += "<li>" +text+ "</li>" 


    document.getElementById("lista").innerHTML = list;



}

let cars = ["Norte", "Nordeste", "Centro-Oeste", "Sudeste" ,"Sul"];


function sortear()  {

    let np = cars.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("a").innerHTML = cars[ns];

}

