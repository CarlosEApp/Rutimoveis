
   function procura(){
    Swal.fire({
    title: `Oque você procura?`,
    html: `
      
       <a id='destaque' href="#">Destaques </a> 
        <br><br>
      <a id='Casas' href="#">Casas </a>
     <br><br>
      <a id='Sob'  href="#">Sobrados </a>
      <br><br>
      <a id='aps' href="#">Apartamentos </a>
      <br><br>
      <a id='galpão_' href="#">Galpões</a>
      <br><br>
      <a id='terrenos'  href="#">Terrenos</a>
      <br><br>
       <a id='lojas' href="#">Lojas!</a>
       <br><br> 
       <a id='Chacara' href="#">Chácaras e Sítios </a>
       <br><br><br><button  id='sair_'>Cancelar</button>
        `,
      showCancelButton: false,
      showConfirmButton: false,
      customClass: {
      popup: 'my-custom_oqueProcura' // Aplica a classe CSS personalizada
   },
     didOpen: () => {
       document.body.style.paddingRight = '0px';
    }
});
 document.getElementById('sair_').addEventListener('click', function() {
     Swal.fire('Cancelado!')
       Swal.close()            
});
document.getElementById('destaque').addEventListener('click',function(){
   document.getElementById('select_lista1').value='Lista Destaques'
   document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')
 setTimeout(function(){
    document.getElementById('alist').click()
   Swal.close()
},700)
});
document.getElementById('Casas').addEventListener('click',function(){
 document.getElementById('select_lista1').value='Lista Casas'
   document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')
setTimeout(function(){
  document.getElementById('alist').click()
 Swal.close()
},700)
});
document.getElementById('Sob').addEventListener('click',function(){
 document.getElementById('select_lista1').value='Lista Sobrados'
   document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')
 setTimeout(function(){
   document.getElementById('alist').click()
   Swal.close()
},700)
});
document.getElementById('aps').addEventListener('click',function(){
   document.getElementById('select_lista1').value='Lista Apartamentos'
     document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')
setTimeout(function(){
  document.getElementById('alist').click()
 Swal.close()
},700)
});
document.getElementById('galpão_').addEventListener('click',function(){
  document.getElementById('select_lista1').value='Lista Galpões'
    document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')  
  setTimeout(function(){   
  document.getElementById('alist').click()
 Swal.close()
},700)
});

document.getElementById('terrenos').addEventListener('click',function(){
 document.getElementById('select_lista1').value='Lista Terrenos'
   document.getElementById('select_comprar_alugar').value=''
  buscaragora('click')  
setTimeout(function(){
document.getElementById('alist').click()
 Swal.close()
},1000)
});
document.getElementById('lojas').addEventListener('click',function(){
 document.getElementById('select_lista1').value='Lista Lojas'
   document.getElementById('select_comprar_alugar').value=''
  buscaragora('click')  
setTimeout(function(){
 document.getElementById('alist').click()
 Swal.close()
},700)
});
document.getElementById('Chacara').addEventListener('click',function(){
   document.getElementById('select_lista1').value='Lista Chácaras e Sítios'
     document.getElementById('select_comprar_alugar').value=''
 buscaragora('click')
setTimeout(function(){
  document.getElementById('alist').click()
 Swal.close()
},700)
});
   }

         
 //visions
 sessionStorage.setItem('teglist','')
   function mostrarAlerta() {
      Swal.fire({
        title: `Procurando lista... `,
        text: `Aguarde carregando...`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
             document.body.style.paddingRight = '0px';        
        }
      });
      setTimeout(function(){
       Swal.close()
      },3000)
  }

   //Lista 01 
