console.log("login.js loaded");
userLogin = {userName: 'ray', password: '123321'
};
var userPassword;
for (var i = 0; i < 3; i++){
userPassword = prompt("Enter password for user " + userLogin.userName);
if (userPassword === userLogin.password){
	alert('Login sucessful');
	break;
}else{
	alert('enter password again');
}}