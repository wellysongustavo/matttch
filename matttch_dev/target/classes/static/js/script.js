
function myFunction() {
	var perfil = document.getElementById("perfil");
    if (perfil.value == 'C') {
		location.href = "welcome.html";
	}
	
	if (perfil.value == 'T') {
		location.href = "welcome_ttt.html";
	}
}

function backHome(){
    location.href  = "home.html";
}

function backLogin(){
    location.href  = "login.html";
}

function goTrial(){
    location.href = "trial.html";
}

function clickTTTrial() {
	if (document.getElementById("img2").src == "https://brightercraft.com/wp-content/uploads/2018/10/img_3639.jpg") {
		location.href  = "trial_ttt_success.html";
	} else {
		document.getElementById("img1").src = "https://s3.tattoo2me.com/tattoo2me/api/media/fredao_oliveira_2_3_2019_22_12_19_38.jpg";
		document.getElementById("img2").src = "https://brightercraft.com/wp-content/uploads/2018/10/img_3639.jpg";
		document.getElementById("img3").src = "https://i0.wp.com/followthecolours.com.br/wp-content/uploads/2015/02/follow-the-colours-paulo-victor-skaz-tattoo-22.jpg?ssl=1";
	}
}

function goChat(){
    location.href = "chat.html";
}

function tatuador(){
    location.href = "tatuador.html";
}

function clickTrial(){
	if (document.getElementById("img2").src == "https://brightercraft.com/wp-content/uploads/2018/10/img_3639.jpg") {
		location.href  = "trial_success.html";
	} else {
		document.getElementById("img1").src = "https://s3.tattoo2me.com/tattoo2me/api/media/fredao_oliveira_2_3_2019_22_12_19_38.jpg";
		document.getElementById("img2").src = "https://brightercraft.com/wp-content/uploads/2018/10/img_3639.jpg";
		document.getElementById("img3").src = "https://i0.wp.com/followthecolours.com.br/wp-content/uploads/2015/02/follow-the-colours-paulo-victor-skaz-tattoo-22.jpg?ssl=1";
	}
}