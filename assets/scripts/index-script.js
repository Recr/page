function changeIcon() {
    let menu = document.getElementById("menu");
    let navBar = document.getElementById("navbar")
    if (menu.classList.contains("colapsed")) {
        menu.classList.remove("colapsed");
        navBar.classList.add("invisible");
        let navItems = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.add("invisible"); 
        }
    } else {
        menu.classList.add("colapsed");
        navBar.classList.remove("invisible");
        let navItems = document.getElementsByClassName("nav-item");
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove("invisible");
        }
    }
}