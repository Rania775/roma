$(document).ready(function(){
  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
}) // end jqeuery


// javascript

let spanLogin = document.getElementById("span_login"),
    spanRegister = document.getElementById("span_register"),
    loginPanel = document.getElementById("login"),
    inpLogin = document.querySelectorAll("#login input"),
    registerPanel = document.getElementById("register"),
    inpRegister = document.querySelectorAll("#register input"),
    cPanel = document.querySelector(".login_users"),
    closePanel = document.querySelector(".login_user"),
    openPanel = document.querySelector(".lgoin_system span"),
    btnLogin = document.getElementById("btn_login"),
    btnRegister = document.getElementById("btn_register");


    spanRegister.onclick = _ => {
        loginPanel.style.display = "none";
        registerPanel.style.display = "block";
        spanRegister.style.background = "#fff";
        spanLogin.style.background = "#ccc";
    }

    spanLogin.onclick = _ => {
        registerPanel.style.display = "none";
        loginPanel.style.display = "block";
        spanLogin.style.background = "#fff";
        spanRegister.style.background = "#ccc";
    }

    openPanel.onclick = _ => {
        closePanel.style.opacity = "1";
        closePanel.style.visibility = "visible";
        cPanel.style.opacity = "1";
        cPanel.style.visibility = "visible";
    }

    closePanel.onclick = _ => {
        cPanel.style.opacity = "0";
        cPanel.style.visibility = "hidden";
        closePanel.style.opacity = "0";
        closePanel.style.visibility = "hidden";    
    }

    btnLogin.onclick = _ => {
        inpLogin.forEach(item => item.value === "" ? alert("please fill data") : null)
    }

    btnRegister.onclick = _ => {
        inpRegister.forEach(item => item.value === "" ? alert("please fill data") : null)
    }

     // btn up
     let mybutton = document.getElementById("myBtn");

     window.onscroll = function() {scrollFunction()};
     
     function scrollFunction() {
       if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
         mybutton.style.display = "block";
       } else {
         mybutton.style.display = "none";
       }
     }
     

     function topFunction() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
     }