
const menu=document.querySelector('.menu');
const links=document.querySelector('.nav-links');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));
function sendForm(e){
 e.preventDefault();
 const msg=document.getElementById('form-message');
 msg.textContent='Bedankt! Je aanvraag is ingevuld. (Demo: het formulier verstuurt nog geen echte e-mail.)';
 e.target.reset();
}
