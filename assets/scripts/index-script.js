function changeIcon() {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("colapsed")) {
        menu.classList.remove("colapsed");
        let navItem = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItem.length; i++) {
            navItem[i].classList.add("invisible"); 
        }
    } else {
        menu.classList.add("colapsed");
        let navItem = document.getElementsByClassName("nav-item");
        console.log(navItem)
        for (let i = 0; i < navItem.length; i++) {
            console.log(navItem[i])
            navItem[i].classList.remove("invisible");
        }
    }
}