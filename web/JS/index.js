


//lista de destaques
var itens1= 0
var listD = document.getElementById('listDestaque');
listD.innerHTML = ''
var firebaseConfigure = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigure);
var db = firebase.firestore()
var produtosRef = db.collection(`Cadastros`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if(doc.EstadoAT==''&& doc.Lista1=='Destaques'){
itens1++
// Criando os elementos
var li = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var lbl3 = document.createElement('label');
var lbl4 = document.createElement('label');
var lbl5 = document.createElement('label');
var lbl6 = document.createElement('label');
var lbl7 = document.createElement('label');
var lbl8 = document.createElement('label');
var btn = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
// Atribuindo IDs e classes
li.id = 'li_';
div1.id = 'div1_';
div2.id = 'div2_';
div3.id = 'div3_';
div4.id = 'div4_';
img.id = 'imgg';
img.src = doc.IMG1; // Imagem do imóvel
lbl1.id = 'lbl_1';
lbl2.id = 'lbl_2';
lbl3.id = 'lbl_3';
lbl4.id = 'lbl_4';
lbl5.id = 'lbl_5';
lbl6.id = 'lbl_6';
lbl7.id = 'lbl_7';
lbl8.id = 'lbl_8';
// Conteúdo dos labels
lbl1.textContent = doc.Titulo;
lbl2.textContent = `Bairro: ${doc.Bairro}`;
if(!doc.ValorA|| doc.ValorA==''){
lbl3.textContent = ``;
}else{
lbl3.textContent = `Locação: ${doc.ValorA} R$`||'';
};
if(!doc.ValorC|| doc.ValorC==''){
lbl4.textContent = ``||'';
}else{
lbl4.textContent = `Compra ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️(?)`
}else{
lbl5.textContent = `🛏️(${doc.Quartos})`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿(?)`
}else{
lbl6.textContent = `🚿(${doc.Banheiro})`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗(?)`
}else{
lbl7.textContent = `🚗(${doc.Garagem})`
};
lbl8.textContent = `${doc.Código}`
lbl8.title='Código do Imóvel'
lbl5.title='Quantidade de Quartos';
lbl6.title='Quantidade de Banheiros';
lbl7.title='Quantidade de Vagas de carro';
btn.id = 'btn';
btn.textContent = 'Ver Imóvel';
btn.title='Ver ficha completa do Imóvel'
btn2.id = 'btn2';
btn2.className = 'fa-brands fa-whatsapp';
btn2.title='Contato com Corretor via WhatsApp'
btn2.id = 'btn3';
btn3.className = 'fa-solid fa-square-share-nodes';
btn3.title='Compartilhar Imóvel'
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
div2.appendChild(document.createElement('br'));
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl3);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl4);
div3.appendChild(btn);
div3.appendChild(btn2);
div3.appendChild(btn3);
div4.appendChild(lbl5);
div4.appendChild(lbl6);
div4.appendChild(lbl7);
li.appendChild(div1);
li.appendChild(div2);
li.appendChild(div3);
li.appendChild(div4);
// Adicionando ao elemento principal (list)
listD.appendChild(li);
//sessionStorage.setItem('itensList1',itens)
document.getElementById('P_resutDestaqueIMV').innerHTML=`Total de ${itens1} Imóveis encontrados!`;
lbl8.addEventListener('click',function(){
Swal.fire({
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
Swal.fire(`${doc.Código}`,'Código do Imóvel')
});
btn2.addEventListener('click',function(){
sessionStorage.setItem('CodIMV',doc.Código)
sessionStorage.setItem('IMGIMV',doc.IMG1)     
whatsapp()
});
btn3.addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<br> 
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>   
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button><br><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${doc.IMG1}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img} \n\n Código: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
})
}else{
}
})
})

