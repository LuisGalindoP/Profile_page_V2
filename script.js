function editProfile() {
    document.querySelector("#name").innerText = "Mr Plow"
    document.querySelector("#profilePhoto").src = "images/mr_plow_1.jpg"
}

let connectionNum = document.querySelector(".connectionNumber2").innerText;

function accepted(clase) {
    var listItemsAll = document.querySelectorAll("." + clase);
    console.log(listItemsAll);
    for (i = 0; i < listItemsAll.length; i++) {
        listItemsAll[i].style.visibility = "hidden";
    }    
    connectionNum--;
    document.querySelector(".connectionNumber2").innerText = connectionNum + "+";
    document.querySelector(".connectionNumber").innerText--;
}