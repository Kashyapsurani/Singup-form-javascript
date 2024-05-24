var form = document.querySelector(".form")
var arr = [];

form.addEventListener("submit", () => {
    var username = document.querySelector(".username").value
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value


    if (username.length < 4) {
        var l = document.querySelector(".pargraph")
        l.innerText = "You Username is smaller than 4"
        return;

    }

    if (password.length < 6) {
        var p = document.querySelector(".p")
        p.innerText = "You password is smaller than 6"
        return;
        
    }

   

    var object = {
        username: username,
        email: email,
        password : password
    }

    arr.push(object)

    console.log(object)
})