document.getElementById('select_lista1').value='Lista Destaques'
document.getElementById('select_comprar_alugar').value=''
function buscaragora(){
mostrarAlerta('click')
var list1= document.getElementById('lista01');
list1.innerHTML='';
document.getElementById('body1').style.display='block'
document.getElementById('divListaPesquisa').style.display='none'
var itens= 0
sessionStorage.setItem('iten',``)
var list= document.getElementById('select_lista1').value;
var comp_alug= document.getElementById('select_comprar_alugar').value;
if(!list || list==''){
  Swal.fire('Oque você Procura?','Preencha os campos!','warning')
} else{
sessionStorage.setItem('teglist',``)
sessionStorage.setItem('itens','');
sessionStorage.setItem('list01','')
var list1= document.getElementById('lista01');
list1.innerHTML='';
var itens= 0

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
var db = firebase.firestore();
var produtosRef = db.collection(`${list}`);
// Limpar a lista antes de preencher
produtosRef.get().then((querySnapshot) => {
 querySnapshot.forEach(doc => {
   var doc = doc.data();
    var resp1= doc.Tipo_Venda
if(resp1 == comp_alug | comp_alug== '' || resp1=='Compra ou Locação'){ 
   itens+=1
   var div1=document.createElement('div');
   var div2=document.createElement('div');
   var div3=document.createElement('div');
   var div4=document.createElement('div');
   var img= document.createElement('img');
   var label=document.createElement('label');
   var label1=document.createElement('label');
   var label2=document.createElement('label');
   var label3=document.createElement('label');
   var label4=document.createElement('label');
   var label5=document.createElement('label');
   var label6=document.createElement('label');
   var button1=document.createElement('button');
   var br1=document.createElement('br');
   var br2=document.createElement('br');
   var br3=document.createElement('br');
   var br4=document.createElement('br');
   var br5=document.createElement('br');
   var br6=document.createElement('br');
   var br7=document.createElement('br');
   var br8=document.createElement('br');
   var br9=document.createElement('br');
   var p1=document.createElement('p')
   var p2=document.createElement('p')
   p1.id='p1_'
   p2.id='p2_'
   button1.id='butoon1';
   div1.id='div1';
   div2.id='div2';
   div3.id='div3';
   div4.id='div4';
   img.id='img1'
   label.id='label0';
   label1.id='label1';
   label2.id='label2';
   label3.id='label3';
   label4.id='label4';
   label5.id='label5';
   label6.id='label6';
   button1.textContent='Ver, Mais';
   img.src=`${doc.IMG}`
   if(!doc.Tipo_Venda||doc.Tipo_Venda==''){
         label.textContent=`#Meu novo lar`;
    } else{
       label.textContent=`Disponivel para ${resp1}`;
    }
   label1.textContent=`${doc.Titulo}`;
   label2.textContent=`Bairro ${doc.Bairro}`;
   label3.textContent=`${doc.Cidade} - ${doc.UF}`;
    if(!doc.Valor || doc.Valor==''){
        var valorCompra='';
   } else{
       var valorCompra=`Valor para venda : ${doc.Valor}`;
       p1.textContent='Compra R$:'
       label4.textContent=`${doc.Valor}`
  
     // label.textContent=`Disponivel para Locação #Compra`;
   }
   if(!doc.Valor_Loc|| doc.Valor_Loc==''){
   var valorLocação='';
   } else{
     var valorLocação=`Valor para locação : ${doc.Valor_Loc}`;
     p2.textContent='Locação R$:'
      label5.textContent=`${doc.Valor_Loc}`
   }
   if(!doc.Desconto | doc.Desconto==''){
       var desconto='';
   } else{
       var desconto=`Avista - ${doc.Desconto}% de desconto!`;
   }
    label6.className='fa-solid fa-share-nodes';
    div3.appendChild(img);
    div3.appendChild(label1);
    div3.appendChild(br1);
    div3.appendChild(label2);
    div3.appendChild(br2);
    div3.appendChild(label3);
    div3.appendChild(br3);        
    div3.appendChild(p2);
    p2.appendChild(label5);
    div3.appendChild(p1);
    p1.appendChild(label4);
    div2.appendChild(br4);
    div2.appendChild(label);
    div1.appendChild(div3);
    div1.appendChild(div2);
    div1.appendChild(br5);
    div4.appendChild(button1);
    div4.appendChild(label6);
    div1.appendChild(div4);
    list1.appendChild(div1)
    div1.appendChild(br9);
  sessionStorage.setItem('teglist',doc.Titulo)
 if(list!='Lista Destaques'){
     document.getElementById('alist').click()
  }
   var nomeL= document.getElementById('h1_destaque')
  nomeL.innerHTML=`${doc.Lista}`
  var iten1= document.getElementById('itens_');
  iten1.innerHTML= `Total de imóveis ( ${itens} )`
  sessionStorage.setItem('iten',`${itens}`)
  label6.addEventListener('click',function(){

 var url = "https://carloseapp.github.io/Rutimoveis/web/index.html";
var img = `${doc.Titulo}: ${doc.IMG}`;
var cod=`${doc.Código}`
var whatsappMessage =`Pagina Web: ${url}\n\n📷 ${img} \n\n Código do Imóvel: ${cod}\n\n`;
var whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

window.open(whatsappLink, "_blank");
  })
  
  img.addEventListener('click',function(){
     Swal.fire({
       title: `Ver Imagem? `,
       html:` 
          <br><br>
          <button id="Start" title="">Sim</button>
          <br><br><br><button id='sair_'>Cancelar</button>       
       `,
       showCancelButton: false,
        showConfirmButton: false,
        customClass: {
        popup: 'my-custom_Pesq_Swl' // Aplica a classe CSS personalizada
      },
       didOpen: () => {
            document.body.style.paddingRight = '0px';
         }
       });
    document.getElementById('Start').addEventListener('click',function(){
       window.open(doc.IMG,'_blank')
       setTimeout(function(){
       Swal.close()
    })    
       Swal.fire('Ver imagem','','success')
    });
       document.getElementById('sair_').addEventListener('click',function(){
    Swal.fire('Cancelado','','error')
    setTimeout(function(){
       Swal.close()
    })
   
    });
       // swal(`${doc.Titulo}`,` Bairro ${doc.Bairro}\nCidade de ${doc.Cidade} - ${doc.UF}\n${valorCompra}\n${desconto}\n${valorLocação}\n\n\nCódigo do Imóvel:\n (  ${doc.Código}  )\n--------------------------`,`${doc.IMG}`);
         });
         button1.addEventListener('click',function(){
           
           // document.getElementById('DivBody').style.display='none'
           //  document.getElementById('div_Mostruario').style.display='block'
             //document.getElementById('a_mostruario').click()
             sessionStorage.setItem('Most_Imovel_Codigo', `${doc.Código}`)
             window.open('Mostruário/mostruario.html')
           //  swal(`${doc.Código}`,` `,`#`);
             
         });
          } else{
          }
     })
    })
  }
    SetItensZ('click')
  }
