
/* Validation form_sign*/

let userFullName = document.getElementById('userFullName');
let userEmail = document.getElementById('userEmail');
let userName = document.getElementById('userName');
let userPassword = document.getElementById('userPassword');
let form_sign = document.getElementById('form_sign');



function validationFullName(data){
    pattern = /^[a-zA-Z\ ]{5,30}$/i;
    return pattern.test(data);
}


function validationEmail(data){
    return data.includes('@');
}


function validationPassword(data){
	pattern = /^[a-zA-Z][A-Za-z0-9\_]{7,11}$/i;
    return pattern.test(data);

}

function validationUserName(data){
    pattern = /^[a-zA-Z][A-Za-z0-9]{7,20}$/i;
    return pattern.test(data);
}


userFullName.addEventListener('input',function(event){	
	const elem = event.target;
	if (!validationFullName(elem.value)){
		elem.classList.add('error');
	}else {
		elem.classList.remove('error');
	}
});

		

userEmail.addEventListener('input',function(event){
	const elem = event.target;
	if (!validationEmail(elem.value)){
		elem.classList.add('error');
	}else {
		elem.classList.remove('error');
	}
});

	

userPassword.addEventListener('input',function(event){
	const elem = event.target;
	if (!validationPassword(elem.value)){
		elem.classList.add('error');
	}else {
		elem.classList.remove('error');
	}
});

	


userName.addEventListener('input',function(event){	
	const elem = event.target;
	if (!validationUserName(elem.value)){
		elem.classList.add('error');
	}else {
		elem.classList.remove('error');
	}
});
	



form_sign.addEventListener('submit',function(event){
event.preventDefault();
const nameData = userFullName.value;
const userNameData = userName.value;
const emailData = userEmail.value;
const passwordData = userPassword.value;
if(nameData && userNameData && emailData && passwordData){
    alert('Welcome');
}else{
    alert('You made mistakes');
}
});


