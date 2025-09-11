

const btns = document.querySelectorAll('#btnIMG button');

btns[0].addEventListener('click', () => {
divIMGs.scrollBy({ left: 200, behavior: 'smooth' });
vibração()
});

btns[1].addEventListener('click', () => {
divIMGs.scrollBy({ left: -200, behavior: 'smooth' });
vibração()
});
const divIMGs = document.getElementById('divIMGs');
let isDown = false;
let startX;
let scrollLeft;

divIMGs.addEventListener('mousedown', (e) => {
isDown = true;
divIMGs.classList.add('active');
startX = e.pageX - divIMGs.offsetLeft;
scrollLeft = divIMGs.scrollLeft;
});
divIMGs.addEventListener('mouseleave', () => {
isDown = false;
divIMGs.classList.remove('active');
});
divIMGs.addEventListener('mouseup', () => {
isDown = false;
divIMGs.classList.remove('active');
});
divIMGs.addEventListener('mousemove', (e) => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX - divIMGs.offsetLeft;
const walk = (x - startX) * 2; // Velocidade de rolagem
divIMGs.scrollLeft = scrollLeft - walk;
});

//codigo de entrada
var codigo =sessionStorage.getItem('Mostruario')
var firebaseConfig = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfig);
var db=firebase.firestore()
db.collection('Cadastros').doc(codigo).get().then((doc) => {
var data= doc.data()
//alert(data.IMG4)
if(!data.End||data.End==''){
document.getElementById("OBSText").innerHTML='Sem mais!'
}else{
document.getElementById("OBSText").innerHTML=data.End
}
document.getElementById('tituloH2').innerHTML=data.Titulo
document.getElementById('codigoH2').innerHTML=data.Código
document.getElementById('img1').src= data.IMG1;
if(!data.Img1T||data.Img1T==''){
document.getElementById('h3img1').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img1').innerHTML=data.Img1T
}
document.getElementById('img2').src=data.IMG2;
if(!data.Img2T||data.Img2T==''){
document.getElementById('h3img2').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img2').innerHTML=data.Img2T
}
document.getElementById('img3').src=data.IMG3;
if(!data.Img3T||data.Img3T==''){
document.getElementById('h3img3').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img3').innerHTML=data.Img3T
}
document.getElementById('img4').src=data.IMG4;
if(!data.Img4T||data.Img4T==''){
document.getElementById('h3img4').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img4').innerHTML=data.Img4T
}
document.getElementById('img5').src=data.IMG5;
if(!data.Img5T||data.Img5T==''){
document.getElementById('h3img5').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img5').innerHTML=data.Img5T
}
document.getElementById('img6').src=data.IMG6;
if(!data.Img6T||data.Img6T==''){
document.getElementById('h3img6').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img6').innerHTML=data.Img6T
}
document.getElementById('img7').src=data.IMG7;
if(!data.Img7T||data.Img7T==''){
document.getElementById('h3img7').innerHTML="#Rutimóveis"
}else{
document.getElementById('h3img7').innerHTML=data.Img7T
}

document.getElementById('rua').innerHTML=`Rua: ${data.Rua}`
document.getElementById('numero').innerHTML=`Nº: ${data.Numero}`
document.getElementById('bairro').innerHTML=`Bairro: ${data.Bairro}`
document.getElementById('cidade').innerHTML=`Cidade: ${data.Cidade}`
document.getElementById('uf').innerHTML=`UF:(${data.UF})`
if(!data.ValorC||data.ValorC==''){
} else{
document.getElementById('venda').innerHTML=`Compra: ${data.ValorC} R$`
}
if(!data.ValorA||data.ValorA==''){
}else{
document.getElementById('locaçao').innerHTML=`Locação: ${data.ValorA} R$`
}
if(!data.VCond||data.VCond==''){
}else{
document.getElementById('condominio').innerHTML=`Condomínio: ${data.VCond} R$`
}
if(!data.Viptu||data.Viptu==''){
}else{
document.getElementById('iptu').innerHTML=`IPTU: ${data.Viptu} R$`
}
if(!data.AreaM||data.AreaM==''){
}else{
document.getElementById('areaConst').innerHTML=`Area construida: ${data.AreaM}m`
}
if(!data.Suite||data.Suite==''){
}else{
document.getElementById('suite').innerHTML=`🛏️ [${data.Suite}] Suíte`
}
if(!data.Quartos||data.Quartos==''){
}else{
document.getElementById('quartos').innerHTML=`🛏️ [${data.Quartos}]  Quartos `
}
if(!data.Banheiro||data.Banheiro==''){
}else{
document.getElementById('banheiro').innerHTML=`🚿 [${data.Banheiro}] Banheiros `
}
if(!data.Quintal||data.Quintal==''){
}else{
if(!data.QuintalM||data.QuintalM==''){
document.getElementById('quintal').innerHTML=`Quintal: [${data.Quintal}] `
}else{
document.getElementById('quintal').innerHTML=`Quintal: [${data.Quintal}] - ${data.QuintalM}m `
}
}
if(!data.Garagem||data.Garagem==''){
}else{
document.getElementById('garagem').innerHTML=`🚗 [${data.Garagem}] Vagas/Garagem: `
}
if(!data.Piscina||data.Piscina==''){
}else{
if(!data.PiscinaM||data.PiscinaM==''){
document.getElementById('piscina').innerHTML=`<img id='pcs' src="../src/piscina.png" alt="Piscina" width="300">  [${data.Piscina}] Piscina `
}else{
document.getElementById('piscina').innerHTML=`<img id='pcs'  src="../src/piscina.png" alt="Piscina" width="300">   [${data.Piscina}] Piscina: ${data.PiscinaM}m `
}
}
if(data.Duplex=='sim'){
document.getElementById('duplex').innerHTML=`(Duplex) `
}else{
}
if(data.Triplex=='sim'){
document.getElementById('triplex').innerHTML=`(Triplex) `
}else{
}
if(!data.Desconto||data.Desconto==''){
}else{
document.getElementById('desconto').innerHTML=`Avista desconto de (${data.Desconto})% `
}
}).catch((err) => {

});

