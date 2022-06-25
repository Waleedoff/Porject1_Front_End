let loginPage = "login/login.html" //path to login page

iphone11 = document.getElementById('iphone11'); // iphone11 link in the navbar (dropdown)
iphone13 = document.getElementById('iphone13');

iphone13.onclick = () => { //when you click on the first card
    alert('You Need To Login First') //show message says --> Login First
    window.location = loginPage; // to the window at ==> LoginPage.

}
iphone11.onclick = () => { //when you click on the first card
    alert('You Need To Login First') //show message says --> Login First
    window.location = loginPage; // to the window at ==> LoginPage.

}




// iphone colors and container background. 
let img = document.querySelector('.img')
let Container = document.querySelector('.container')
let iphoneColors = function (phone) {
    img.src = phone
    window.localStorage.setItem("img", phone)
    window.localStorage.getItem(img.src);
}
window.localStorage.getItem(img.src);
// document.body.style.backgroundColor =   window.localStorage.getItem(img.src);
function colors(color) {
    // Container.style.backgroundColor = color;
    Container.style.backgroundColor = color
}