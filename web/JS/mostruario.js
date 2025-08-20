



const btns = document.querySelectorAll('#btnIMG button');

btns[0].addEventListener('click', () => {
  divIMGs.scrollBy({ left: 200, behavior: 'smooth' });
});

btns[1].addEventListener('click', () => {
  divIMGs.scrollBy({ left: -200, behavior: 'smooth' });
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
     document.getElementById('tituloH2').innerHTML=data.Titulo
 document.getElementById('codigoH2').innerHTML=data.Código

 document.getElementById('img1').src= data.IMG1;
  document.getElementById('h3img1').innerHTML=data.Img1T
  // document.getElementById('p1Img').innerHTML=`${data.Img1M} m²`

    document.getElementById('img2').src=data.IMG2;
     document.getElementById('h3img2').innerHTML=data.Img2T
     //document.getElementById('p2Img').innerHTML=`${data.Img2M} m²`

       document.getElementById('img3').src=data.IMG3;
        document.getElementById('h3img3').innerHTML=data.Img3T
      //  document.getElementById('p3Img').innerHTML=`${data.Img3M} m²`

          document.getElementById('img4').src=data.IMG4;
            document.getElementById('h3img4').innerHTML=data.Img4T
         //   document.getElementById('p4Img').innerHTML=`${data.Img4M} m²`

              document.getElementById('img5').src=data.IMG5;
                document.getElementById('h3img5').innerHTML=data.Img5T
             //   document.getElementById('p5Img').innerHTML=`${data.Img5M} m²`
                    
                  document.getElementById('img6').src=data.IMG6;
                     document.getElementById('h3img6').innerHTML=data.Img6T
                //     document.getElementById('p6Img').innerHTML=`${data.Img6M} m²`

                       document.getElementById('img7').src=data.IMG7;
                          document.getElementById('h3img7').innerHTML=data.Img7T
                    //      document.getElementById('p7Img').innerHTML=`${data.Img7M} m²`

    

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
document.getElementById('areaConst').innerHTML=`Area construida: ${data.AreaM} m²`
}
if(!data.Suite||data.Suite==''){

}else{
document.getElementById('suite').innerHTML=`Suíte: 🛏️(${data.Suite}) `
}
if(!data.Quartos||data.Quartos==''){

}else{
document.getElementById('quartos').innerHTML=`Quartos: 🛏️(${data.Quartos}) `
}
if(!data.Banheiro||data.Banheiro==''){

}else{
document.getElementById('banheiro').innerHTML=`Banheiros: 🚿(${data.Banheiro})`
}
if(!data.Quintal||data.Quintal==''){

}else{
  if(!data.QuintalM||data.QuintalM==''){
document.getElementById('quintal').innerHTML=`Quintal: (${data.Quintal}) `
}else{

document.getElementById('quintal').innerHTML=`Quintal: (${data.Quintal}) ${data.QuintalM}m² `
}
}
if(!data.Garagem||data.Garagem==''){

}else{
document.getElementById('garagem').innerHTML=`Garagem: 🚗(${data.Garagem}) `
}
if(!data.Piscina||data.Piscina==''){

}else{
  if(!data.PiscinaM||data.PiscinaM==''){

document.getElementById('piscina').innerHTML=`Piscina: (${data.Piscina}) `
}else{

document.getElementById('piscina').innerHTML=`Piscina: (${data.Piscina}) ${data.PiscinaM}m² `
}
}
  if(data.Duplex=='sim'){
document.getElementById('duplex').innerHTML=`[Duplex] `
}else{
}
if(data.Triplex=='sim'){
 
document.getElementById('triplex').innerHTML=`[Triplex] `
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
  var telefone=`11948865333`
   var Titulo_=document.getElementById('tituloH2').innerHTML;
    var codigo_=document.getElementById('codigoH2').innerHTML;
     var IMG_=document.getElementById('img1').src;
     var pag="https://rutimoveis.netlify.app/"
     var result= `Pagina Web: ${pag}\n\n${Titulo_} -Imagem:  ${IMG_} `
var numero = `+55${telefone}`; // Substitua pelo número de destino, incluindo o código do país
var url = "https://wa.me/"+`${numero}?text= Imagem  ${encodeURIComponent(result)} - Rute corretora (cod: ${codigo_})  `;
window.open(url, "_blank");
Swal.fire(`WhatsApp`,``,'success') 
}




//Alerta iniciar
function AlertaInicial(){
Swal.fire({
title: ``,
text: `Aguarde...`,
html:` <h2>Trazendo as informações...(a)!</h2>
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