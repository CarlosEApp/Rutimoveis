   //files
   function sairIMGcad(){
    document.getElementById('cad_imagem').style.display='none'
      document.getElementById('cad_videos').style.display='none'
    sair('click')
   }
    function sairVD(){
    document.getElementById('cad_videos').style.display='none'
     document.getElementById('cad_imagem').style.display='none'
    sair('click')
   }
   function salvarVD(){
    var respV1= document.getElementById('input_edt_vd').value;
       document.getElementById('obs8').value=respV1;
      var respV2= document.getElementById('input_edt_vd2').value;
        document.getElementById('obs9').value=respV2;
         var respV3= document.getElementById('input_edt_vd3').value;
          document.getElementById('obs10').value=respV3;
             mostrarAlerta2('click') 
              setTimeout(function(){
   Salvarcad('click') 
  },1000)
   }
        
   function salvarIMG(){
    mostrarAlerta2('click') 
   var resp1= document.getElementById('input_edt_img').value;
   document.getElementById('obs').value=resp1;
   var resp2= document.getElementById('input_edt_img2').value;
   document.getElementById('obs2').value=resp2;
    var resp3= document.getElementById('input_edt_img3').value;
   document.getElementById('obs3').value=resp3;
    var resp4= document.getElementById('input_edt_img4').value;
   document.getElementById('obs4').value=resp4;
    var resp5= document.getElementById('input_edt_img5').value;
   document.getElementById('obs5').value=resp5;
    var resp6= document.getElementById('input_edt_img6').value;
   document.getElementById('obs6').value=resp6;
    var resp7= document.getElementById('input_edt_img7').value;
   document.getElementById('obs7').value=resp7;
  setTimeout(function(){
   Salvarcad('click') 
  },1000)
   }
    function mostrarAlerta() {
      Swal.fire({
        title: `Carregando imagem... `,
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
      },10000)
  };
  function mostrarAlerta2() {
      Swal.fire({
        title: `Salvando alterações... `,
        text: `Aguarde salvando...`,
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
            Swal.showLoading();
             document.body.style.paddingRight = '0px';        
        }
      });
      setTimeout(function(){
       Swal.close()
      },10000)
  };
   function mostrarAlerta3() {
      Swal.fire({
        title: `Carregando vídeo... `,
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
      },10000)
  };


  // Salve Vídeos
  function vd_edt(){ //${lista}/${titulo}-${codigo}
   document.getElementById('files_vd').click(); 
   var nomevd1 = sessionStorage.getItem('nomeImagem');       
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_vd');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomevd1}_VD1.mp4`);
   mostrarAlerta3()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_videos) {
    Swal.close()
   document.getElementById('myProgressVD1').style.display = 'block'

  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarVD1");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
  
         document.getElementById('id_video').src= url_videos
        document.getElementById('vd').value=`${url_videos}`   
       setTimeout(function(){
       document.getElementById('myProgressVD1').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
  };
  function vd_edt2(){ //${lista}/${titulo}-${codigo}
   document.getElementById('files_vd2').click(); 
   var nomevd2 = sessionStorage.getItem('nomeImagem');       
   var firebaseConfigure= {
     apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_vd2');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomevd2}_VD2.mp4`);
   mostrarAlerta3()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_videos2) {
    Swal.close()
   document.getElementById('myProgressVD2').style.display = 'block'

  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarVD2");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
  
         document.getElementById('id_video2').src= url_videos2
        document.getElementById('vd2').value=`${url_videos2}`    
       setTimeout(function(){
       document.getElementById('myProgressVD2').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
  }
function vd_edt3(){ //${lista}/${titulo}-${codigo}
   document.getElementById('files_vd3').click(); 
   var nomevd3 = sessionStorage.getItem('nomeImagem');       
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_vd3');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomevd3}_VD3.mp4`);
   mostrarAlerta3()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_videos3) {
    Swal.close()
   document.getElementById('myProgressVD3').style.display = 'block'

  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarVD3");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
  
         document.getElementById('id_video3').src= url_videos3
        document.getElementById('vd3').value=`${url_videos3}`    

    setTimeout(function(){
         document.getElementById('myProgressVD3').style.display='none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
  }
   // Salve imagens
   function img_edt(){ //${lista}/${titulo}-${codigo}
    document.getElementById('files_img').click(); 
   var  nomeIMG = sessionStorage.getItem('nomeImagem');  
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 

   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG}.jpg`);
       mostrarAlerta()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {

   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG1').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG1");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
         document.getElementById('edt_img1').src=url_imagem  
        document.getElementById('img').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG1').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})

 };
   function img_edt2(){
   document.getElementById('files_img2').click(); 
   var  nomeIMG2 = sessionStorage.getItem('nomeImagem');          
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 

   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img2');
   fileButton.addEventListener('change', function(e) {
        mostrarAlerta()
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG2}img2.jpg`);
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG2').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG2");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                       
         document.getElementById('edt_img2').src=url_imagem  
        document.getElementById('img2').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG2').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
 
 };
   function img_edt3(){
   document.getElementById('files_img3').click(); 
    var  nomeIMG3 = sessionStorage.getItem('nomeImagem');         
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img3');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG3}img3.jpg`);
   mostrarAlerta()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG3').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG3");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
        document.getElementById('edt_img3').src=url_imagem  
        document.getElementById('img3').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG3').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
 };
    function img_edt4(){
    document.getElementById('files_img4').click(); 
    var  nomeIMG4 = sessionStorage.getItem('nomeImagem'); 
    var firebaseConfigure= {
     apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img4');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
       mostrarAlerta()
   var storageRef = firebase.storage().ref(`${nomeIMG4}img4.jpg`);
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG4').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG4");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
      document.getElementById('edt_img4').src=url_imagem  
      document.getElementById('img4').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG4').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})     
 };
   function img_edt5(){
   document.getElementById('files_img5').click(); 
   var  nomeIMG5 = sessionStorage.getItem('nomeImagem');      
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 

   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img5');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG5}img5.jpg`);
   var task = storageRef.put(file);
       mostrarAlerta()
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG5').style.display = 'block'

  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG5");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
      
         document.getElementById('edt_img5').src=url_imagem  
        document.getElementById('img5').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG5').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})
         
 };
   function img_edt6(){
   document.getElementById('files_img6').click(); 
   var  nomeIMG6 = sessionStorage.getItem('nomeImagem');  
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img6');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG6}img6.jpg`);
   mostrarAlerta()
   var task = storageRef.put(file);
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
  Swal.close()
   document.getElementById('myProgressIMG6').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG6");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
       document.getElementById('edt_img6').src=url_imagem  
        document.getElementById('img6').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG6').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})        
 };
   function img_edt7(){
   document.getElementById('files_img7').click(); 
   var  nomeIMG7 = sessionStorage.getItem('nomeImagem');    
   var firebaseConfigure= {
    apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };
   firebase.initializeApp(firebaseConfigure); 
   var uploader = document.getElementById('uploader');
   var fileButton = document.getElementById('files_img7');
   fileButton.addEventListener('change', function(e) {
   var file = e.target.files[0];
   var storageRef = firebase.storage().ref(`${nomeIMG7}img7.jpg`);
   var task = storageRef.put(file);
       mostrarAlerta()
   task.on('state_changed', function progress(snapshot) {
   var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
   uploader.value = percentage;
   }, function error(err) {
   }, function complete() {
   storageRef.getDownloadURL().then(function(url_imagem) {
    Swal.close()
   document.getElementById('myProgressIMG7').style.display = 'block'
  var i = 0;
  if (i == 0) {
      i = 1;
      var elem = document.getElementById("myBarIMG7");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
   if (width >= 100) {
       clearInterval(id);
       i = 0;                     
         document.getElementById('edt_img7').src=url_imagem  
        document.getElementById('img7').value=`${url_imagem}`                
       setTimeout(function(){
       document.getElementById('myProgressIMG7').style.display = 'none'
         },1000)
     } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
    }
 })
})
})        
 };
 
 //imagens
 function img1(){
  var img= document.getElementById('img').value;
  window.open(`${img}`,'blank_ ');
 };
   function img2(){
  var img2= document.getElementById('img2').value;
  window.open(`${img2}`,'blank_ ');
 };
   function img3(){
  var img3= document.getElementById('img3').value;
  window.open(`${img3}`,'blank_ ');
 };
   function img4(){
  var img4= document.getElementById('img4').value;
  window.open(`${img4}`,'blank_ ');
 };
   function img5(){
  var img5= document.getElementById('img5').value;
  window.open(`${img5}`,'blank_ ');
 };
   function img6(){
  var img6= document.getElementById('img6').value;
  window.open(`${img6}`,'blank_ ');
 };
   function img7(){
  var img7= document.getElementById('img7').value;
  window.open(`${img7}`,'blank_ ');
 };


 //fnção imagen
 function onVideos(){
 document.getElementById('cad_videos').style.display='block'
 salv_img_vd('click')
};
 function onImagens(){
 document.getElementById('cad_imagem').style.display='block'
 salv_img_vd('click')
};
function salv_img_vd(){
var codigo_= document.getElementById('h4_codigo');
var titulo_= document.getElementById('h2_imóvel');
var id_imovel= sessionStorage.getItem('ID_imovel')
var end= document.getElementById('end_edt');
var pesquisa= sessionStorage.getItem('Pesquisa')
var codigo_V= document.getElementById('h4_codigo_v');
var titulo_V= document.getElementById('h2_imóvel_v');
var end_V= document.getElementById('end_edt_v');

 const firebaseConfig= {
 apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfig); 
const dbc = firebase.firestore();
dbc.collection('Pesquisar').doc(`${id_imovel}`).get().then((doc) => {
 if(doc.exists){
    var doc= doc.data()   
   sessionStorage.setItem('ID_imovel',`${doc.Código}`)
   sessionStorage.setItem('EdtTela','tela')
   document.getElementById('salas_quant').value= doc.SalasQ;
    document.getElementById('salas_metragen').value= doc.SalasM;
    document.getElementById('suspensão').value= doc.Suspenso;
    document.getElementById('suspensãoData').value= doc.SuspensoData;
    document.getElementById('vendido').value= doc.Vendido;
    document.getElementById('vendidoData').value= doc.VendidoData;
    document.getElementById('Area_metragen').value= doc.AreaConst;
    document.getElementById('codigo').value= doc.Código;
    document.getElementById('titulo').value= doc.Titulo;
    document.getElementById('select_listas').value= doc.Lista;
    document.getElementById('obs').value= doc.OBS;
    document.getElementById('bairro').value= doc.Bairro;
    document.getElementById('valor').value= doc.Valor;
    document.getElementById('endereço').value= doc.End;
    document.getElementById('desconto').value=doc.Desconto;
    document.getElementById('cidade').value=doc.Cidade;
    document.getElementById('valorLoc').value= doc.Valor_Loc;
    document.getElementById('input_UF').value= doc.UF;
    document.getElementById('select_venda').value=doc.Tipo_Venda;
    document.getElementById('rua').value= doc.Rua;
    document.getElementById('numero').value=doc.Numero;
    document.getElementById('valorCond').value= doc.Cond;
    document.getElementById('valorIPTU').value= doc.IPTU;
    document.getElementById('Quint_quant').value=doc.QuintalQ;
    document.getElementById('Quint_metragen').value= doc.QuintalM;
    document.getElementById('Quarto_quant').value=doc.QuartoQ;
    document.getElementById('suite_quant').value=doc.SuiteQ;
    document.getElementById('input_cep').value= doc.CEP
    document.getElementById('banheiro_quant').value= doc.BanheiroQ;
    document.getElementById('varanda_quant').value=doc.VarandaQ;
    document.getElementById('andar_quant').value= doc.Andar;
    document.getElementById('duplex').value=doc.Duplex;
    document.getElementById('Triplex').value=doc.Triplex;
    document.getElementById('piscinas_quant').value= doc.PiscinaQ;
    document.getElementById('piscinas_metragen').value= doc.PiscinaM;
    document.getElementById('vagas_quant').value=  doc.Garagem;
    document.getElementById('playg_quant').value=  doc.Playgrowd;
    document.getElementById('playg_metragen').value=  doc.PlaygrowdMetragem;
    document.getElementById('nome_proprietario').value= doc.Proprietário;
    document.getElementById('Tel_proprietario').value= doc.TelP;
    document.getElementById('cpf_proprietario').value=doc.CPFP;
    sessionStorage.setItem('LIsta',doc.Lista);
    sessionStorage.setItem('DataHora',`${doc.DataHoraInit}`)
    sessionStorage.setItem('data_',`${doc.Data}`)
    sessionStorage.setItem('hora_',`${doc.Hora}`)
    sessionStorage.setItem('nomeImagem',`${doc.NomeImagem}`);
    document.getElementById('img').value= doc.IMG;                   
    document.getElementById('img2').value= doc.IMG2;                      
    document.getElementById('img3').value= doc.IMG3;                      
    document.getElementById('img4').value= doc.IMG4;                   
    document.getElementById('img5').value= doc.IMG5;                    
    document.getElementById('img6').value= doc.IMG6;                    
    document.getElementById('img7').value= doc.IMG7;                   
    document.getElementById('vd').value= doc.VD;                  
    document.getElementById('vd2').value= doc.VD2;                     
    document.getElementById('vd3').value= doc.VD3;               
    document.getElementById('id').value= doc.ID;                   
    document.getElementById('obs2').value= doc.OBS2;                    
    document.getElementById('obs3').value= doc.OBS3;                   
    document.getElementById('obs4').value= doc.OBS4;                   
    document.getElementById('obs5').value= doc.OBS5;                    
    document.getElementById('obs6').value= doc.OBS6;                     
    document.getElementById('obs7').value= doc.OBS7;            
    document.getElementById('obs8').value= doc.OBS8;           
    document.getElementById('obs9').value= doc.OBS9;           
    document.getElementById('obs10').value= doc.OBS10;  

    codigo_.innerHTML=doc.Código;
    titulo_.innerHTML=doc.Titulo;
    end.innerHTML=`Bairro: ${doc.Bairro} em ${doc.Cidade}`;
    codigo_V.innerHTML= doc.Código;
    titulo_V.innerHTML= doc.Titulo;
    end_V.innerHTML=`Bairro: ${doc.Bairro} em ${doc.Cidade}`;

    document.getElementById('input_edt_img').value=`${doc.OBS}`  
     document.getElementById('input_edt_img2').value=`${doc.OBS2}` 
      document.getElementById('input_edt_img3').value=`${doc.OBS3}` 
       document.getElementById('input_edt_img4').value=`${doc.OBS4}` 
        document.getElementById('input_edt_img5').value=`${doc.OBS5}` 
         document.getElementById('input_edt_img6').value=`${doc.OBS6}` 
          document.getElementById('input_edt_img7').value=`${doc.OBS7}` 
           document.getElementById('input_edt_vd').value=`${doc.OBS8}` 
            document.getElementById('input_edt_vd2').value=`${doc.OBS9}` 
             document.getElementById('input_edt_vd3').value=`${doc.OBS10}` 

   if(!doc.VD || doc.VD=='' || doc.VD=='undefined'){
     document.getElementById('id_video').src='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
      document.getElementById('vd').value='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
   }else{
      document.getElementById('id_video').src=doc.VD;
   };
    if(!doc.VD2 || doc.VD2=='' || doc.VD2=='undefined'){
     document.getElementById('id_video2').src='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
      document.getElementById('vd2').value='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
   }else{
      document.getElementById('id_video2').src=doc.VD2;
   };
   if(!doc.VD3 || doc.VD3=='' || doc.VD3=='undefined'){
     document.getElementById('id_video3').src='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
      document.getElementById('vd3').value='../src/Banner para imobiliária fotografia casa vermelho e branco.mp4';
   }else{
      document.getElementById('id_video3').src=doc.VD3;
   };
  if(!doc.IMG || doc.IMG=='' || doc.IMG=='undefined'){
     document.getElementById('edt_img1').src='../src/Rutimoveis img.png';
      document.getElementById('img').value='../src/Rutimoveis img.png';
   }else{
      document.getElementById('edt_img1').src=doc.IMG;
   };
     if(!doc.IMG2 || doc.IMG2=='' || doc.IMG2=='undefined'){
      document.getElementById('edt_img2').src='../src/Rutimoveis img.png';
       document.getElementById('img2').value='../src/Rutimoveis img.png';
   }else{
     document.getElementById('edt_img2').src=doc.IMG2;
   };
   if(!doc.IMG3 || doc.IMG3==''|| doc.IMG3=='undefined'){
    document.getElementById('edt_img3').src='../src/Rutimoveis img.png';
     document.getElementById('img3').value='../src/Rutimoveis img.png';
   }else{
    document.getElementById('edt_img3').src=doc.IMG3;
    };
    if(!doc.IMG4 || doc.IMG4==''|| doc.IMG4=='undefined'){
     document.getElementById('edt_img4').src='../src/Rutimoveis img.png';
      document.getElementById('img4').value='../src/Rutimoveis img.png';
     }else{
     document.getElementById('edt_img4').src=doc.IMG4;
   };
    if(!doc.IMG5 || doc.IMG5==''|| doc.IMG5=='undefined'){
     document.getElementById('edt_img5').src='../src/Rutimoveis img.png';
      document.getElementById('img5').value='../src/Rutimoveis img.png';
   }else{
     document.getElementById('edt_img5').src=doc.IMG5;
  };
    if(!doc.IMG6 || doc.IMG6==''|| doc.IMG6=='undefined'){
     document.getElementById('edt_img6').src='../src/Rutimoveis img.png';
      document.getElementById('img6').value='../src/Rutimoveis img.png';
   }else{
     document.getElementById('edt_img6').src=doc.IMG6;
  };
    if(!doc.IMG7 || doc.IMG7==''|| doc.IMG7=='undefined'){
     document.getElementById('edt_img7').src='../src/Rutimoveis img.png';
      document.getElementById('img7').value='../src/Rutimoveis img.png';
  }else{
     document.getElementById('edt_img7').src=doc.IMG7;
  };
    } else{
      Swal.fire('Documento não encontrado!')
    }
  })
}

        function Edit_imovel(){
           Swal.fire({
     title: ` Edição do Imóvel!`,
     html: `          
        <br>
         <label class='btns' id='cadastro'>Edite Cadastro <i class="fa-solid fa-table-list"></i></label>
       <br>
       <br>
         <label class='btns' id='imagens'>Edite Imagens  <i class="fa-solid fa-image"></i></label>
       <br>
       <br>
         <label class='btns' id='videos'>Edite Vídeos <i class="fa-solid fa-video"></i></label>
       <br>
       <br>
             
         `,
       showCancelButton: false,
       showConfirmButton: true,
       customClass: {
       popup: 'my-custom_edite' // Aplica a classe CSS personalizada
    },
     didOpen: () => {
      document.body.style.paddingRight = '0px';
     }
});
 document.getElementById('cadastro').addEventListener('click',function(){

        Cadastros2('click')
        setTimeout(function(){
           Swal.close()
        },50)

 });
   document.getElementById('imagens').addEventListener('click',function(){
    //limp_Cad_V_I('click')
       document.getElementById('body_div1').style.display='none'
       document.getElementById('divList').style.display='none'
         document.getElementById('cad_videos').style.display='none' 
          onImagens('click') 
       Swal.fire('Edite Imagens!')
        setTimeout(function(){
           Swal.close()
        },50)
         document.getElementById('cad_imagem').style.display='block'                      
 })            

 document.getElementById('videos').addEventListener('click',function(){
 // limp_Cad_V_I('click')
       document.getElementById('body_div1').style.display='none'
        document.getElementById('divList').style.display='none'
         document.getElementById('cad_imagem').style.display='none' 
          onVideos('click') 
       Swal.fire('Edite Imagens!')
        setTimeout(function(){
           Swal.close()
        },50)
         document.getElementById('cad_videos').style.display='block'                      
 })            
}
 function limp_Cad_V_I(){
  document.getElementById('id_video').value=''
document.getElementById('vd').value=''
document.getElementById('id_video2').value=''
document.getElementById('vd2').value=''
document.getElementById('id_video3').value=''
document.getElementById('vd3').value=''
document.getElementById('edt_img1').value=''
document.getElementById('img').value=''
document.getElementById('edt_img2').value=''
document.getElementById('img2').value=''
document.getElementById('edt_img3').value=''
document.getElementById('img3').value=''
document.getElementById('edt_img4').value=''
document.getElementById('img4').value=''
document.getElementById('edt_img5').value=''
document.getElementById('img5').value=''
document.getElementById('edt_img6').value=''
document.getElementById('img6').value=''
document.getElementById('edt_img7').value=''
document.getElementById('img7').value=''

 }
 function Menu(){
        // window.open('../index.html','blank')   
      Swal.fire({
 title: `Menu de Edição`,
 html: `      
      <p>Acesse pesquisa, troque  foto do whatsapp, troque a url das redes sociais...</p>
   <br>
     <label class='btns' id='Pesquisar'>Pesquisar <i class="fa-solid fa-magnifying-glass"></i> </label>
   <br>
   <br>
     <label class='btns' id='Tel_whats'>Tel WhastsApp <i class="fa-solid fa-phone-volume"></i></label>
   <br>
   <br>
    <label class='btns' id='img_whats'>Imagem WhastsApp <i class="fa-solid fa-image"></i></label>
   <br>
   <br>
    <label class='btns' id='url_insta'>Url Instagran <i class="fa-brands fa-instagram"></i></label>
   <br>
   <br>
     <label class='btns' id='url_face'>Url Facebook <i class="fa-brands fa-facebook-f"></i></label>
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
  document.getElementById('Pesquisar').addEventListener('click',function(){
  Pesquisador('click')
        });
      }
   // result pesquisa
     sessionStorage.setItem('Pesquisa',``)
     function ResutPesquisa() {
     sessionStorage.setItem('ID_imovel',``)
     var itens=   sessionStorage.getItem('itens_')  
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
      popup: 'my-custom_resultpesquisa_' // Aplica a classe CSS personalizada
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
   var listaP = document.getElementById('lista_pesquisa');
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

     div.addEventListener('click', function(){
     sessionStorage.setItem('ID_imovel',`${doc.Código}`)
     sessionStorage.setItem('EdtTela','tela')
     document.getElementById('salas_quant').value= doc.SalasQ;
     document.getElementById('salas_metragen').value= doc.SalasM;
     document.getElementById('suspensão').value= doc.Suspenso;
     document.getElementById('suspensãoData').value= doc.SuspensoData;
     document.getElementById('vendido').value= doc.Vendido;
     document.getElementById('vendidoData').value= doc.VendidoData;
     document.getElementById('Area_metragen').value= doc.AreaConst;
     document.getElementById('codigo').value= doc.Código;
     document.getElementById('titulo').value= doc.Titulo;
     document.getElementById('select_listas').value= doc.Lista;
     document.getElementById('obs').value= doc.OBS;
     document.getElementById('bairro').value= doc.Bairro;
     document.getElementById('valor').value= doc.Valor;
     document.getElementById('endereço').value= doc.End;
     document.getElementById('desconto').value=doc.Desconto;
     document.getElementById('cidade').value=doc.Cidade;
     document.getElementById('valorLoc').value= doc.Valor_Loc;
     document.getElementById('input_UF').value= doc.UF;
     document.getElementById('select_venda').value=doc.Tipo_Venda;
     document.getElementById('rua').value= doc.Rua;
     document.getElementById('numero').value=doc.Numero;
     document.getElementById('valorCond').value= doc.Cond;
     document.getElementById('valorIPTU').value= doc.IPTU;
     document.getElementById('Quint_quant').value=doc.QuintalQ;
     document.getElementById('Quint_metragen').value= doc.QuintalM;
     document.getElementById('Quarto_quant').value=doc.QuartoQ;
     document.getElementById('suite_quant').value=doc.SuiteQ;
     document.getElementById('input_cep').value= doc.CEP
     document.getElementById('banheiro_quant').value= doc.BanheiroQ;
     document.getElementById('varanda_quant').value=doc.VarandaQ;
     document.getElementById('andar_quant').value= doc.Andar;
     document.getElementById('duplex').value=doc.Duplex;
     document.getElementById('Triplex').value=doc.Triplex;
     document.getElementById('piscinas_quant').value= doc.PiscinaQ;
     document.getElementById('piscinas_metragen').value= doc.PiscinaM;
     document.getElementById('vagas_quant').value=  doc.Garagem;
     document.getElementById('playg_quant').value=  doc.Playgrowd;
     document.getElementById('playg_metragen').value=  doc.PlaygrowdMetragem;
     document.getElementById('nome_proprietario').value= doc.Proprietário;
     document.getElementById('Tel_proprietario').value= doc.TelP;
     document.getElementById('cpf_proprietario').value=doc.CPFP;
     sessionStorage.setItem('LIsta',doc.Lista);
     sessionStorage.setItem('DataHora',`${doc.DataHoraInit}`)
     sessionStorage.setItem('data_',`${doc.Data}`)
     sessionStorage.setItem('hora_',`${doc.Hora}`)
     sessionStorage.setItem('Url_Imagem',`${doc.IMG}`)
     sessionStorage.setItem('img2',`${doc.IMG_2}`)
     document.getElementById('img').value=doc.IMG;                     
     document.getElementById('img2').value=doc.IMG2;                      
     document.getElementById('img3').value=doc.IMG3;                      
     document.getElementById('img4').value=doc.IMG4;                   
     document.getElementById('img5').value=doc.IMG5;                    
     document.getElementById('img6').value=doc.IMG6;                    
     document.getElementById('img7').value=doc.IMG7;                    
     document.getElementById('vd').value=doc.VD;                   
     document.getElementById('vd2').value=doc.VD2;                      
     document.getElementById('vd3').value=doc.VD3;                
     document.getElementById('id').value=doc.ID;                    
     document.getElementById('obs2').value=doc.OBS2;                      
     document.getElementById('obs3').value=doc.OBS3;                      
     document.getElementById('obs4').value=doc.OBS4;                        
     document.getElementById('obs5').value=doc.OBS5;                       
     document.getElementById('obs6').value=doc.OBS6;                      
     document.getElementById('obs7').value=doc.OBS7;                      
     document.getElementById('obs8').value=doc.OBS8;                     
     document.getElementById('obs9').value=doc.OBS9;             
     document.getElementById('obs10').value=doc.OBS10;         
     Edit_imovel('click')
  })
    } else{
   }
 })
})
// SetItensZ()
}
   function casa(){
        document.getElementById('cad_imagem').style.display='none'
        var listaP = document.getElementById('listaPesquisa');
        listaP.innerHTML = '';
        document.getElementById('body1').style.display='block'
        document.getElementById('divListaPesquisa').style.display='none'       
     }

 function Pesquisador(){
 //sairlista('click')
       document.getElementById('body_div1').style.display='block'
        document.getElementById('divList').style.display='none'
         document.getElementById('cad_imagem').style.display='none'
           document.getElementById('novocad').style.display='none' 
             document.getElementById('cad_videos').style.display='none' 
              
    Swal.fire({
      title: `Pequisar <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> `,
      html:` <div  class="menu-container">
         <p>Pesquise por Cidade, Bairro ou Código do Imóvel!</p>
         <br>
         <input id='inputSwal' type='text' placeHolder='Pesquisar...'>
         <br><br>
         <button id="Swalpesq" title="">Start <i id="pesq-1" onclick="pesquisar()" class="fa-solid fa-magnifying-glass"></i> </button>
         <br><br><br>  <button id='Sair' class='cancelar'> Cancelar </button>
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
    document.getElementById('Sair').addEventListener('click', function() {
    Swal.fire('Cancelado!','','')
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
   // Menu('click')
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
  //    mostrarAlerta2()
      }
 })
}

   sessionStorage.setItem('DataHora','')
     sessionStorage.setItem('IMG', '');
       sessionStorage.setItem('Listas', '');
         sessionStorage.setItem('dadosIMG', ``);
           sessionStorage.setItem('EdtTela','')     
              sessionStorage.setItem('LIsta',``)
   function MT01(){
      document.getElementById('cad_imagem').style.display='none'
         document.getElementById('novocad').style.display='none'
            document.getElementById('body_div1').style.display='none'  
             document.getElementById('cad_videos').style.display='none'     
              var list= 'Lista Destaques'
                 sessionStorage.setItem('LIsta',`${list}`)
                    startList('click')      
  }
  function MT02(){
      document.getElementById('cad_imagem').style.display='none'
        document.getElementById('novocad').style.display='none'
           document.getElementById('body_div1').style.display='none'
            document.getElementById('cad_videos').style.display='none' 
            var list= 'Lista Casas'
              sessionStorage.setItem('LIsta',`${list}`)
                startList('click')
      
  }
   function MT03(){
       document.getElementById('cad_imagem').style.display='none'
         document.getElementById('novocad').style.display='none'
           document.getElementById('body_div1').style.display='none'
            document.getElementById('cad_videos').style.display='none' 
             var list= 'Lista Apartamentos'
               sessionStorage.setItem('LIsta',`${list}`)
                 startList('click')
       
  }
   function MT04(){
       document.getElementById('cad_imagem').style.display='none'
         document.getElementById('novocad').style.display='none'
           document.getElementById('body_div1').style.display='none'
            document.getElementById('cad_videos').style.display='none' 
             var list= 'Lista Chácaras e Sítios'
              sessionStorage.setItem('LIsta',`${list}`)
               startList('click') 
 }
    function MT05(){
        document.getElementById('cad_imagem').style.display='none'
          document.getElementById('novocad').style.display='none'
            document.getElementById('body_div1').style.display='none'
             document.getElementById('cad_videos').style.display='none' 
              var list= 'Lista Sobrados'
                 sessionStorage.setItem('LIsta',`${list}`)
                    startList('click')     
}
    function MT06(){
        document.getElementById('cad_imagem').style.display='none'
          document.getElementById('novocad').style.display='none'
           document.getElementById('body_div1').style.display='none'
            document.getElementById('cad_videos').style.display='none' 
             var list= 'Lista Galpões'
               sessionStorage.setItem('LIsta',`${list}`)
                startList('click')     
   }
     function MT07(){
         document.getElementById('cad_imagem').style.display='none'
           document.getElementById('novocad').style.display='none'
             document.getElementById('body_div1').style.display='none'
              document.getElementById('cad_videos').style.display='none' 
              var list= 'Lista Terrenos'
                sessionStorage.setItem('LIsta',`${list}`)
                  startList('click')
       
    }
     function MT08(){
        document.getElementById('novocad').style.display='none'
          document.getElementById('body_div1').style.display='none'
           document.getElementById('cad_videos').style.display='none' 
            document.getElementById('cad_imagem').style.display='none'
            var list= 'Lista Lojas'
             sessionStorage.setItem('LIsta',`${list}`)
               startList('click')     
    }
     function startList(){
        document.getElementById('cad_imagem').style.display='none'
         document.getElementById('cad_videos').style.display='none' 
          sessionStorage.setItem('itens','')
            document.getElementById('divList').style.display='block'
             var respList = sessionStorage.getItem('LIsta')
               SetItens('click')
                 sessionStorage.setItem('ID_imovel',``)
                   var h2li= document.getElementById('h2Lista');
                     var pItens= document.getElementById('itens');
                         h2li.innerText=`${respList}`;

  const firebaseConfig = {
  apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
  };
   firebase.initializeApp(firebaseConfig);  
 const db = firebase.firestore();
 var produtosRef = db.collection(`${respList}`);
 var lista = document.getElementById('listas');
 lista.innerHTML = '';
 produtosRef.get().then((querySnapshot) => {
     querySnapshot.forEach(doc => {
     var doc = doc.data();
     var itens= querySnapshot.size         
     var maylist= document.createElement('div');
     var div = document.createElement('div');
     var img=  document.createElement('img');
     var label = document.createElement('label');
     var label2 = document.createElement('label');
     var label3 = document.createElement('label');
     var button= document.createElement('button');
     var br=document.createElement('br');
     var br2=document.createElement('br');
     var br3=document.createElement('br');
     var br4=document.createElement('br');
     var br5=document.createElement('br');
         maylist.id='listaid'
         div.id='divList_'
         img.id='imgList_';
         img.src=`${doc.IMG}`;
         label.id='lblList';
         button.id='btnList'
         label.textContent=`${doc.Titulo } `;
         label2.id='lbllist2';
         label2.textContent=`${doc.Bairro} em ${doc.Cidade} `;
         label3.id='lbllist3';
         label3.textContent=`Código: ${doc.Código}`;
         button.className=''
         button.textContent= ''  
         button.className=`fa-solid fa-pen-to-square`;           
         maylist.appendChild(img)
         div.appendChild(label);
         div.appendChild(br2)
         div.appendChild(label2);
         div.appendChild(br3)
         div.appendChild(br4)
         div.appendChild(label3);
         maylist.appendChild(div)
         maylist.appendChild(br)
         maylist.appendChild(button)
         lista.appendChild(maylist)               
         Swal.fire(`(${itens}) Imóveis encontrados`,'','success')
         sessionStorage.setItem('itens',`${itens}`)
         maylist.addEventListener('click', function(){
         sessionStorage.setItem('ID_imovel',`${doc.Código}`)
         sessionStorage.setItem('EdtTela','tela')
         document.getElementById('salas_quant').value= doc.SalasQ;
         document.getElementById('salas_metragen').value= doc.SalasM;
         document.getElementById('suspensão').value= doc.Suspenso;
         document.getElementById('suspensãoData').value= doc.SuspensoData;
         document.getElementById('vendido').value= doc.Vendido;
         document.getElementById('vendidoData').value= doc.VendidoData;
         document.getElementById('Area_metragen').value= doc.AreaConst;
         document.getElementById('codigo').value= doc.Código;
         document.getElementById('titulo').value= doc.Titulo;
         document.getElementById('select_listas').value= doc.Lista;
         document.getElementById('obs').value= doc.OBS;
         document.getElementById('bairro').value= doc.Bairro;
         document.getElementById('valor').value= doc.Valor;
         document.getElementById('endereço').value= doc.End;
         document.getElementById('desconto').value=doc.Desconto;
         document.getElementById('cidade').value=doc.Cidade;
         document.getElementById('valorLoc').value= doc.Valor_Loc;
         document.getElementById('input_UF').value= doc.UF;
         document.getElementById('select_venda').value=doc.Tipo_Venda;
         document.getElementById('rua').value= doc.Rua;
         document.getElementById('numero').value=doc.Numero;
         document.getElementById('valorCond').value= doc.Cond;
         document.getElementById('valorIPTU').value= doc.IPTU;
         document.getElementById('Quint_quant').value=doc.QuintalQ;
         document.getElementById('Quint_metragen').value= doc.QuintalM;
         document.getElementById('Quarto_quant').value=doc.QuartoQ;
         document.getElementById('suite_quant').value=doc.SuiteQ;
         document.getElementById('input_cep').value= doc.CEP
         document.getElementById('banheiro_quant').value= doc.BanheiroQ;
         document.getElementById('varanda_quant').value=doc.VarandaQ;
         document.getElementById('andar_quant').value= doc.Andar;
         document.getElementById('duplex').value=doc.Duplex;
         document.getElementById('Triplex').value=doc.Triplex;
         document.getElementById('piscinas_quant').value= doc.PiscinaQ;
         document.getElementById('piscinas_metragen').value= doc.PiscinaM;
         document.getElementById('vagas_quant').value=  doc.Garagem;
         document.getElementById('playg_quant').value=  doc.Playgrowd;
         document.getElementById('playg_metragen').value=  doc.PlaygrowdMetragem;
         document.getElementById('nome_proprietario').value= doc.Proprietário;
         document.getElementById('Tel_proprietario').value= doc.TelP;
         document.getElementById('cpf_proprietario').value=doc.CPFP;
         sessionStorage.setItem('LIsta',doc.Lista);
         sessionStorage.setItem('DataHora',`${doc.DataHoraInit}`)
         sessionStorage.setItem('data_',`${doc.Data}`)
         sessionStorage.setItem('hora_',`${doc.Hora}`)
         sessionStorage.setItem('nomeImagem',`${doc.NomeImagem}`);
         document.getElementById('img').value= doc.IMG;                     
         document.getElementById('img2').value=doc.IMG2;                      
         document.getElementById('img3').value=doc.IMG3;                      
         document.getElementById('img4').value=doc.IMG4;                   
         document.getElementById('img5').value=doc.IMG5;                    
         document.getElementById('img6').value=doc.IMG6;                    
         document.getElementById('img7').value=doc.IMG7;                    
         document.getElementById('vd').value=doc.VD;                   
         document.getElementById('vd2').value=doc.VD2;                      
         document.getElementById('vd3').value=doc.VD3;                
         document.getElementById('id').value=doc.ID;                    
         document.getElementById('obs2').value=doc.OBS2;                      
         document.getElementById('obs3').value=doc.OBS3;                      
         document.getElementById('obs4').value=doc.OBS4;                        
         document.getElementById('obs5').value=doc.OBS5;                       
         document.getElementById('obs6').value=doc.OBS6;                      
         document.getElementById('obs7').value=doc.OBS7;                      
         document.getElementById('obs8').value=doc.OBS8;                     
         document.getElementById('obs9').value=doc.OBS9;             
         document.getElementById('obs10').value=doc.OBS10; 
         var img= document.getElementById('img').value;
        
            var nomeImagem= sessionStorage.getItem('nomeImagem');         
         Edit_imovel('click')
       })
     })
 })
       function SetItens(){
        setTimeout(function(){
           var Itens_ = sessionStorage.getItem('itens')
          if(!Itens_|Itens_==''){
             Swal.fire(`Não foram encontrados Imóveis na lista`,'','')
            } else{
          }
        },1200)
     } 
   };

  function limpar(){ 
   document.getElementById('salas_quant').value='';
   document.getElementById('salas_metragen').value='';
   document.getElementById('suspensão').value='Não';
   document.getElementById('suspensãoData').value= '';
   document.getElementById('vendido').value= 'Não';
   document.getElementById('vendidoData').value= '';
   document.getElementById('Area_metragen').value='';        
   document.getElementById('titulo').value='';
   document.getElementById('select_listas').value='';
   document.getElementById('obs').value='';
   document.getElementById('bairro').value='';
   document.getElementById('valor').value='';
   document.getElementById('endereço').value='';
   document.getElementById('desconto').value='';
   document.getElementById('cidade').value='';
   document.getElementById('valorLoc').value='';
   document.getElementById('input_UF').value=''
   document.getElementById('select_venda').value=''
   document.getElementById('rua').value=''
   document.getElementById('numero').value=''
   document.getElementById('valorCond').value=''
   document.getElementById('valorIPTU').value=''
   document.getElementById('Quint_quant').value=''
   document.getElementById('Quint_metragen').value=''
   document.getElementById('Quarto_quant').value=''
   document.getElementById('suite_quant').value=''
   document.getElementById('input_cep').value=''
   document.getElementById('banheiro_quant').value=''
   document.getElementById('varanda_quant').value=''
   document.getElementById('andar_quant').value=''
   document.getElementById('piscinas_quant').value=''
   document.getElementById('piscinas_metragen').value=''
   document.getElementById('playg_quant').value= '';
   document.getElementById('playg_metragen').value='';
   document.getElementById('vagas_quant').value=''
   document.getElementById('nome_proprietario').value=''
   document.getElementById('Tel_proprietario').value=''
   document.getElementById('cpf_proprietario').value=''
   document.getElementById('Triplex').value='não';  
   document.getElementById('duplex').value='não';  
   sessionStorage.setItem('nomeImagem','');
        }
        limpar()

    function limparC1(){
       document.getElementById('suspensãoData').value= ''
         var res1=  document.getElementById('suspensãoData').value;
           document.getElementById('suspensão').value='Não' 
     };
    function limparC2(){
      document.getElementById('vendidoData').value= ''   
        var res2=  document.getElementById('vendidoData').value;
          document.getElementById('vendido').value='Não'
    };
       var data = sessionStorage.getItem('data');
         var hora = sessionStorage.getItem('hora');
    function selectS(){
     var resp1= suspenso= document.getElementById('suspensão').value;
      if(!resp1 || resp1=='' || resp1=='Não'){ 
       // document.getElementById('suspensãoData').value= ''
       } else{
        document.getElementById('suspensãoData').value= `${data} - ${hora}`;
    }
  }
    function formatarDataS(input) {
      var data = sessionStorage.getItem('data');
        var hora = sessionStorage.getItem('hora');
          var valor = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
       if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
         if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
          input.value = valor;
            if (valor.length > 9){
              if(!valor || valor==''){ 
                input.value =  `${data} - ${hora}`
                 } else{
                   input.value = `${valor} - ${hora}`;
                     document.getElementById('suspensão').value='Sim'
                }
       }
   };
    function selectV(){
      var resp2= suspenso= document.getElementById('vendido').value;
      if(!resp2 || resp2=='' || resp2=='Não'){ 
       //   document.getElementById('vendidoData').value= ''
         } else{
         document.getElementById('vendidoData').value= `${data} - ${hora}`;    
      }}
       function formatarDataV(input) {
           var data = sessionStorage.getItem('data');
             var hora = sessionStorage.getItem('hora');
              var valor = input.value.replace(/\D/g, ""); // Remove caracteres não numéricos
      if (valor.length > 2) valor = valor.slice(0, 2) + '/' + valor.slice(2);
      if (valor.length > 5) valor = valor.slice(0, 5) + '/' + valor.slice(5, 9);
        input.value = valor;
      if (valor.length > 9){
         if(!valor || valor==''){ 
          input.value =  `${data} - ${hora}`
          } else{
            input.value = `${valor} - ${hora}`;
              document.getElementById('vendido').value='Sim'
     }
    }
   };
  function sair(){
      document.getElementById('novocad').style.display='none'
         document.getElementById('body_div1').style.display='block'
           document.getElementById('body_div2').style.display='none'
             document.getElementById('divList').style.display='none'
              sessionStorage.setItem('EdtTela','')          
             limpar()
  };
  function sairlista(){
   document.getElementById('novocad').style.display='none'
     document.getElementById('body_div1').style.display='block'
       document.getElementById('body_div2').style.display='none'
        document.getElementById('divList').style.display='none'
          document.getElementById('cad_imagem').style.display='none'
             document.getElementById('cad_videos').style.display='none' 
}
 //Novo Cadastro
     document.getElementById('Tel_proprietario').addEventListener('input', function (e) {
       let value = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
     if (value.length > 11) value = value.slice(0, 11); // Limita ao tamanho correto
        let formattedValue = value.replace(/^(\d{2})(\d)/, '($1) $2')
                               .replace(/(\d{4})(\d{4})$/, '$1-$2');
                 e.target.value = formattedValue;
  });
  function formatarCPF(cpf) {
   cpf = cpf.replace(/\D/g, ""); // Remove todos os caracteres não numéricos
     cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
   return cpf;
}
  function aplicarMascaraCPF(event) {
    let input = event.target;
      input.value = formatarCPF(input.value);
}; 
  function formatarCEP(cep) {
      cep = cep.replace(/\D/g, ""); // Remove caracteres não numéricos
         cep = cep.replace(/(\d{5})(\d)/, "$1-$2"); // Adiciona o hífen no formato XXXXX-XXX
    return cep;
 }
  function aplicarMascaraCEP(event) {
     event.target.value = formatarCEP(event.target.value);
        };       
     var inter1= setInterval(function(){
     var data = sessionStorage.getItem('data');
     var hora = sessionStorage.getItem('hora');
     var titulo = document.getElementById('titulo').value;
     var lista = document.getElementById('select_listas').value;
     var descrição = document.getElementById('obs').value;
     var bairro= document.getElementById('bairro').value;
     var input= document.getElementById('bairro');
     var bairro= input.value.trim();
     var valor_loc= document.getElementById('valorLoc').value;
     var valor= document.getElementById('valor').value;
     var end= document.getElementById('endereço').value;
     var desconto= document.getElementById('desconto').value;
     var cidade= document.getElementById('cidade').value;
     var input2= document.getElementById('cidade');
     var cidade = input2.value.trim();
     var codigo= document.getElementById('codigo').value;
     var uf= document.getElementById('input_UF').value;
     var tipo_Venda= document.getElementById('select_venda').value;         
     var rua= document.getElementById('rua').value;
      var numero= document.getElementById('numero').value;
      var valorCond= document.getElementById('valorCond').value;
      var valorIPTU= document.getElementById('valorIPTU').value;
      var Quint_quant= document.getElementById('Quint_quant').value;
      var Quint_metragen= document.getElementById('Quint_metragen').value;
      var Quarto_quant= document.getElementById('Quarto_quant').value
      var suite_quant= document.getElementById('suite_quant').value;;
      var input_cep= document.getElementById('input_cep').value;
      var banheiro_quant= document.getElementById('banheiro_quant').value;
      var varanda_quant= document.getElementById('varanda_quant').value;
      var andar_quant= document.getElementById('andar_quant').value;
      var duplex= document.getElementById('duplex').value;
      var triplex= document.getElementById('Triplex').value;
      var piscinas_quant= document.getElementById('piscinas_quant').value;
      var piscinas_metragen= document.getElementById('piscinas_metragen').value;
      var vagas_quant= document.getElementById('vagas_quant').value;
      var nome_proprietario= document.getElementById('nome_proprietario').value;
      var Tel_proprietario= document.getElementById('Tel_proprietario').value;
      var cpf_proprietario= document.getElementById('cpf_proprietario').value;
      var playgrowd= document.getElementById('playg_quant').value;
      var playgrowdMetragem= document.getElementById('playg_metragen').value;
      var tipo_Venda= document.getElementById('select_venda').value;
      var areaConst= document.getElementById('Area_metragen').value;
      var suspenso= document.getElementById('suspensão').value;
      var suspensoData= document.getElementById('suspensãoData').value;
      var vendido= document.getElementById('vendido').value;
      var vendidoData= document.getElementById('vendidoData').value;
      var salasM= document.getElementById('salas_metragen').value;
       var salasQ= document.getElementById('salas_quant').value;
       var img= document.getElementById('img').value;
      var img2= document.getElementById('img2').value;
      var img3= document.getElementById('img3').value;
      var img4= document.getElementById('img4').value;
      var img5= document.getElementById('img5').value;
      var img6= document.getElementById('img6').value;
      var img7= document.getElementById('img7').value;
      var vd=  document.getElementById('vd').value;
      var vd2= document.getElementById('vd2').value;
      var vd3= document.getElementById('vd3').value;
      var id= document.getElementById('id').value;
      var obs2= document.getElementById('obs2').value;
       var obs3=  document.getElementById('obs3').value;
        var obs4=  document.getElementById('obs4').value;
         var obs5= document.getElementById('obs5').value;
          var obs6= document.getElementById('obs6').value;
           var obs7=  document.getElementById('obs7').value;
            var obs8=  document.getElementById('obs8').value
             var obs9=  document.getElementById('obs9').value;
              var obs10=  document.getElementById('obs10').value;
               var DataHora= sessionStorage.getItem('DataHora')
              //  var lista= sessionStorage.getItem('LIsta');
                  var nomeImagem= sessionStorage.getItem('nomeImagem');
              
   if (!codigo| codigo ==''|!titulo| titulo==''| !lista| lista=='' | !bairro | bairro=='' | !cidade | cidade=='' |!uf |uf=='' | !tipo_Venda| tipo_Venda==''| !nome_proprietario| nome_proprietario==''| !Tel_proprietario| Tel_proprietario=='') {
     document.getElementById('lbl_IMG').style.display='none';
       document.getElementById('salve_alt').style.display='none';
      } else{
    if( !valor && !valor_loc){
        document.getElementById('lbl_IMG').style.display='none';
         document.getElementById('salve_alt').style.display='none';
      } else {
           var edtTela= sessionStorage.getItem('EdtTela')
         if(!edtTela | edtTela==''){
          document.getElementById('lbl_IMG').style.display='block';
            document.getElementById('salve_alt').style.display='none';
          } else{
          document.getElementById('lbl_IMG').style.display='none';
            document.getElementById('salve_alt').style.display='block';
       }
    }
  }
 },200)
  function NovoCad(){
     var cadImagem= document.getElementById('cad_imagem');
        document.getElementById('cad_videos').style.display='none'     
      if(cadImagem.style.display=='block'){
       document.getElementById('codigo').value='';
        sair('click')
 }
    document.getElementById('cad_imagem').style.display='none'
     document.getElementById('input_UF').value='SP'
      document.getElementById('codigo').value=''
       var h1_notf= document.getElementById('h1_n_cad');
         h1_notf.innerHTML='Novo Cadastro'               
          sessionStorage.setItem('códigoRetur','')
            var tela= document.getElementById('body_div1');
      if(tela.style.display=='none'){
        document.getElementById('body_div1').style.display='block'
          document.getElementById('divList').style.display='none'
            document.getElementById('body_div2').style.display=''
              document.getElementById('novocad').style.display='block'
   } else {
      document.getElementById('body_div2').style.display='block'
         document.getElementById('novocad').style.display='none'
           document.getElementById('body_div1').style.display='none'
              document.getElementById('divList').style.display='none'
                  var hora = sessionStorage.getItem('hora');
                    var num= hora.split(':')
                      var n0= num[0];
                        var n1= num[1];
                         var n2= num[2];
   const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   let codigo = '';
   for (let i = 0; i < 8; i++) {
     codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
 }
      document.getElementById('codigo').value= codigo+n1+n2
       Swal.fire(`${codigo+n1+n2}`,'Codígo Gerado automaticamente','success')
         document.getElementById('novocad').style.display='block'
    }
   // function NovoCad(){
      sessionStorage.setItem('IMG', '');
        sessionStorage.setItem('Lista', '');
          sessionStorage.setItem('dadosIMG', ``);
     }
  function Start() {     
    var resp1= document.getElementById('suspensão').value;
     if(!resp1 || resp1==''|| resp1=='Não'){
      document.getElementById('suspensãoData').value=''
      };
      var resp2= document.getElementById('vendido').value;
     if(!resp2 || resp2==''|| resp2=='Não'){
     document.getElementById('vendidoData').value=''
}
 var firebaseConfigs = {
  apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
    authDomain: "rutimoveis-bc114.firebaseapp.com",
    projectId: "rutimoveis-bc114",
    storageBucket: "rutimoveis-bc114.firebasestorage.app",
    messagingSenderId: "457038463744",
    appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
    measurementId: "G-K330CH24NV"
   };  
     firebase.initializeApp(firebaseConfigs); 
      var data=  sessionStorage.getItem('data')
      var hora =  sessionStorage.getItem('hora')
      var CodRetur= sessionStorage.getItem('códigoRetur')
      var titulo = document.getElementById('titulo').value;
      var lista = document.getElementById('select_listas').value;
      var descrição = document.getElementById('obs').value;
      var bairro= document.getElementById('bairro').value;
      var input= document.getElementById('bairro');
      var bairro= input.value.trim();
      var descrição = document.getElementById('obs').value;
      var rua= document.getElementById('rua').value;
      var numero= document.getElementById('numero').value;
      var valorCond= document.getElementById('valorCond').value;
      var valorIPTU= document.getElementById('valorIPTU').value;
      var Quint_quant= document.getElementById('Quint_quant').value;
      var Quint_metragen= document.getElementById('Quint_metragen').value;
      var Quarto_quant= document.getElementById('Quarto_quant').value
      var suite_quant= document.getElementById('suite_quant').value;
      var input_cep= document.getElementById('input_cep').value;
      var banheiro_quant= document.getElementById('banheiro_quant').value;
      var varanda_quant= document.getElementById('varanda_quant').value;
      var andar_quant= document.getElementById('andar_quant').value;
      var duplex= document.getElementById('duplex').value;
      var triplex= document.getElementById('Triplex').value;
      var piscinas_quant= document.getElementById('piscinas_quant').value;
      var piscinas_metragen= document.getElementById('piscinas_metragen').value;
      var vagas_quant= document.getElementById('vagas_quant').value;
      var playgrowd= document.getElementById('playg_quant').value;
      var playgrowdMetragem= document.getElementById('playg_metragen').value;
      var nome_proprietario= document.getElementById('nome_proprietario').value;
      var Tel_proprietario= document.getElementById('Tel_proprietario').value;
      var cpf_proprietario= document.getElementById('cpf_proprietario').value;
      var valor= document.getElementById('valor').value;
      var valor_loc= document.getElementById('valorLoc').value;
      var end= document.getElementById('endereço').value;
      var desconto= document.getElementById('desconto').value;
      var cidade= document.getElementById('cidade').value;
      var input2= document.getElementById('cidade');
      var cidade = input2.value.trim();
      var codigo= document.getElementById('codigo').value;
      var uf= document.getElementById('input_UF').value;
      var tipo_Venda= document.getElementById('select_venda').value;
      var areaConst= document.getElementById('Area_metragen').value;
      var suspenso= document.getElementById('suspensão').value;
      var suspensoData= document.getElementById('suspensãoData').value;
      var vendido= document.getElementById('vendido').value;
      var vendidoData= document.getElementById('vendidoData').value;
      var salasM= document.getElementById('salas_metragen').value;
      var salasQ= document.getElementById('salas_quant').value;
      var img= document.getElementById('img').value;
      var img2= document.getElementById('img2').value;
      var img3= document.getElementById('img3').value;
      var img4= document.getElementById('img4').value;
      var img5= document.getElementById('img5').value;
      var img6= document.getElementById('img6').value;
      var img7= document.getElementById('img7').value;
      var vd=  document.getElementById('vd').value;
      var vd2= document.getElementById('vd2').value;
      var vd3= document.getElementById('vd3').value;
      var id= document.getElementById('id').value;
      var obs2= document.getElementById('obs2').value;
       var obs3=  document.getElementById('obs3').value;
        var obs4=  document.getElementById('obs4').value;
         var obs5= document.getElementById('obs5').value;
          var obs6= document.getElementById('obs6').value;
           var obs7=  document.getElementById('obs7').value;
            var obs8=  document.getElementById('obs8').value
             var obs9=  document.getElementById('obs9').value;
              var obs10=  document.getElementById('obs10').value;
               var DataHora= sessionStorage.getItem('DataHora')
              //  var lista= sessionStorage.getItem('LIsta');
              var nomeImagem= sessionStorage.getItem('nomeImagem');
        
       if(!CodRetur || CodRetur==''){
             document.getElementById('codigo').style.display='block'
       }else{
           document.getElementById('codigo').style.display='none'
       }
        if(!codigo|| codigo==''){
            Cadastros('click')
        }
        if (!codigo| codigo==''|!titulo| titulo==''| !lista| lista=='' | !bairro | bairro=='' | !cidade | cidade=='' |!uf |uf=='' | !tipo_Venda| tipo_Venda==''| !nome_proprietario| nome_proprietario==''| !Tel_proprietario| Tel_proprietario=='') {         
            Swal.fire('Atenção!', '<h3>Preencha todos os campos!</h3><br><b>01- Escolha uma Lista<br>02- De um Titulo ou nome <b>(Atenção O Titulo não podera ser alterado!)<br>', 'warning');  
        } else{
        document.getElementById('input_img').click();
        document.getElementById('input_img').addEventListener('change', async function(e) {
        function mostrarAlerta() {
         Swal.fire({
             title: 'Carregando Foto...',
             text: 'Aguarde um momento',
             allowOutsideClick: false,
             showConfirmButton: false,
             didOpen: () => {
                 Swal.showLoading();
             }
            });
  }
     mostrarAlerta('click')
      
    const file = e.target.files[0];
     const storageRef = firebase.storage().ref(`${lista}/${titulo}-${codigo}.jpg`);
     const task = storageRef.put(file);
     task.on('state_changed', updateProgress, handleError, async () => {      
     const url_imagem = await storageRef.getDownloadURL();
     Swal.close()
     document.getElementById('myProgress').style.display = 'block';
     var i = 0;
     if (i == 0) {
     i = 1;
     var elem = document.getElementById("myBar");
     var width = 1;
     var id = setInterval(frame, 30);
     function frame() {
         if (width >= 100) {
      clearInterval(id);
      i = 0;                     
   var db = firebase.firestore();       
    db.collection(`${lista}`).doc(`${codigo}`).set({
     Titulo: titulo,
     Bairro: bairro,
     Cidade:cidade,
     Valor: valor,
     Desconto: desconto,
     End: end,
     Data: data,
     Hora: hora,
     IMG: url_imagem,
     OBS: descrição,
     UF: uf,
     Tipo_Venda:tipo_Venda,
     Valor_Loc: valor_loc,
     IMG2:'',
     OBS2:'',
     IMG3:'',
     OBS3:'',
     IMG4:'',
     OBS4:'',
     IMG5:'',
     OBS5:'',
     IMG6:'',
     OBS6:'',
     IMG7:'',
     OBS7:'',
     VD:'',
     OBS8:'',
     VD2:'',
     OBS9:'',
     VD3:'',
     OBS10:'',
     Código: codigo,
     Lista: lista,
     ID: lista,
     QuartoQ: Quarto_quant,
     BanheiroQ: banheiro_quant,
     QuintalQ: Quint_quant,
     QuintalM: Quint_metragen,
     Garagem: vagas_quant,
     PiscinaQ: piscinas_quant,
     PiscinaM: piscinas_metragen,
     Proprietário: nome_proprietario,
     TelP: Tel_proprietario,
     CPFP: cpf_proprietario,
     Duplex: duplex,
     VarandaQ: varanda_quant,
     Rua:rua,
     Numero:numero,
     SuiteQ:suite_quant,
     CEP:input_cep,
     IPTU: valorIPTU,
     Cond:valorCond,
     Andar:andar_quant,
     DataHoraInit: `${data}__${hora}`,
     Playgrowd:playgrowd,
     PlaygrowdMetragem:playgrowdMetragem,
     Triplex:triplex,
     AreaConst:areaConst,
     Suspenso: suspenso,
     SuspensoData:suspensoData,
     Vendido:vendido,
     VendidoData:vendidoData,
     SalasQ:salasQ,
     SalasM:salasM,
     NomeImagem: `${lista}/${titulo}-${codigo}`,     
 });
    var dbd = firebase.firestore();
   dbd.collection(`Pesquisar`).doc(`${codigo}`).set({
    Titulo: titulo,
     Bairro: bairro,
     Cidade:cidade,
     Valor: valor,
     Desconto: desconto,
     End: end,
     Data: data,
     Hora: hora,
     IMG: url_imagem,
     OBS: descrição,
     UF: uf,
     Tipo_Venda:tipo_Venda,
     Valor_Loc: valor_loc,
     IMG2:'',
     OBS2:'',
     IMG3:'',
     OBS3:'',
     IMG4:'',
     OBS4:'',
     IMG5:'',
     OBS5:'',
     IMG6:'',
     OBS6:'',
     IMG7:'',
     OBS7:'',
     VD:'',
     OBS8:'',
     VD2:'',
     OBS9:'',
     VD3:'',
     OBS10:'',
     Código: codigo,
     Lista: lista,
     ID: lista,
     QuartoQ: Quarto_quant,
     BanheiroQ: banheiro_quant,
     QuintalQ: Quint_quant,
     QuintalM: Quint_metragen,
     Garagem: vagas_quant,
     PiscinaQ: piscinas_quant,
     PiscinaM: piscinas_metragen,
     Proprietário: nome_proprietario,
     TelP: Tel_proprietario,
     CPFP: cpf_proprietario,
     Duplex: duplex,
     VarandaQ: varanda_quant,
     Rua:rua,
     Numero:numero,
     SuiteQ:suite_quant,
     CEP:input_cep,
     IPTU: valorIPTU,
     Cond:valorCond,
     Andar:andar_quant,
     DataHoraInit: `${data}__${hora}`,
     Playgrowd:playgrowd,
     PlaygrowdMetragem:playgrowdMetragem,
     Triplex:triplex,
     AreaConst:areaConst,
     Suspenso: suspenso,
     SuspensoData:suspensoData,
     Vendido:vendido,
     VendidoData:vendidoData,
     SalasQ:salasQ,
     SalasM:salasM,
     NomeImagem: `${lista}/${titulo}-${codigo}`,   
 });   
    swal('Cadastro Salvo!', `Titúlo: ${titulo}\n Data: ${data} _ Hora:${hora}`, url_imagem);
      setTimeout(() => {
        document.getElementById('myProgress').style.display = 'none';
         window.location.reload()
    }, 5000);
       } else {
         width++;
          elem.style.width = width + "%";
            elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
        }
      }
     }
    })
  })
}
}
 function updateProgress(snapshot) {
  const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  const bar = document.getElementById('myBar');
  bar.style.width = progress + '%';
  bar.innerHTML = Math.round(progress) + '%';
}
 function handleError(error) {
    console.error('Erro ao enviar arquivo:', error);
  }
             //Editar cadastros
function Cadastros2(){
  var h1_notf= document.getElementById('h1_n_cad');
  h1_notf.innerHTML='Edite esse cadastro!' 
  document.getElementById('body_div2').style.display='block'
  document.getElementById('body_div1').style.display='none'
  document.getElementById('divList').style.display='none'
  document.getElementById('novocad').style.display='block'
   var hora = sessionStorage.getItem('hora');
   var num= hora.split(':')
   var n0= num[0];
   var n1= num[1];
   var n2= num[2];    
 Swal.fire(`${codigo+n1+n2}`,'Codígo Gerado automaticamente','success')
 document.getElementById('body_div2').style.display='block'
}
       
sessionStorage.setItem('IMG', '');
sessionStorage.setItem('Lista', '');
sessionStorage.setItem('dadosIMG', ``);      
function Salvarcad() {
  var resp1= document.getElementById('suspensão').value;
if(!resp1 || resp1==''|| resp1=='Não'){
document.getElementById('suspensãoData').value=''
document.getElementById('suspensão').value='Não'
};
var resp2= document.getElementById('vendido').value;
if(!resp2 || resp2==''|| resp2=='Não'){
document.getElementById('vendidoData').value=''
document.getElementById('vendido').value='Não'
}
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
var img= document.getElementById('img').value;
var img2= document.getElementById('img2').value;
var img3= document.getElementById('img3').value;
var img4= document.getElementById('img4').value;
var img5= document.getElementById('img5').value;
var img6= document.getElementById('img6').value;
var img7= document.getElementById('img7').value;
var vd=  document.getElementById('vd').value;
var vd2= document.getElementById('vd2').value;
var vd3= document.getElementById('vd3').value;
var id= document.getElementById('id').value;
var obs2= document.getElementById('obs2').value;
 var obs3=  document.getElementById('obs3').value;
  var obs4=  document.getElementById('obs4').value;
   var obs5= document.getElementById('obs5').value;
    var obs6= document.getElementById('obs6').value;
     var obs7=  document.getElementById('obs7').value;
      var obs8=  document.getElementById('obs8').value
       var obs9=  document.getElementById('obs9').value;
        var obs10=  document.getElementById('obs10').value;
         var DataHora= sessionStorage.getItem('DataHora')
        //  var lista= sessionStorage.getItem('LIsta');
            var nomeImagem= sessionStorage.getItem('nomeImagem');
           
var CodRetur= sessionStorage.getItem('códigoRetur')
var data=  sessionStorage.getItem('data')
var hora =  sessionStorage.getItem('hora')
var titulo = document.getElementById('titulo').value;
var lista = document.getElementById('select_listas').value;
var descrição = document.getElementById('obs').value;
var bairro= document.getElementById('bairro').value;
var input= document.getElementById('bairro');
var bairro= input.value.trim();
var rua= document.getElementById('rua').value;
var numero= document.getElementById('numero').value;
var valorCond= document.getElementById('valorCond').value;
var valorIPTU= document.getElementById('valorIPTU').value;
var Quint_quant= document.getElementById('Quint_quant').value;
var Quint_metragen= document.getElementById('Quint_metragen').value;
var Quarto_quant= document.getElementById('Quarto_quant').value
var suite_quant= document.getElementById('suite_quant').value;
var input_cep= document.getElementById('input_cep').value;
var banheiro_quant= document.getElementById('banheiro_quant').value;
var varanda_quant= document.getElementById('varanda_quant').value;
var andar_quant= document.getElementById('andar_quant').value;
var duplex= document.getElementById('duplex').value;
var triplex= document.getElementById('Triplex').value;
var piscinas_quant= document.getElementById('piscinas_quant').value;
var piscinas_metragen= document.getElementById('piscinas_metragen').value;
var vagas_quant= document.getElementById('vagas_quant').value;
var playgrowd= document.getElementById('playg_quant').value;
var playgrowdMetragem= document.getElementById('playg_metragen').value;
var nome_proprietario= document.getElementById('nome_proprietario').value;
var Tel_proprietario= document.getElementById('Tel_proprietario').value;
var cpf_proprietario= document.getElementById('cpf_proprietario').value;
var valor= document.getElementById('valor').value;
var valor_loc= document.getElementById('valorLoc').value;
var end= document.getElementById('endereço').value;
var desconto= document.getElementById('desconto').value;
var cidade= document.getElementById('cidade').value;
var input2= document.getElementById('cidade');
var cidade = input2.value.trim();
var codigo= document.getElementById('codigo').value;
var uf= document.getElementById('input_UF').value;
var tipo_Venda= document.getElementById('select_venda').value;
var areaConst= document.getElementById('Area_metragen').value;
var suspenso= document.getElementById('suspensão').value;
var suspensoData= document.getElementById('suspensãoData').value;
var vendido= document.getElementById('vendido').value;
var vendidoData= document.getElementById('vendidoData').value;
var salasM= document.getElementById('salas_metragen').value;
var salasQ= document.getElementById('salas_quant').value;          

if (!codigo| codigo==''|!titulo| titulo==''| !lista| lista=='' | !bairro | bairro=='' | !cidade | cidade=='' |!uf |uf=='' | !tipo_Venda| tipo_Venda=='') {       
 Swal.fire('Atenção!', '<h3>Preencha todos os campos!</h3><br><b>01- Escolha uma Lista<br>02- De um Titulo ou nome <b>(Atenção O Titulo não podera ser alterado!)<br>', 'warning');   
 } else{
 var db = firebase.firestore();
 db.collection(`${lista}`).doc(`${codigo}`).set({
    Titulo: titulo,
    Bairro: bairro,
    Cidade:cidade,
    Valor: valor,
    Desconto: desconto,
    UF: uf,
    Tipo_Venda:tipo_Venda,
    Valor_Loc: valor_loc,
    End: end,
    Data: data,
    Hora: hora,
    IMG: img,
    OBS: descrição,
    IMG2:img2,
    OBS2:obs2,
    IMG3:img3,
    OBS3:obs3,
    IMG4:img4,
    OBS4:obs4,
    IMG5:img5,
    OBS5:obs5,
    IMG6:img6,
    OBS6:obs6,
    IMG7:img7,
    OBS7:obs7,
    VD:vd,
    OBS8:obs8,
    VD2:vd2,
    OBS9:obs9,
    VD3:vd3,
    OBS10:obs10,
    Código: codigo,
    Lista: lista,
    ID: id,
    QuartoQ: Quarto_quant,
    BanheiroQ: banheiro_quant,
    QuintalQ: Quint_quant,
    QuintalM: Quint_metragen,
    Garagem: vagas_quant,
    PiscinaQ: piscinas_quant,
    PiscinaM: piscinas_metragen,
    Proprietário: nome_proprietario,
    TelP: Tel_proprietario,
    CPFP: cpf_proprietario,
    Duplex: duplex,
    VarandaQ: varanda_quant,
    Rua:rua,
    Numero:numero,
    SuiteQ:suite_quant,
    CEP:input_cep,
    IPTU: valorIPTU,
    Cond:valorCond,
    Andar:andar_quant,
    DataHoraInit: DataHora,
    Playgrowd:playgrowd,
    PlaygrowdMetragem:playgrowdMetragem,
    Triplex:triplex,
    AreaConst:areaConst,
    Suspenso: suspenso,
    SuspensoData:suspensoData,
    Vendido:vendido,
    VendidoData:vendidoData,
    SalasQ:salasQ,
    SalasM:salasM,
    NomeImagem: nomeImagem,   
});
     var dbd = firebase.firestore();
 dbd.collection(`Pesquisar`).doc(`${codigo}`).set({
  Titulo: titulo,
    Bairro: bairro,
    Cidade:cidade,
    Valor: valor,
    Desconto: desconto,
    UF: uf,
    Tipo_Venda:tipo_Venda,
    Valor_Loc: valor_loc,
    End: end,
    Data: data,
    Hora: hora,
    IMG: img,
    OBS: descrição,
    IMG2:img2,
    OBS2:obs2,
    IMG3:img3,
    OBS3:obs3,
    IMG4:img4,
    OBS4:obs4,
    IMG5:img5,
    OBS5:obs5,
    IMG6:img6,
    OBS6:obs6,
    IMG7:img7,
    OBS7:obs7,
    VD:vd,
    OBS8:obs8,
    VD2:vd2,
    OBS9:obs9,
    VD3:vd3,
    OBS10:obs10,
    Código: codigo,
    Lista: lista,
    ID: id,
    QuartoQ: Quarto_quant,
    BanheiroQ: banheiro_quant,
    QuintalQ: Quint_quant,
    QuintalM: Quint_metragen,
    Garagem: vagas_quant,
    PiscinaQ: piscinas_quant,
    PiscinaM: piscinas_metragen,
    Proprietário: nome_proprietario,
    TelP: Tel_proprietario,
    CPFP: cpf_proprietario,
    Duplex: duplex,
    VarandaQ: varanda_quant,
    Rua:rua,
    Numero:numero,
    SuiteQ:suite_quant,
    CEP:input_cep,
    IPTU: valorIPTU,
    Cond:valorCond,
    Andar:andar_quant,
    DataHoraInit: DataHora,
    Playgrowd:playgrowd,
    PlaygrowdMetragem:playgrowdMetragem,
    Triplex:triplex,
    AreaConst:areaConst,
    Suspenso: suspenso,
    SuspensoData:suspensoData,
    Vendido:vendido,
    VendidoData:vendidoData,
    SalasQ:salasQ,
    SalasM:salasM,
    NomeImagem: nomeImagem,              
});
   document.getElementById('myProgress').style.display = 'block';
    
    var i = 0;
   if (i == 0) {
   i = 1;
   var elem = document.getElementById("myBar");
   var width = 1;
   var idd = setInterval(frame, 30)

function frame() {
   if (width >= 100) {
       clearInterval(idd);
       i = 0;  
        Swal.close('click')                 
       swal('Cadastro Salvo!', `Titúlo: ${titulo}\n Data: ${data} _ Hora:${hora}`, img);
         document.getElementById('myProgress').style.display = 'none';
          setTimeout(() => {
           window.location.reload()
        }, 4000);
} else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%"; // Atualiza o texto do rótulo
      }
   }
 }   
}}       

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
