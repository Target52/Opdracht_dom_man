//deel 1
let buttons = document.querySelectorAll('.big-five-button');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let dierClicked = this.innerHTML;
        let newLi = document.createElement("li")
        newLi.appendChild(document.createTextNode(dierClicked))
        newLi.classList.add("spotted-animals-list-item")
        let list = document.getElementById("spotted-animals-list")
        list.appendChild(newLi);
    });
}

//deel 2
let cEvent = document.querySelector('#remove-first-item-button');

cEvent.addEventListener('click', function (e) {
    let list = document.getElementById("spotted-animals-list");
    let child = list.getElementsByTagName("li")[0];
    list.removeChild(child)
});

//deel 3

let cEvent2 = document.querySelector('#remove-all-button');

cEvent2.addEventListener('click', function (e) {
    let list = document.getElementById("spotted-animals-list");
    list.innerHTML = '';
    let child = list.getElementsByTagName("li");
    console.log(child);
    //child.forEach(element => {
    //    list.removeChild(child)
    //})
});