//Lista Inicial de imóveis
var itens2= 0
var listG = document.getElementById('listGeral');
listG.innerHTML = ''
var firebaseConfigure = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigure);
var db = firebase.firestore()
var produtosRef = db.collection(`Cadastros`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if(doc.EstadoAT==''){
itens2++
// Criando os elementos
var li = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var lbl3 = document.createElement('label');
var lbl4 = document.createElement('label');
var lbl5 = document.createElement('label');
var lbl6 = document.createElement('label');
var lbl7 = document.createElement('label');
var lbl8 = document.createElement('label');
var btn = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
// Atribuindo IDs e classes
li.id = 'li_';
div1.id = 'div1_';
div2.id = 'div2_';
div3.id = 'div3_';
div4.id = 'div4_';
img.id = 'imgg';
img.src = doc.IMG1; // Imagem do imóvel
lbl1.id = 'lbl_1';
lbl2.id = 'lbl_2';
lbl3.id = 'lbl_3';
lbl4.id = 'lbl_4';
lbl5.id = 'lbl_5';
lbl6.id = 'lbl_6';
lbl7.id = 'lbl_7';
lbl8.id = 'lbl_8';
// Conteúdo dos labels
lbl1.textContent = doc.Titulo;
lbl2.textContent = `Bairro: ${doc.Bairro}`;
if(!doc.ValorA|| doc.ValorA==''){
lbl3.textContent = ``;
}else{
lbl3.textContent = `Locação: ${doc.ValorA} R$`||'';
};
if(!doc.ValorC|| doc.ValorC==''){
lbl4.textContent = ``||'';
}else{
lbl4.textContent = `Compra ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️(?)`
}else{
lbl5.textContent = `🛏️(${doc.Quartos})`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿(?)`
}else{
lbl6.textContent = `🚿(${doc.Banheiro})`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗(?)`
}else{
lbl7.textContent = `🚗(${doc.Garagem})`
};
lbl8.textContent = `${doc.Código}`
lbl8.title='Código do Imóvel'
lbl5.title='Quantidade de Quartos';
lbl6.title='Quantidade de Banheiros';
lbl7.title='Quantidade de Vagas de carro';
btn.id = 'btn';
btn.textContent = 'Ver Imóvel';
btn.title='Ver ficha completa do Imóvel'
btn2.id = 'btn2';
btn2.className = 'fa-brands fa-whatsapp';
btn2.title='Contato com Corretor via WhatsApp'
btn2.id = 'btn3';
btn3.className = 'fa-solid fa-square-share-nodes';
btn3.title='Compartilhar Imóvel'
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
div2.appendChild(document.createElement('br'));
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl3);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl4);
div3.appendChild(btn);
div3.appendChild(btn2);
div3.appendChild(btn3);
div4.appendChild(lbl5);
div4.appendChild(lbl6);
div4.appendChild(lbl7);
li.appendChild(div1);
li.appendChild(div2);
li.appendChild(div3);
li.appendChild(div4);
// Adicionando ao elemento principal (list)
listG.appendChild(li);
//sessionStorage.setItem('itensList1',itens)
document.getElementById('P_resutTodosIMV').innerHTML=`Total de ${itens2} Imóveis encontrados!`;
lbl8.addEventListener('click',function(){
Swal.fire({
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
Swal.fire(`${doc.Código}`,'Código do Imóvel')
});
btn2.addEventListener('click',function(){
sessionStorage.setItem('CodIMV',doc.Código)
sessionStorage.setItem('IMGIMV',doc.IMG1)     
whatsapp()
});
btn3.addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<br> 
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>   
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button><br><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${doc.IMG1}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img} \n\n Código: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
})
}else{
}
})
})
function clickSelect(){
document.getElementById('inputPesquisa').value=''
sessionStorage.setItem('ValorPesquisa','')
}

