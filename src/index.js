import "./styles.css";
import mainPage from "./mainPage";
import menuPage from "./menuPage";
import contactPage from "./contactPage";

mainPage();


document.getElementById('homeButton').addEventListener('click', function() {
    mainPage();
})

document.getElementById('menuButton').addEventListener('click', function() {
    menuPage();
})

document.getElementById('contactButton').addEventListener('click', function() {
    contactPage();
})


