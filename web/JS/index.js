


//Click card casa
function cardCasa(){
  document.getElementById('selectListId_moradia').value='Casas';
document.getElementById('selecVL').value='Compra ou Locação';
setTimeout(function(){
Buscar()
},1000)
}
//Click card sobrado
function cardSobrado(){
  document.getElementById('selectListId_moradia').value='Sobrados';
document.getElementById('selecVL').value='Compra ou Locação';
setTimeout(function(){
Buscar()
},1000)
}
//Click card apartamentos
function cardAp(){
  document.getElementById('selectListId_moradia').value='Apartamentos';
document.getElementById('selecVL').value='Compra ou Locação';
setTimeout(function(){
Buscar()
},1000)
}
sessionStorage.setItem('ItensTemp','')
setTimeout(function(){
var temp= sessionStorage.getItem('ItensTemp')
//alert(temp)
if(!temp||temp==''){
document.getElementById('body03').style.display='none'
document.getElementById('brTemp').style.display='block'
} else{
document.getElementById('body03').style.display='block'
document.getElementById('brTemp').style.display='none'
}
},7000);

//lista de destaques
sessionStorage.setItem('Mostruario','')
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
var produtosRef = db.collection(`Destaques`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var tempItens= querySnapshot.size
if( !doc.EstadoAT|| doc.EstadoAT===''){
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
lbl4.textContent = `Compra: ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️[?]`
}else{
lbl5.textContent = `🛏️[${doc.Quartos}]`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿[?]`
}else{
lbl6.textContent = `🚿[${doc.Banheiro}]`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗[?]`
}else{
lbl7.textContent = `🚗[${doc.Garagem}]`
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
img.alt=`${doc.Titulo}`
li.title=`${doc.Titulo}`
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
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

sessionStorage.setItem('ItensTemp',tempItens)
//alert(tempItens)
btn.addEventListener('click',function(){
sessionStorage.setItem('Mostruario',doc.Código)
window.open('paginas/mostruario.html','_blank')
});
//click imagem
img.addEventListener('click',function(){
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

document.getElementById('imgSwal').src= doc.IMG1
//alert(data.IMG1)
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
});
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
sessionStorage.setItem('Titulo_MV',doc.Titulo)  
whatsapp()
});
btn3.addEventListener('click',function(){
vibração()
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
  vibração()
Swal.close()
});
document.getElementById('face').addEventListener('click',function(){
 vibração()
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
 vibração()
var pag = `https://rutimoveis.netlify.app/paginas/mostruario.html/?codigo=${doc.Código}`;
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${pag}`;
var cod=`${doc.Código}`;
var whatsappMessage =`Pagina Web: ${url}\n\n🏡 ${img} \n\n Código: ${cod}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
})
}else{
}
})
})

//Lista Inicial de imóveis
sessionStorage.setItem('Mostruario','')
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
lbl4.textContent = `Compra: ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️[?]`
}else{
lbl5.textContent = `🛏️[${doc.Quartos}]`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿[?]`
}else{
lbl6.textContent = `🚿[${doc.Banheiro}]`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗[?]`
}else{
lbl7.textContent = `🚗[${doc.Garagem}]`
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
img.alt=`${doc.Titulo}`
li.title=`${doc.Titulo}`
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
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
btn.addEventListener('click',function(){
sessionStorage.setItem('Mostruario',doc.Código)
window.open('paginas/mostruario.html','_blank')
});

//click imagem
img.addEventListener('click',function(){
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

document.getElementById('imgSwal').src= doc.IMG1
//alert(data.IMG1)
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})
});