//Pesquisar
sessionStorage.setItem('ValorPesquisa','')
function pesqSet(){
document.getElementById('selectListId_moradia').value='';  
document.getElementById('selecVL').value=''; 
var pesq=document.getElementById('inputPesquisa').value;
sessionStorage.setItem('ValorPesquisa',pesq)
sessionStorage.setItem('itensList1','')
Buscar()
};
//fechar lista pesquisa e busca
function fecharResulP(){
sessionStorage.setItem('itensList1','')  
var list = document.getElementById('listPesq');
list.innerHTML = '';
document.getElementById('inputPesquisa').value='';
document.getElementById('P_resutPesquisa').innerHTML=''
sessionStorage.setItem('ValorPesquisa','')
document.getElementById('resutPesquisa').style.display='none'
}
//botão Buscar pesquisa
function Buscar(){
sessionStorage.setItem('CodIMV','')   
sessionStorage.setItem('IMGIMV','')  
sessionStorage.setItem('itensList1','')
document.getElementById('P_resutPesquisa').innerHTML=''
AlertaListaV()
var itens3 = 0;
var select1=document.getElementById('selectListId_moradia').value;  
var select2=document.getElementById('selecVL').value; 
var resutPesq=sessionStorage.getItem('ValorPesquisa')
if(!resutPesq|| resutPesq==''){
}else{
select1='Cadastros'
}
var list = document.getElementById('listPesq');
list.innerHTML = ''
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
var db = firebase.firestore()
var produtosRef = db.collection(`${select1}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
function removerAcentos(texto) {
return (texto ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
if(
removerAcentos(resutPesq.toLowerCase()) === removerAcentos(doc.Código?.toLowerCase()) ||
removerAcentos(resutPesq.toLowerCase()) === removerAcentos(doc.Cidade?.toLowerCase()) ||
removerAcentos(resutPesq.toLowerCase()) === removerAcentos(doc.Bairro?.toLowerCase())||

select1===doc.Lista1 && select2=='Compra ou Locação'||select1===doc.Lista1 && select2===doc.Lista2||select1===doc.Lista1 && doc.Lista2=='Compra ou Locação'
) {
if(doc.EstadoAT==''){
itens3++
// Criando os elementos
var li = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var div3 = document.createElement('div');
var div4 = document.createElement('div');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var lbl3 = document.createElement('label');
var lbl4 = document.createElement('label');
var lbl5 = document.createElement('label');
var lbl6 = document.createElement('label');
var lbl7 = document.createElement('label');
var lbl8 = document.createElement('label');
var btn = document.createElement('button');
var btn2 = document.createElement('button');
var btn3 = document.createElement('button');
// Atribuindo IDs e classes
li.id = 'li_';
div1.id = 'div1_';
div2.id = 'div2_';
div3.id = 'div3_';
div4.id = 'div4_';
img.id = 'imgg';
img.src = doc.IMG1; // Imagem do imóvel
lbl1.id = 'lbl_1';
lbl2.id = 'lbl_2';
lbl3.id = 'lbl_3';
lbl4.id = 'lbl_4';
lbl5.id = 'lbl_5';
lbl6.id = 'lbl_6';
lbl7.id = 'lbl_7';
lbl8.id = 'lbl_8';
// Conteúdo dos labels
lbl1.textContent = doc.Titulo;
lbl2.textContent = `Bairro: ${doc.Bairro}`;
if(!doc.ValorA|| doc.ValorA==''){
lbl3.textContent = ``;
}else{
lbl3.textContent = `Locação: ${doc.ValorA} R$`||'';
};
if(!doc.ValorC|| doc.ValorC==''){
lbl4.textContent = ``||'';
}else{
lbl4.textContent = `Compra ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️(?)`
}else{
lbl5.textContent = `🛏️(${doc.Quartos})`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿(?)`
}else{
lbl6.textContent = `🚿(${doc.Banheiro})`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗(?)`
}else{
lbl7.textContent = `🚗(${doc.Garagem})`
};
lbl8.textContent = `${doc.Código}`
lbl8.title='Código do Imóvel'
lbl5.title='Quantidade de Quartos';
lbl6.title='Quantidade de Banheiros';
lbl7.title='Quantidade de Vagas de carro';
btn.id = 'btn';
btn.textContent = 'Ver Imóvel';
btn.title='Ver ficha completa do Imóvel'
btn2.id = 'btn2';
btn2.className = 'fa-brands fa-whatsapp';
btn2.title='Contato com Corretor via WhatsApp'
btn2.id = 'btn3';
btn3.className = 'fa-solid fa-square-share-nodes';
btn3.title='Compartilhar Imóvel'
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
div2.appendChild(document.createElement('br'));
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl3);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl4);
div3.appendChild(btn);
div3.appendChild(btn2);
div3.appendChild(btn3);
div4.appendChild(lbl5);
div4.appendChild(lbl6);
div4.appendChild(lbl7);
li.appendChild(div1);
li.appendChild(div2);
li.appendChild(div3);
li.appendChild(div4);
// Adicionando ao elemento principal (list)
list.appendChild(li);
sessionStorage.setItem('itensList1',itens3)
document.getElementById('P_resutPesquisa').innerHTML=`Total de ${itens3} Imóveis encontrados!`;
document.getElementById('resutPesquisa').style.display='block'
document.getElementById('a_result').click()
lbl8.addEventListener('click',function(){
Swal.fire({
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
Swal.fire(`${doc.Código}`,'Código do Imóvel')
});
btn2.addEventListener('click',function(){
sessionStorage.setItem('CodIMV',doc.Código)
sessionStorage.setItem('IMGIMV',doc.IMG1)     
whatsapp()
});
btn3.addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<br> 
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>   
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button><br><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${doc.IMG1}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img} \n\n Código: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
})
}else{
}
} else{
}
})
})
}
//Abrir Pesquisa
document.getElementById('labelPesquisa').style.display = 'none'
function Pesquisar() {
var resp = document.getElementById('labelPesquisa').style.display;
var IText = document.getElementById('pesq-3');
if (!resp || resp == 'none') {
document.getElementById('labelPesquisa').style.display = 'block'
IText.className = 'fa-solid fa-delete-left';
document.getElementById('a_inputp').click()
} else {
document.getElementById('labelPesquisa').style.display = 'none'
IText.className = 'fa-solid fa-magnifying-glass';
sessionStorage.setItem('ValorPesquisa','')
document.getElementById('inputPesquisa').value='';
}
}
//Menu Lateral
sessionStorage.setItem('MENULateral', '')
var BTN = document.getElementById('heaad_menu');
BTN.className = 'fa-solid fa-bars'
function Menu() {
var BTN = document.getElementById('heaad_menu');
var MENU_ = sessionStorage.getItem('MENULateral')
if (!MENU_ || MENU_ == '') {
BTN.className = 'fa-solid fa-delete-left'
sessionStorage.setItem('MENULateral', 'Aberto')
document.getElementById("menu_lateral").classList.add("menu-ativo");
} else {
BTN.className = 'fa-solid fa-bars'
sessionStorage.setItem('MENULateral', '')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
}
}
//fechar Menu
function fecharMenu() {
sessionStorage.setItem('MENULateral', '')
document.getElementById("menu_lateral").classList.remove("menu-ativo");
}
//Exite menu
function exit() {
Menu()
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
//Adiministração Password
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
var psw = firebase.firestore()
psw.collection('Password').doc('passwords').get().then((doc)=>{
var data= doc.data()
sessionStorage.setItem('PassW01',data.Senha);
sessionStorage.setItem('PassW02',data.Master1);
sessionStorage.setItem('PassW03',data.Master2);
})
//Botão Admin
function ADMIN() {
Swal.fire({
title: ``,
html: `
<label>Password administração! <i class="fa-sharp-duotone fa-solid fa-lock"></i><br><br>
<input id='inputSwalAdimin' type='password' placeholder='Password'><i id='visao' class="fa-solid fa-eye"></i>
<br> <br>  
<button id="enter" title="start">Enter </button>  <button id='sair_'>Cancelar</button>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_login_SwlADM' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById("inputSwalAdimin").blur();
document.getElementById('visao').addEventListener('click', function() {
var visao_= document.getElementById('inputSwalAdimin');
var classe= document.getElementById('visao');
if(visao_.type=='password'){
visao_.type='text'
classe.className='fa-solid fa-eye-low-vision'
} else{
visao_.type='password'
classe.className='fa-solid fa-eye'
}
})
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('enter').addEventListener('click',function(){
var resp= document.getElementById('inputSwalAdimin').value;
var pass1= sessionStorage.getItem('PassW01');
var pass2= sessionStorage.getItem('PassW02');
var pass3=  sessionStorage.getItem('PassW03')
//swal(`P1= ${pass1} , P2= ${pass2},P3= ${pass3}`)
if(resp===pass1|| resp===pass2||resp===pass3 ){
window.open('paginas/cadastro.html', '_blank')
Swal.close()
}else{
Swal.fire('Senha Incorreta!','','error')
}
});
}
//Alerta de lista vazia
sessionStorage.setItem('itensList1','')
function AlertaListaV(){
Swal.fire({
title: ``,
text: `Aguarde...`,
background: 'rgba(255, 255, 255, 0)', // Cor de fundo
color: '#01d9ffff', // Cor do texto
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
var respl=  sessionStorage.getItem('itensList1')
if(!respl||respl==''){
Swal.fire({
title: `Lista Vazia! `,
text: ``,
allowOutsideClick: false,
showConfirmButton: true,
customClass: {
popup: 'my-custom_alertlist' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
});
fecharResulP()
document.getElementById('itensListInit').style.display='none'
}else{
Swal.close()
}
},7000)
}
//Alerta iniciar
function AlertaInicial(){
Swal.fire({
title: ``,
text: `Aguarde...`,
html:` <h2>Bem Vindo(a)!</h2>
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
Swal.close()
},7000)
}
AlertaInicial()
function CompartilhamentoP(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
Swal.fire({
title: `Compartilhar <i id='i_compart'  class="fa-solid fa-square-share-nodes"></i>`,
html: `
<br> 
<button id="face" title="">Facebook <i class="fa-brands fa-facebook-f"></i></button>  
<br><br>   
<button id="whats" title="">WhatsApp <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button><br><br>
`,
background: 'rgb(255, 255, 255)', // Cor de fundo
color: 'black', // Cor do texto
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_compartilhar' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
var url = "https://rutimoveis.netlify.app/";
var whatsappMessage =`Pagina Web: ${url}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
}
//Whatsapp Rute sem informação aicionais
function ZAP(){
whats()
}
function what(){
whats()
}
function whats(){
var tell= sessionStorage.getItem('Tel_Whats');
var imagem= sessionStorage.getItem('Foto_zap');
if(!tell||tell==''){
var telefone=`11948865333`
}else{
var telefone=`${tell}`
};
if(!imagem||imagem==''){
var imagem=`src/Rute.jpg`
}else{
};
Swal.fire({
title: `WhatsApp <i id='i_whats' class="fa-brands fa-whatsapp"></i>`,
html: `
<div id='divWhats'>
<img id='imgWhats'src=''> <label>Rute ( corretora )</label> </div>
<p>Estou aguardando o seu contato!
<br>  <br>   
<button id="btn_whats" title="">Mensagem <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_login_Swl' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgWhats').src=`${imagem}`
document.getElementById('imgWhats').addEventListener('click',function(){
swal('','',`${imagem}`)
})
document.getElementById('btn_whats').addEventListener('click',function(){
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= Pedido de contato Rute corretora-(Rutimóveis)`;
window.open(url, "_blank");
Swal.fire(`WhatsApp`,``,'success')       
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.fire('Sair')
Swal.close()
});
}
// WhatsApp com Informações do imóvel
function whatsapp(){
var imgIMV= sessionStorage.getItem('IMGIMV')     
var imovel= sessionStorage.getItem('CodIMV')    
var tell= sessionStorage.getItem('Tel_Whats');
var imagem= sessionStorage.getItem('Foto_zap');
if(!tell||tell==''){
var telefone=`11948865333`
}else{
var telefone=`${tell}`
};
if(!imagem||imagem==''){
var imagem=`src/Rute.jpg`
}else{
};
Swal.fire({
title: `WhatsApp <i id='i_whats' class="fa-brands fa-whatsapp"></i>`,
html: `
<div id='divWhats'>
<img id='imgWhats'src=''> <label>Rute ( corretora )</label> </div>
<p>Estou aguardando o seu contato!
<br>  <br>   
<button id="btn_whats" title="">Mensagem <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
<br><br><br><button id='sair_'>Cancelar</button>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_login_Swl' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('imgWhats').src=`${imagem}`
document.getElementById('imgWhats').addEventListener('click',function(){
swal('','',`${imagem}`)
})
document.getElementById('btn_whats').addEventListener('click',function(){
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= Rute corretora (cod: ${imovel}) Imóvel - Imagem do Imóvel: ${encodeURIComponent(imgIMV)}`;
window.open(url, "_blank");
Swal.fire(`WhatsApp`,``,'success')       
});
document.getElementById('sair_').addEventListener('click',function(){
Swal.fire('Sair')
Swal.close()
});
}
//Facebook
function face(){
facebook()
}
function facebook(){
var url_face=localStorage.getItem('URL_facebook')
if(!url_face ||url_face==''){
var URL_facebook='https://www.facebook.com/share/1YP8t9Q7uR/'
}else{
var URL_facebook= url_face
}
window.open(URL_facebook,'_blank')
Swal.fire(`Facebook`,``,'success')
}; 
//Instagran
function INSTA(){
instagran()
}
function instagran(){
var URL_Intagran= localStorage.getItem('URL_Intagran')
if(!URL_Intagran|| URL_Intagran==''){
var url_Inst='https://www.instagram.com/rute.teixeira.370/profilecard/?igsh=MWltMzh6NjMwbXZrMA=='
} else{
var url_Inst= URL_Intagran;
}
Swal.fire(`Instagran`,``,'success')
window.open(url_Inst,'_blank')
};