//Botão WhatsApp
function corretora(){
vibração()
var telefone=`11948865333`
var Titulo_=document.getElementById('tituloH2').innerHTML;
var codigo_=document.getElementById('codigoH2').innerHTML;
var IMG_=document.getElementById('img1').src;
var pag="https://rutimoveis.netlify.app/"
var result= `Pagina Web: ${pag}\n\n${Titulo_} \n\n Imagem do imóvel: ${IMG_} \n\n Código: ${codigo_} `
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= ${encodeURIComponent(result)}  `;
window.open(url, "_blank");
Swal.fire(`WhatsApp`,``,'success') 
}

//Alerta iniciar
function AlertaInicial(){
Swal.fire({
title: ``,
text: `Aguarde...`,
html:` <h2>Preparando tudo...</h2>
`,
background: 'rgba(255, 255, 255, 0)', // Cor de fundo
color: '#00c3ffff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_alert' // Aplica a classe CSS personalizada
},
didOpen: () => {
Swal.showLoading();
document.body.style.paddingRight = '0px';        
}
});
setTimeout(function(){
vibração()
Swal.close()
},7000)
}
AlertaInicial()

//FullScrem imagens swal
function img1(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">

`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img1').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img2(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img2').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img3(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img3').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img4(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img4').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img5(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img5').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img6(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img6').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}
function img7(){
vibração()
Swal.fire({
title: '',
html: `<img id='imgSwal' src="3" style="width:85%; height:85%;">
`,
showConfirmButton: false,
background: 'transparent',
backdrop: `
rgba(0,0,0,0.9)
`,
allowOutsideClick: true,
customClass: {
popup: 'fullscreen-popup'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgSwal').src= document.getElementById('img7').src;
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
}


//Time Relogio
setInterval(function() {
const newDate = new Date()
var dia = String(newDate.getDate()).padStart(2, '0');
var mes = String(newDate.getMonth() + 1).padStart(2, '0');
var ano = String(newDate.getFullYear()).padStart(2, '0')
var data = `${dia}/${mes}/${ano}`
const now = new Date();
const hours = now.getHours().toString().padStart(2, '0');
const minutes = now.getMinutes().toString().padStart(2, '0');
const seconds = now.getSeconds().toString().padStart(2, '0');
const timeString = `${hours}:${minutes}:${seconds}`;
sessionStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
}, 1000)

// Tela Cheia
function toggleFullScreen() {
vibração()
if ((document.fullScreenElement && document.fullScreenElement !== null) ||
(!document.mozFullScreen && !document.webkitIsFullScreen)) {
if (document.documentElement.requestFullScreen) {
document.documentElement.requestFullScreen();
} else if (document.documentElement.mozRequestFullScreen) {
document.documentElement.mozRequestFullScreen();
} else if (document.documentElement.webkitRequestFullScreen) {
document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
}
} else {
if (document.cancelFullScreen) {
document.cancelFullScreen();
} else if (document.mozCancelFullScreen) {
document.mozCancelFullScreen();
} else if (document.webkitCancelFullScreen) {
document.webkitCancelFullScreen();
}
}
}


//função vibratória

function vibração() {
var vib = localStorage.getItem('Vibar')
if (vib === 'on' && navigator.vibrate) {
navigator.vibrate(200);
}
}

window.addEventListener("orientationchange", function() {
  if (window.orientation === 90 || window.orientation === -90) {
    alert("Por favor, use o dispositivo na orientação vertical.");
  }
});



