var form = document.querySelector(".form")

var arr = [];

form.addEventListener("submit", () => {
    var email = document.querySelector(".email").value
    var password = document.querySelector(".password").value

    if (password.length < 6) {
        var p = document.querySelector(".p")
        p.innerText = "You password is smaller than 6"
        return;
        
    }

   

    var object = {
        email: email,
        password : password
    }

    arr.push(object)

    console.log(object)
})