//sessionStorage.setItem('itensList1',itens)
document.getElementById('P_resutTodosIMV').innerHTML=`Total de ${itens2} Imóveis encontrados!`;
lbl8.addEventListener('click',function(){
  vibração()
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
sessionStorage.setItem('Titulo_MV',doc.Titulo)    
whatsapp()
});
btn3.addEventListener('click',function(){
vibração()
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

var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
var pag = `https://rutimoveis.netlify.app/paginas/mostruario.html/?codigo=${doc.Código}`
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${pag}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n🏡 ${img} \n\n Código: ${cod}`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;
window.open(whatsappLink, "_blank");
});
})
}else{
}
})
})

//click no select oque procura, 'limpa os campos para nova pesquisa'.
function clickSelect(){
document.getElementById('inputPesquisa').value=''
sessionStorage.setItem('ValorPesquisa','')
}

//Pesquisar
document.getElementById("pesq-1").addEventListener("keydown", function(event) {
if (event.key === "Enter") {
// Chama a função desejada
pesqSet();
}
});
sessionStorage.setItem('ValorPesquisa','')
function pesqSet(){
document.getElementById('selectListId_moradia').value='';  
var pesq=document.getElementById('inputPesquisa').value;
sessionStorage.setItem('ValorPesquisa',pesq)
sessionStorage.setItem('itensList1','')
document.getElementById('selecVL').value='Compra ou Locação'

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
vibração()
sessionStorage.setItem('CodIMV','')   
sessionStorage.setItem('IMGIMV','')  
sessionStorage.setItem('itensList1','')
document.getElementById('P_resutPesquisa').innerHTML=''
AlertaListaV()
                            

sessionStorage.setItem('Mostruario','')
var itens3 = 0;
var select2=document.getElementById('selecVL').value; 
var resutPesq = (sessionStorage.getItem('ValorPesquisa') || '').trim();
if(!resutPesq|| resutPesq==''){
  var select1=document.getElementById('selectListId_moradia').value;  
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
lbl4.textContent = `Compra: ${doc.ValorC} R$`||'';
};
if(!doc.Quartos||doc.Quartos==''){
lbl5.textContent = `🛏️[?]`
}else{
lbl5.textContent = `🛏️[${doc.Quartos}]`
};
if(!doc.Quartos||doc.Banheiro==''){
lbl6.textContent = `🚿[?]`
}else{
lbl6.textContent = `🚿[${doc.Banheiro}]`
};
if(!doc.Quartos||doc.Garagem==''){
lbl7.textContent = `🚗[?]`
}else{
lbl7.textContent = `🚗[${doc.Garagem}]`
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
img.alt=`${doc.Titulo}`
li.title=`${doc.Titulo}`
// Montando a estrutura
div1.appendChild(img);
div2.appendChild(lbl1);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl2);
div2.appendChild(document.createElement('br'));
div2.appendChild(lbl8);
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

sessionStorage.setItem('ffpsquisa', resutPesq)
document.getElementById('a_result').click()
btn.addEventListener('click',function(){
sessionStorage.setItem('Mostruario',doc.Código)
window.open('paginas/mostruario.html','_blank')

});
//click imagem
img.addEventListener('click',function(){
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
document.getElementById('imgSwal').src= doc.IMG1
//alert(data.IMG1)
document.getElementById('imgSwal').addEventListener('click', function(){
    Swal.close()
})

});
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
sessionStorage.setItem('Titulo_MV',doc.Titulo)  
whatsapp()
});
btn3.addEventListener('click',function(){
vibração()
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
vibração()
var url = encodeURIComponent("https://rutimoveis.netlify.app/");
window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, target="_blank", rel="noopener noreferrer");
});
document.getElementById('whats').addEventListener('click',function(){
vibração()
var pag = `https://rutimoveis.netlify.app/paginas/mostruario.html/?codigo=${doc.Código}`
var url = "https://rutimoveis.netlify.app/";
var img = `${doc.Titulo}: ${pag}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n🏡 ${img} \n\n Código: ${cod}`;
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
document.getElementById('supenpesquisa').style.display = 'none'
function Pesquisar() {
vibração()
var resp = document.getElementById('supenpesquisa').style.display;
var IText = document.getElementById('pesq-3');
if (!resp || resp == 'none') {
document.getElementById('supenpesquisa').style.display = 'block'
IText.className = 'fa-solid fa-delete-left';
document.getElementById('a_inputp').click()
} else {
document.getElementById('supenpesquisa').style.display = 'none'
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
vibração()
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
Menu() 
}
//Exite menu
function exit() {
Menu()
vibração()
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
vibração()
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
// Escuta a tecla Enter dentro do popup
var popup = Swal.getPopup();
popup.addEventListener("keydown", function(event) {
if (event.key === "Enter") {
document.getElementById("enter").click();
}}
)
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
vibração()
var resp= document.getElementById('inputSwalAdimin').value;
var pass1= sessionStorage.getItem('PassW01');
var pass2= sessionStorage.getItem('PassW02');
var pass3=  sessionStorage.getItem('PassW03')
//swal(`P1= ${pass1} , P2= ${pass2},P3= ${pass3}`)
if(resp===pass1|| resp===pass2||resp===pass3 ){
window.open('paginas/cadastro.html', '_blank')
Swal.close()
}else{
setTimeout(function(){
Swal.fire('Senha Incorreta!','','error')
},1000)
}
});
Menu() 
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
var docresp=sessionStorage.getItem('ffpsquisa')
if(!docresp||docresp==''){

}else{
  Pesquisar() 
}

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
vibração()
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
Menu() 
vibração()
}
function what(){
whats()
vibração()
}
function whats(){
if (navigator.vibrate) {
navigator.vibrate(200); // vibra por 200ms
}
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
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
})
document.getElementById('btn_whats').addEventListener('click',function(){
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= Pedido de contato Rute corretora-(Rutimóveis)`;
window.open(url, "_blank");
Swal.fire(`WhatsApp`,``,'success')       
});

}

// WhatsApp com Informações do imóvel
function whatsapp(){
vibração()
var titulo= sessionStorage.getItem('Titulo_MV') 
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
document.getElementById('sair_').addEventListener('click',function(){
Swal.close()
})
document.getElementById('btn_whats').addEventListener('click',function(){
var pagina="https://rutimoveis.netlify.app/";
var pag = `https://rutimoveis.netlify.app/paginas/mostruario.html/?codigo=${imovel}`
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var resul=`Pagina web: ${pagina} \n\n${titulo}\n\n🏡 Ver Imóvel: ${pag}\n\n Código: ${imovel}`
var url = "https://wa.me/"+`${numero}?text=${encodeURIComponent(resul)}`;
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
Menu() 
}
function facebook(){
vibração()
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
vibração()
instagran()
Menu() 
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
function init(){
Menu() 
}
function sobre(){
Menu() 
}

//Vibração no menu lateral

// Recupera valor salvo
var vibrar = localStorage.getItem('Vibar') || 'off'; // valor padrão: 'off'

// Exibe alerta com opção marcada
function Config(){
Swal.fire({
title: `Opção atual: ${vibrar === 'on' ? '🔛 On' : '🔘 Off'}`,
input: 'radio',
inputOptions: {
on: '🔛 On',
off: '🔘 Off'
},
inputValue: vibrar, // marca a opção salva
inputValidator: (value) => {
if (!value) {
return 'Você precisa escolher uma opção!';
}
},
showCancelButton: false,
confirmButtonText: 'Confirmar',
customClass: {
popup: 'my-custom_vibra_Swl'
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
}).then((result) => {
if (result.isConfirmed) {
localStorage.setItem('Vibar', result.value); // salva nova escolha
Swal.fire(`Você escolheu: ${result.value === 'on' ? 'On' : 'Off'}`);
setTimeout(function(){
window.location.reload()
},1000)
}
});
}

//função vibratória
function vibração() {
var vib = localStorage.getItem('Vibar')
if (vib === 'on' && navigator.vibrate) {
navigator.vibrate(200);
}}



document.addEventListener('DOMContentLoaded', function () {
const notaAVStars = parseInt(localStorage.getItem('AvaliaçãoStar'));
if (notaAVStars) {
const estrelasAtivas = notaAVStars / 2;
const labels = document.querySelectorAll('.label-estrela');
labels.forEach((label, index) => {
label.style.color = index < estrelasAtivas ? '#fc0' : '#ccc';
document.getElementById('lblNotaAV').innerHTML=`Nota ${notaAVStars}`
});
}
});

const estrelas = document.querySelectorAll('.estrelas input');
const labels = document.querySelectorAll('.label-estrela');

estrelas.forEach((estrela, index) => {
estrela.addEventListener('change', () => {
const nota = (index + 1) * 2;
localStorage.setItem('AvaliaçãoStar', nota);

labels.forEach((label, i) => {
label.style.color = i <= index ? '#fc0' : '#ccc';
});

// swal(`${nota}`, '', 'success');
loginComGoogle()
document.getElementById('lblNotaAV').innerHTML=`Nota ${nota}`
});
});


//login google

var firebaseConfig = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
// Inicializa o Firebase apenas uma vez
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

// Referências
var auth = firebase.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // força seleção de conta
var db = firebase.firestore();


// Controle para evitar múltiplos popups
let loginEmAndamento = false;

// Função de login
function loginComGoogle() {
var stars= parseInt(localStorage.getItem('AvaliaçãoStar'));
var msm= localStorage.getItem('InfoMSM')
if (loginEmAndamento) return;
loginEmAndamento = true;

auth.signInWithPopup(provider)
.then((result) => {
loginEmAndamento = false;
const user = result.user;
const userData = {
nome: user.displayName,
email: user.email,
foto: user.photoURL,
uid: user.uid,
Stars: stars,
Mensagem:msm,
criadoEm: firebase.firestore.FieldValue.serverTimestamp()

};

// Salva no Firestore
db.collection("UsersPag").doc(user.uid).set(userData)
.then(() => {
console.log("Usuário salvo no Firestore!");
document.getElementById("user-photo").src = user.photoURL;
document.getElementById("user-name").textContent = "Olá, " + user.displayName;
document.getElementById("user-email").textContent = user.email;
document.getElementById('user-photo').style.display='block'
document.getElementById('user-name').style.display='block'
document.getElementById('user-email').style.display='block'
document.getElementById('infoComent').style.display='block'
document.getElementById('verlistInfo').style.display='block'
document.getElementById('avisoinfo').style.display='none'
localStorage.setItem('FotoUser', user.photoURL);
localStorage.setItem('NomeUser', user.displayName);
localStorage.setItem('EmalUser', user.email);

})
.catch((error) => {
console.error("Erro ao salvar no Firestore:", error);
});
})
.catch((error) => {
loginEmAndamento = false;
Swal.fire("Google erro!: " ,`Ops! Não conseguimos autenticar você.`,'error');
console.error("Erro no login:", error);
});
}


//Logado?

setTimeout(function(){
var firebaseConfig = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
// Inicializa o Firebase apenas uma vez
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);

}
auth.onAuthStateChanged((user) => {
if (user) {
var stars= parseInt(localStorage.getItem('AvaliaçãoStar'));
var msm= localStorage.getItem('InfoMSM')
if (msm) {
 // alert(msm);
  var textoFormatado = msm.length > 15 ? msm.substring(0, 30) + '...' : msm;
  document.getElementById('user-mensagem').innerHTML = `#${textoFormatado}`;
}

// Usuário já está logado
document.getElementById("user-photo").src = user.photoURL;
document.getElementById("user-name").textContent = "Olá, " + user.displayName;
document.getElementById("user-email").textContent = user.email;
document.getElementById('btnGoogle').style.display='none'
document.getElementById('user-photo').style.display='block'
document.getElementById('user-name').style.display='block'
document.getElementById('user-email').style.display='block'
document.getElementById('infoComent').style.display='block'
document.getElementById('verlistInfo').style.display='block'
document.getElementById('avisoinfo').style.display='none'
localStorage.setItem('FotoUser', user.photoURL);
localStorage.setItem('NomeUser', user.displayName);
localStorage.setItem('EmalUser', user.email);


var dbb = firebase.firestore();
dbb.collection("UsersPag").doc(user.uid).set({
nome: user.displayName,
email: user.email,
foto: user.photoURL,
uid: user.uid,
Stars: stars,
Mensagem:msm,
criadoEm: firebase.firestore.FieldValue.serverTimestamp(),
})



//var itens1= 0
var list = document.getElementById('listInfo');
list.innerHTML = ''
var firebaseConfigures = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigures);
var dbs = firebase.firestore()
var produtosRef = dbs.collection(`UsersPag`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var coment= querySnapshot.size

var div= document.createElement('div')
var div2=document.createElement('div')
var div3=document.createElement('div')
var label=document.createElement('label')
var label2=document.createElement('label')
var label3=document.createElement('label')
var img=document.createElement('img')

img.id='imgInfo'
div.id='divInfo'
div2.id='divInfo2'
div3.id='divInfo3'
label.id='lblInfo'
label2.id='lblInfo2'
label3.id='lblInfo3'

img.src=doc.foto
if(!doc.Stars||doc.Stars==''){
}else if(doc.Stars==2){
label.textContent='🌟'
}else if(doc.Stars==4){
label.textContent='🌟🌟'
}else if(doc.Stars==6){
label.textContent='🌟🌟🌟'
}else if(doc.Stars==8){
label.textContent='🌟🌟🌟🌟'
}else if(doc.Stars==10){
label.textContent='🌟🌟🌟🌟🌟'
}
label2.textContent= doc.nome
if(doc.Mensagem){
 var textoFormatado =  doc.Mensagem.length > 15 ?  doc.Mensagem.substring(0, 40) + '...' : doc.Mensagem;
label3.textContent= `#${textoFormatado}`
}

div2.appendChild(img)
div3.appendChild(label)
div3.appendChild(document.createElement('br'));
div3.appendChild(label2)
div3.appendChild(document.createElement('br'));
div3.appendChild(label3)
div.appendChild(div2)
div.appendChild(div3)
list.appendChild(div)

setTimeout(function(){
//Swal.fire(`${coment}`,'','')
document.getElementById('spanInfoNumero').innerHTML=` (${coment})`
},2000)
 div.addEventListener('click',function(){
  if(doc.Mensagem){
    Swal.fire('Comentário:',`${doc.Mensagem}`,'success')
  }
 })

})
});

} else {
// Usuário não está logado
var resp= parseInt(localStorage.getItem('AvaliaçãoStar'));
if(resp){
document.getElementById('a_stars').click()
Swal.fire("Entre com sua conta google.",'Termine sua avaliacão, click em entrar com o google!','warning');
document.getElementById('btnGoogle').style.display='block'
}else{
}
}
});
},2000)

