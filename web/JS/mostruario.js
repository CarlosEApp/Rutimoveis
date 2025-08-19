



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

    
}).catch((err) => {
    
});