buscaragora('click')
   function SetItensZ(){
    setTimeout(function(){
    var Itens_ = sessionStorage.getItem('iten')
    if(!Itens_|Itens_==0 | Itens_==''){
   var nomeL= document.getElementById('h1_destaque')
    nomeL.innerHTML=`Lista Vazia!`
    var itenZ= document.getElementById('itens_');
    itenZ.innerHTML= `Total de ( 0 ) encontrados`
    setTimeout(function(){
  
    },1500)
     
   } else{
 }
  },3000)
} 

 function Pesquisador(){
      Swal.fire({
      title: `Pequisar <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> `,
      html:` <div  class="menu-container">
         <p>Pesquise por Cidade, Bairro ou Código do Imóvel!</p>
        <br>
        <input id='inputSwal' type='text' placeHolder='Pesquisar...'>
         <br><br>
         <button id="Swalpesq" title="">Start <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i>  </button>
         <br><br><br><button class='cancelar' id='sair_'>Cancelar</button>
         </div>
      `,
      showCancelButton: false,
       showConfirmButton: false,
       customClass: {
       popup: 'my-custom_Pesq_Swl' // Aplica a classe CSS personalizada
     },
      didOpen: () => {
           document.body.style.paddingRight = '0px';
        }
  });
      document.getElementById("inputSwal").blur();
      document.getElementById('sair_').addEventListener('click', function() {
       document.getElementById("inputSwal").blur();
        Swal.fire('Cancelado!')
        Swal.close()    
     });
       document.getElementById('Swalpesq').addEventListener('click', function() {
       var respPesq= document.getElementById('inputSwal').value;
       var input= document.getElementById('inputSwal');
       var respPesq = input.value.trim();
     if(!respPesq|| respPesq==''){
       Swal.fire('Atenção','<b>Preencha o campo de pesquisa!</b>','warning')
       setTimeout(function(){
       Swal.close()
        Menu_head('click')
     },3000)
     } else{
              Swal.fire({
     title: 'Pesquisando...',
     html:`
     <label > Aguarde um momento <b> <p id="show"></p> </b></label>
     `,
     allowOutsideClick: false,
     showConfirmButton: false,
        customClass: {
       popup: 'my-custom_Pesq_Swl_' // Aplica a classe CSS personalizada
     },
     didOpen: () => {
         Swal.showLoading();
     }
     });
    var Num= 4
    var int=setInterval(function(){
      Num-=1
     if(Num == 0){
      clearInterval(int)
     }else{
     var show= document.getElementById('show');
      show.innerHTML=`(${Num})`;
     }
    },1000)
      setTimeout(function(){
      Swal.close()
      ResutPesquisa('click')
      },4000) 
     sessionStorage.setItem('Pesquisa',`${respPesq}`);
    // mostrarAlerta2()
     }
    })
 }


   function Menu_head(){
Swal.fire({
 title: `<labe id="label_titleSwal"> Menu <i class="fa-solid fa-bars"></i></labei>`,
  html: `
     <br>
     <a id="SwalmenuPesq" class='btns'  href="#"> Pesquisar <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </a> 
     <br> <br> <br>
       <a id="Swalmenu10" class='btns'  href="#sociais_contatos"> <i class="fa-brands fa-facebook-f"></i> Redes Sociais <i class="fa-brands fa-instagram"></i></a> 
     <br> <br> <br>
       <a id="Swalmenu11" class='btns'  href="#paragrafo_inf_cont"> Contatos <i class="fa-solid fa-phone-volume"></i> </a> 
     <br><br>
     <button class='btns'  id="btn_swal_menu1" title="">Tela cheia <i class="fa-solid fa-desktop"></i> </button>  
      <br><br>
     <button class='btns'  id="Swalmenu12" title="">Administração <i class="fa-sharp-duotone fa-solid fa-lock"></i> </button>
     <br><br><button class='cancelar' id='sair_'>Cancelar</button>
  `,
  showCancelButton: false,
   showConfirmButton: false,
   customClass: {
   popup: 'my-custom_login' // Aplica a classe CSS personalizada
 },
   didOpen: () => {
       document.body.style.paddingRight = '0px';
    }
  });
    document.getElementById('sair_').addEventListener('click', function() {
     Swal.fire('Cancelado!')
         Swal.close() 
  });
    document.getElementById('btn_swal_menu1').addEventListener('click', function() {
    Swal.fire('Tela Cheia')
    toggleFullScreen('click')
    setTimeout(function(){
     Swal.close()
     },500)
  });
     document.getElementById('Swalmenu10').addEventListener('click', function() {
     Swal.fire('Redes Sociais')
     setTimeout(function(){
     Swal.close()
     },1000)
  });
     document.getElementById('Swalmenu11').addEventListener('click', function() {
      Swal.fire('Contatos')
      setTimeout(function(){
       Swal.close()
      },1000)
   });
     document.getElementById('SwalmenuPesq').addEventListener('click', function() {          
        Pesquisador()
   });
     document.getElementById('Swalmenu12').addEventListener('click', function() {
     Swal.fire({
        title: `Administração! <i class="fa-sharp-duotone fa-solid fa-lock"></i>`,
        html: `
         <br>
         <label>Digite Password:<br>
         <input id='inputSwalAdimin' type='password' placeholder='Password'><i id='visao' class="fa-solid fa-eye"></i>
         <br> <br>  
         <button id="Swalmenu11" title="">Start </button>
        <br><br><br><button id='sair_'>Sair,Cancelar</button>
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
     document.getElementById('sair_').addEventListener('click', function() {
      Swal.fire('Cancelado!')
         Swal.close()           
  });
document.getElementById('Swalmenu11').addEventListener('click', function() {
var password_master= sessionStorage.getItem('Password_Master');
var password_novoLarAPP= sessionStorage.getItem('Password_NovoLarAPP');
var resp= document.getElementById('inputSwalAdimin').value;
if(!resp||resp==''){
  Swal.fire('','Preencha o Campo password!','warning')
 } else{      
   if(password_master== resp|| password_novoLarAPP== resp){
Swal.fire('Sucesso!','Você será redirecionado para a tela de Administrador!','success')
   setTimeout(function(){
    window.open('Administração/Cadastros.html','blank_')
     Swal.close()
},2000)
    } else{
     Swal.fire('','Senha não confere!','error')         
 }
}
})
});
};
 
 // redes sociais
function Zap(){
whatsapp('click')
}
function pagina(){
window.open('Administração/Cadastros.html','blank_')
};
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
function whatsapp(){
var imagem_Whats='';
if(!imagem_Whats||imagem_Whats==''){
var imagem_Whats=`src/Rute.jpg`
}else{
}
 sessionStorage.setItem('Mens_Whats',``)
//  localStorage.setItem('Mens_Whats',`${Mens_Whats}`)
var mens_Wwats= localStorage.getItem('Mens_Whats')
if(!mens_Wwats||mens_Wwats==''){
 sessionStorage.setItem('Mens_Whats',`Rutimóveis solicitação de contato`)
}else{
 sessionStorage.setItem('Mens_Whats',`${mens_Wwats}`)       
}
sessionStorage.setItem('tel_whats',``)
var Tel_whats= localStorage.getItem('TelWhats')
if(!Tel_whats ||Tel_whats==''){
sessionStorage.setItem('tel_whats',`11948865333`)
} else{
 var telWahts= Tel_whats
 sessionStorage.setItem('tel_whats',`${telWahts}`)   
}
sessionStorage.setItem('resultTelWhats','')
Swal.fire({
 title: `WhatsApp <i id='i_whats' class="fa-brands fa-whatsapp"></i>`,
 html: `
     <div id='divWhats'>
     <img id='imgWhats'src=''> <label>Rute (corretora)</label> </div>
     <br><br>    
     <button id="btn_whats" title="">Enviar <i id='i_whats_start' class="fa-brands fa-whatsapp"></i></button>            
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
document.getElementById('imgWhats').src=`${imagem_Whats}`
 document.getElementById('imgWhats').addEventListener('click',function(){
  swal('','',`${imagem_Whats}`)
 })
 
  document.getElementById('btn_whats').addEventListener('click',function(){
    var resut= sessionStorage.getItem('resultTelWhats');
    var data= localStorage.getItem('data')
    var hora = localStorage.getItem('hora') 
    var tel_= sessionStorage.getItem('tel_whats')       
    var numero = `55${tel_}`; // Substitua pelo número de destino, incluindo o código do país
    var mensagem = sessionStorage.getItem('Mens_Whats')  
    var url = "https://wa.me/"+`${numero}?text= ${mensagem}`;
         window.open(url, "_blank");
          Swal.fire(`WhatsApp`,``,'success')       
});
document.getElementById('sair_').addEventListener('click',function(){
     Swal.fire('Sair')
     Swal.close()
});

//  Swal.fire('WhatsApp')
// var url='https://www.facebook.com/share/1YP8t9Q7uR/'
//window.open(url,'_blank')
};

      const firebaseConfigu = {
      apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
      authDomain: "rutimoveis-bc114.firebaseapp.com",
      projectId: "rutimoveis-bc114",
      storageBucket: "rutimoveis-bc114.firebasestorage.app",
      messagingSenderId: "457038463744",
      appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
      measurementId: "G-K330CH24NV"
    };
       firebase.initializeApp(firebaseConfigu); 
       var db= firebase.firestore();
       db.collection('Password').doc('Master').get().then((doc) => {
          var doc= doc.data()
      // Swal.fire(`${doc.Master}`,'Passwod do Administrador!','warnonig')
      sessionStorage.setItem('Password_Master', `${doc.Master}`)
       }).catch((err) => {
       });
        db.collection('Password').doc('NovoLarPassword').get().then((doc) => {
          var doc= doc.data()
      // Swal.fire(`${doc.NovoLarPassword}`,'Passwod do Desenvolvedor!','warnonig')
         sessionStorage.setItem('Password_NovoLarAPP', `${doc.NovoLarPassword}`)
       }).catch((err) => {
       });

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
 // const lbl_data = document.getElementById('lbl-data');
 // lbl_data.innerHTML = `${data}`
 localStorage.setItem('data', data)
 localStorage.setItem('hora', timeString)
 //var Data = document.getElementById('lbl_data_head')
 //Data.innerHTML= data;
 }, 1000)

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
 // result pesquisa
sessionStorage.setItem('Pesquisa',``)
function ResutPesquisa() {
var itens=   sessionStorage.getItem('itens_') 
document.getElementById('select_lista1').value='Lista Destaques'
document.getElementById('select_comprar_alugar').value=''  ;
   var valorP=document.getElementById('RRListP');
    valorP.innerHTML=`Total de (0) imóveis encontrados`  
Swal.fire({
 title: `Resultado da Pesquisa...`,
 html: `          
   <br>
   <div id='lista_pesquisa'></div>        
   <i id='imgemoji' class="fas fa-sad-tear"> <br> <p id='ppemoji'>Desculpe-me! <br> <br>  ( 0 ) Encontrados</p></i>
   <br>
   <br>
     `,
   showCancelButton: false,
   showConfirmButton: true,
   customClass: {
   popup: 'my-custom_resultpesquisa' // Aplica a classe CSS personalizada
},
 didOpen: () => {
  document.body.style.paddingRight = '0px';
 }
});
var set= setTimeout(function(){
document.getElementById('imgemoji').style.display='block'
},1000);
var itens= 0
var pesquisa= sessionStorage.getItem('Pesquisa')
const firebaseConfigure = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigure); 
const dbP = firebase.firestore();
var produtosRef = dbP.collection('Pesquisar');
// Limpar a lista antes de preencher
var listaP = document.getElementById('listaPesquisa');
listaP.innerHTML = '';
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();   
       function removerAcentos(texto) {
return (texto ?? "").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

         if(
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Cidade?.toLowerCase()) ||
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Bairro?.toLowerCase()) ||
removerAcentos(pesquisa.toLowerCase()) === removerAcentos(doc.Código?.toLowerCase())
) {

     itens+=1
var div= document.createElement('div')
var img = document.createElement('img');
var lbl= document.createElement('label');
var lbl1= document.createElement('label');
var lbl2= document.createElement('label');
var lbl3= document.createElement('label');
var lbl4= document.createElement('label');
var lbl5= document.createElement('label');
var lbl6= document.createElement('label');
var br = document.createElement('br')
var br2 = document.createElement('br')
var br3 = document.createElement('br')
var br4 = document.createElement('br')
var br5 = document.createElement('br')
var br6 = document.createElement('br')
var p1 = document.createElement('p')
   var p2 = document.createElement('p')
    clearTimeout(set)
  img.src = `${doc.IMG}`;
  img.alt = doc.Titulo;
  img.id='imjRPsq';
  div.id='divPesq';
  lbl.id='btnPesq';
  lbl1.id='btnPesq';
  lbl2.id='btnPesq';
  lbl3.id='btnPesq';
  lbl4.id='btnPesq'
  lbl5.id='btnPesq'
  lbl6.id='btn6Pesq'
  lbl.textContent=`${doc.Código}`
  lbl2.textContent=`Bairro: ${doc.Bairro} em ${doc.Cidade}`
  lbl3.textContent=`${doc.Titulo}`  
  lbl4.textContent=`${doc.T}`
    if(!doc.Tipo_Venda||doc.Tipo_Venda==''){
      lbl.textContent=`#Meu novo lar`;
  } else{
    lbl.textContent=`Disponivel para ${doc.Tipo_Venda}`;
  }
  lbl1.textContent=`${doc.Titulo}`;
  lbl2.textContent=`Bairro ${doc.Bairro}`;
  lbl3.textContent=`${doc.Cidade} - ${doc.UF}`;
  if(!doc.Valor || doc.Valor==''){
     var valorCompra='';
     lbl4.textContent=`${valorCompra}`
 } else{
    var valorCompra=`Compra R$: ${doc.Valor}`;
    p1.textContent='Compra R$:'
    lbl4.textContent=`${valorCompra}`      
  // label.textContent=`Disponivel para Locação #Compra`;
}
if(!doc.Valor_Loc|| doc.Valor_Loc==''){
var valorLocação='';
   lbl5.textContent=`${valorLocação}`
} else{
  var valorLocação=`Locação R$: ${doc.Valor_Loc}`;
  p2.textContent='Locação R$:'
   lbl5.textContent=`${valorLocação}`
}
if(!doc.Desconto | doc.Desconto==''){
    var desconto='';
} else{
    var desconto=`Avista - ${doc.Desconto}% de desconto!`;  
}
  lbl6.textContent=`Código: ${doc.Código}`
  div.appendChild(img); 
  div.appendChild(lbl1)
  div.appendChild(lbl2)
  div.appendChild(lbl3)
  div.appendChild(lbl4)
  div.appendChild(lbl5)
  div.appendChild(br2)
  div.appendChild(lbl)
  div.appendChild(br3)
   div.appendChild(lbl6)
  listaP.appendChild(div);
  sessionStorage.setItem('itens_',itens)
  sessionStorage.setItem('iten',itens)
  document.getElementById('imgemoji').style.display='none'
  document.getElementById('body1').style.display='none'
  document.getElementById('divListaPesquisa').style.display='block'
  document.getElementById('alist').click()
  var valorP=document.getElementById('RRListP');
  valorP.innerHTML=`Total de (${itens}) imóveis encontrados`
   Swal.close()
    img.addEventListener('click',function(){
swal(`${doc.Titulo}`,`Localizado no bairro ${doc.Bairro}\nem ${doc.Cidade}\n\nCódigo do imóvel: ${doc.Código}\n`,`${doc.IMG}`)
})
} else{
}
})
})
SetItensZ()
}
function casa(){
  var listaP = document.getElementById('listaPesquisa');
listaP.innerHTML = '';
document.getElementById('body1').style.display='block'
document.getElementById('divListaPesquisa').style.display='none'
}
