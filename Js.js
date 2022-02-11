var b = document.getElementById("botao")
function clicar(){
    var a = document.getElementById("km").value
    var res = document.getElementById("toy")
    var vel = Number(km.value)
    res.innerHTML = "<p>Your Answer is " + "<strong>" + a + "</strong> " + "Hours</P>"
   
    if(vel == 24){
        res.innerHTML += "Congratulations! You're rigth. &#128512;"
    } else{
        res.innerHTML += "Oops! Try again."
    }
}

var country = document.getElementById("botao2")
function clicar2(){
    var text = document.getElementById("pais").value
    var res = document.getElementById("toy2")
    res.innerHTML = "<p>You choose " + "<strong>"+ text + "</strong>" + "</p>"
    if(text == "Asia" || text == "asia"){
        res.innerHTML += "Congratulations! You're rigth. &#128512; "
    }else{
        res.innerHTML += "Oops! Try again"
    }
}