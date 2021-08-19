
function myFunction() {
    location.href = "welcome.html";
}

function backHome(){
    location.href  = "home.html";
}

function backIndex(){
    location.href  = "index.html";
}

function goTrial(){
    location.href = "trial.html";
}

$(document).ready(function(){
    $('[name=telefone]').mask('(00) 0000-0000');
});