//entre com google botão
function EntreGoogle(){
loginComGoogle() 
}
function mensagemInfo(){
Swal.fire({
title: `<i class="fa-solid fa-pen-to-square"></i> Comente`,
html:` <p>Deixe uma breve mensagem!</p> 
<textarea id='inputInfo'  title='MSM' placeholder= 'Mensagem...'></textarea>
<br>
<label id='lblBtn1' title='Salvar'> Salvar <i class="fa-solid fa-check-double"></i></label> 
<label id='lblBtn2' title='cancelar'>Cancelar</label>

`,
background: 'rgba(118, 0, 122, 1)', // Cor de fundo
color: '#ffffffff', // Cor do texto
allowOutsideClick: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_infoMSM' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';        
}
});
document.getElementById('lblBtn2').addEventListener('click',function(){
Swal.close()

})
document.getElementById('lblBtn1').addEventListener('click',function(){
var resp= document.getElementById('inputInfo').value;
if(resp){

localStorage.setItem('InfoMSM', resp)

 // alert(msm);
  var textoFormatado = resp.length > 15 ? resp.substring(0, 28) + '...' : resp;
  document.getElementById('user-mensagem').innerHTML = `#${textoFormatado}`;

setTimeout(function(){
 window.location.reload()
},1500)
}else{
}
})
}
function ParagrafoMSM(){
  var msm= localStorage.getItem('InfoMSM')
  Swal.fire('Comentário!',`${msm}`,'success')
}
document.getElementById('div_listInfo').style.display='none'
 var span=document.getElementById('spanInfo');
  span.className=`fa-solid fa-eye`
function verInfolist(){
 var display=  document.getElementById('div_listInfo').style.display;
 var span=document.getElementById('spanInfo');
 if(display=='none'){
 document.getElementById('div_listInfo').style.display='block'
 span.className=`fa-solid fa-eye-low-vision`
 setTimeout(function(){
 document.getElementById('div_listInfo').style.display='none'
  span.className=`fa-solid fa-eye`
  //document.getElementById('a_stars').click()
 },70000)
 } else{
  document.getElementById('div_listInfo').style.display='none'
    span.className=`fa-solid fa-eye`
 }
}
function avaliar(){
  Menu()
}