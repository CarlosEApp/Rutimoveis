


//fecher listas excluidos, vendidos e suspensos
function Fechar_ex(){
var list = document.getElementById('excluidosList');
list.innerHTML = ''
document.getElementById('div_excluidos').style.display='none'
};
function Fechar_vendidos(){
var list2 = document.getElementById('vendidosList');
list2.innerHTML = ''
document.getElementById('div_vendidos').style.display='none'
};
function Fechar_suspensos(){
var list3 = document.getElementById('esuspensosList');
list3.innerHTML = ''
document.getElementById('div_suspenso').style.display='none'
};

var exclian=setInterval(function(){
var resp1=document.getElementById('div_excluidos').style.display;
var resp2=document.getElementById('div_vendidos').style.display;
var resp3=document.getElementById('div_suspenso').style.display;
if(resp1=='none'&&resp2=='none'&&resp3=="none"){
var classes = document.getElementById('I_movel');
document.getElementById('div_vendasEX_flex').style.display = 'none';
classes.className = 'fa-solid fa-eye'
}
},200)
// botão div imóvel suspenso ou vendido. div abrerta ou fechada
function selEAT() {
var data = sessionStorage.getItem('data')
var hora = sessionStorage.getItem('hora')
var resp = document.getElementById('estadoAimóvel').value;
if (resp == 'Suspenso' || resp == 'Vendido') {
document.getElementById('div_ETA').style.display = 'block'
document.getElementById('dadaETA').value=data;
document.getElementById('horaETA').value=hora;
} else {
document.getElementById('div_ETA').style.display = 'none'
document.getElementById('dadaETA').value='';
document.getElementById('horaETA').value='';
}
}
// botão abre e fecha Imoves EXcluidos
document.getElementById('div_vendasEX_flex').style.display = 'none';
function ImoveisEX() {
var classes = document.getElementById('I_movel');
var janela = document.getElementById('div_vendasEX_flex').style.display;
if (janela == 'block') {
document.getElementById('div_vendasEX_flex').style.display = 'none';
classes.className = 'fa-solid fa-eye'
document.getElementById('div_suspenso').style.display='none'
document.getElementById('div_vendidos').style.display='none'
document.getElementById('div_excluidos').style.display='none'
} else {
document.getElementById('div_suspenso').style.display='block'
document.getElementById('div_vendidos').style.display='block'
document.getElementById('div_excluidos').style.display='block'
classes.className = 'fa-solid fa-eye-low-vision';
document.getElementById('div_vendasEX_flex').style.display = 'block'
var list = document.getElementById('excluidosList');
list.innerHTML = ''
var firebaseConfigu = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigu);
var db = firebase.firestore()
var produtosRef = db.collection(`CódigosExcluidos`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
var itens = querySnapshot.size;
var li = document.createElement('ul');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
var btn=document.createElement('button');
btn.id='btn';
btn.className='fa-solid fa-delete-left'
img.id = 'imgg';
li.id = 'li_';
lbl1.id = 'lbl_'
lbl2.id = 'lbl_2'
lbl1.textContent = doc.Titulo;
lbl2.textContent = doc.Documento;

img.src = doc.IMG
li.appendChild(img)
li.appendChild(lbl1)
li.appendChild(br1)
li.appendChild(lbl2)
list.appendChild(li)
li.addEventListener('click', function() {
swal(`${doc.Titulo}`, `Valor Venda: ${doc.CompraV}\nValor Locação: ${doc.LocaçãoV}\n\n________________Endereço________________\n\nRua: ${doc.Rua}\nNº ${doc.Numero}\nBairro: ${doc.Bairro}\nCidade: ${doc.Cidade}\n\nCódigo: ${doc.Documento}\n\n________________Data/Hora_______________\n\nExcluido em: ${doc.Data} - ${doc.Hora}\n\n`, `${doc.IMG}`)
})
})
})
}
//imoveis Vendidos
var list2 = document.getElementById('vendidosList');
list2.innerHTML = ''
var firebaseConfigi = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfigi);
var db = firebase.firestore()
var produtosRef = db.collection(`Cadastros`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if (doc.EstadoAT == 'Vendido') {
var itens = querySnapshot.size;
var li = document.createElement('ul');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
img.id = 'imgg';
li.id = 'li_';
lbl1.id = 'lbl_'
lbl2.id = 'lbl_2'
lbl1.textContent = doc.Titulo;
lbl2.textContent = doc.Código;
img.src = doc.IMG1
li.appendChild(img)
li.appendChild(lbl1)
li.appendChild(br1)
li.appendChild(lbl2)
list2.appendChild(li)
li.addEventListener('click', function() {
Swal.fire({
title: `Edite ou exclua este imóvel!`,
html: `
<div id='divWhats'>
<p>Copie:</p><label id='Código'></label> </div>
<br><br>    
<button id="btn_edite" title="">Editar</button>      
<br><br>
<button id="btn_excluir" title="">Excluir</button>        
<br><br><br><button id='sair'>Sair</button>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Código').innerHTML=doc.Código
document.getElementById('sair').addEventListener('click',function(){
Swal.close()
});
document.getElementById('btn_excluir').addEventListener('click',function(){
Swal.fire({
title: `Excluir Arquivo!`,
html: ` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Sair </button>
</div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Sair').addEventListener('click', function() {
Swal.close('click')
});
document.getElementById('SwalExCód').addEventListener('click', function() {
var data = sessionStorage.getItem('data')
var hora = sessionStorage.getItem('hora')
var respC = doc.Código;
var respINP = document.getElementById('inputEx').value;
if (respC == respINP) {
var dbex = firebase.firestore();
var documento = doc.Código;
var titulo = doc.Titulo;
var bairro = doc.Bairro;
var rua = doc.Rua;
var numero_ = doc.Numero
var cidade = doc.Cidade;
var valorA = doc.ValorA;
var valorc = doc.ValorC;
var img = doc.IMG1;
var dex = firebase.firestore();
dex.collection('CódigosExcluidos').doc(doc.Código).set({
Documento: documento,
Titulo: titulo,
IMG: img,
Rua: rua,
Bairro: bairro,
Cidade: cidade,
CompraV: valorc,
LocaçãoV: valorA,
Data: data,
Hora: hora,
Numero: numero_,
});
dbex.collection(`${doc.Lista1}`).doc(respINP).delete();
setTimeout(function() {
var db = firebase.firestore();
db.collection(`Cadastros`).doc(respC).delete();
}, 1200)
Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
document.body.style.paddingRight = '0px';
}
})
setTimeout(function() {
Swal.fire('Excluido!', 'Cadastro excluido com sucesso!', 'success')
var list = document.getElementById('list');
list.innerHTML = '';
window.location.reload()
}, 4000)
}
})
});
document.getElementById('btn_edite').addEventListener('click',function(){
document.getElementById('titulo').value = doc.Titulo; //1
document.getElementById('cidade').value = doc.Cidade; //2
document.getElementById('rua').value = doc.Rua; //3
document.getElementById('bairro').value = doc.Bairro; //4
document.getElementById('selectListId_moradia').value = doc.Lista1; //5
document.getElementById('select_venda').value = doc.Lista2; //6
document.getElementById('valorLoc').value = doc.ValorA; //7
document.getElementById('valor').value = doc.ValorC; //8
document.getElementById('inputCodigo').value = doc.Código; //9
document.getElementById('numero').value = doc.Numero; //10
document.getElementById('input_UF').value = doc.UF; //11
document.getElementById('input_cep').value = doc.CEP; //12
document.getElementById('desconto').value = doc.Desconto; //13
document.getElementById('valorCond').value = doc.VCond; //14
document.getElementById('valorIPTU').value = doc.Viptu; //15
document.getElementById('Area_metragen').value = doc.AreaM; //16
document.getElementById('Quint_quant').value = doc.Quintal; //17
document.getElementById('Quint_metragen').value = doc.QuintalM; //18
document.getElementById('salas_quant').value = doc.Sala; //19
document.getElementById('salas_metragen').value = doc.SalaM; //20
document.getElementById('varanda_quant').value = doc.Varanda; //21
document.getElementById('Quarto_quant').value = doc.Quartos; //22
document.getElementById('suite_quant').value = doc.Suite; //23
document.getElementById('banheiro_quant').value = doc.Banheiro; //24
document.getElementById('piscinas_quant').value = doc.Piscina; //25
document.getElementById('piscinas_metragen').value = doc.PiscinaM; //26
document.getElementById('playg_quant').value = doc.Playg; //27
document.getElementById('playg_metragen').value = doc.PlaygM; //28
document.getElementById('andar_quant').value = doc.Andares; //29
document.getElementById('vagas_quant').value = doc.Garagem; //30
document.getElementById('duplex').value = doc.Duplex; //31
document.getElementById('Triplex').value = doc.Triplex; //32
document.getElementById('nome_proprietario').value = doc.NomeP; //33
document.getElementById('Tel_proprietario').value = doc.TelP; //34
document.getElementById('cpf_proprietario').value = doc.CpfP; //35
document.getElementById('endereço').value = doc.End; //36
document.getElementById('estadoAimóvel').value = doc.EstadoAT; //65
if (doc.EATdata && doc.EstadoAT) {
var result = doc.EATdata.split('-');
var um = result[0]
var dois = result[1]
document.getElementById('dadaETA').value = um; //66
document.getElementById('horaETA').value = dois; //67
document.getElementById('div_ETA').style.display = 'block'
} else {
document.getElementById('dadaETA').value = ''; //66
document.getElementById('horaETA').value = ''; //67
document.getElementById('div_ETA').style.display = 'none'
}
//IMGs
document.getElementById('imgUm').src = doc.IMG1
document.getElementById('inputImgUmTitulo').value = doc.Img1T; //39
document.getElementById('inputImgUmMetros').value = doc.Img1M; //40
document.getElementById('imgDois').src = doc.IMG2; //41
document.getElementById('inputImgDoisTitulo').value = doc.Img2T; //43
document.getElementById('inputImgDoisMetros').value = doc.Img2M; //44
document.getElementById('imgTres').src = doc.IMG3; //45
document.getElementById('inputImgTresTitulo').value = doc.Img3T; //47
document.getElementById('inputImgTresMetros').value = doc.Img3M; //48
document.getElementById('imgQuatro').src = doc.IMG4; //49
document.getElementById('inputImgQuatroTitulo').value = doc.Img4T; //51
document.getElementById('inputImgQuatroMetros').value = doc.Img4M; //52
document.getElementById('imgCinco').src = doc.IMG5; //53
document.getElementById('inputImgCincoTitulo').value = doc.Img5T; //55
document.getElementById('inputImgCincoMetros').value = doc.Img5M; //56
document.getElementById('imgSeis').src = doc.IMG6; //57
document.getElementById('inputImgSeisTitulo').value = doc.Img6T; //59
document.getElementById('inputImgSeisMetros').value = doc.Img6M; //60
document.getElementById('imgSete').src = doc.IMG7; //61
document.getElementById('inputImgSeteTitulo').value = doc.Img7T; //63
document.getElementById('inputImgSeteMetros').value = doc.Img7M; //64
var editedata = doc.EditeData
if (!editedata || editedata == '') {
var editedata = `${doc.Data},${doc.Hora}`
sessionStorage.setItem('Editecad', editedata)
} else {
sessionStorage.setItem('Editecad', doc.EditeData)
}
var suspenso = doc.Suspenso
if (!suspenso || suspenso == '') {
sessionStorage.setItem('Suspenso', '')
} else {
sessionStorage.setItem('Suspenso', suspenso)
}
document.getElementById('selectlista').value = ''
var cad = document.getElementById('Icad');
document.getElementById('listadeCad').style.display = 'none'
cad.className = 'fa-solid fa-eye';
document.getElementById('cadUmFlex').style.display = 'block'
document.getElementById('p1').style.color = 'rgb(255, 255, 255)'
document.getElementById('p2').style.color = 'rgb(255, 255, 255)'
document.getElementById('p3').style.color = 'rgb(255, 255, 255)'
document.getElementById('p4').style.color = 'rgb(255, 255, 255)'
document.getElementById('p5').style.color = 'rgb(255, 255, 255)'
document.getElementById('p6').style.color = 'rgb(255, 255, 255)'
document.getElementById('p7').style.color = 'rgb(255, 255, 255)'
document.getElementById('p8').style.color = 'rgb(255, 255, 255)'
ImoveisEX()
});
});
} else {
}
})
})
//imóveis suspensos
var list3 = document.getElementById('esuspensosList');
list3.innerHTML = ''
var firebaseConfige = {
apiKey: "AIzaSyDZXtGGNJwRYxy8EKAj85JFGLHfLD3DMbk",
authDomain: "rutimoveis-bc114.firebaseapp.com",
projectId: "rutimoveis-bc114",
storageBucket: "rutimoveis-bc114.firebasestorage.app",
messagingSenderId: "457038463744",
appId: "1:457038463744:web:e357570db0a9a6ce3529e5",
measurementId: "G-K330CH24NV"
};
firebase.initializeApp(firebaseConfige);
var db = firebase.firestore()
var produtosRef = db.collection(`Cadastros`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if (doc.EstadoAT == 'Suspenso') {
var itens = querySnapshot.size;
var li = document.createElement('ul');
var img = document.createElement('img');
var lbl1 = document.createElement('label');
var lbl2 = document.createElement('label');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
img.id = 'imgg';
li.id = 'li_';
lbl1.id = 'lbl_'
lbl2.id = 'lbl_2'
lbl1.textContent = doc.Titulo;
lbl2.textContent = doc.Código;
img.src = doc.IMG1
li.appendChild(img)
li.appendChild(lbl1)
li.appendChild(br1)
li.appendChild(lbl2)
list3.appendChild(li)
li.addEventListener('click', function() {
Swal.fire({
title: `Edite ou exclua este imóvel!`,
html: `
<div id='divWhats'>
<p>Copie:</p><label id='Código'></label> </div>
<br><br>    
<button id="btn_edite" title="">Editar</button>      
<br><br>
<button id="btn_excluir" title="">Excluir</button>        
<br><br><br><button id='sair'>Sair</button>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Código').innerHTML=doc.Código
document.getElementById('sair').addEventListener('click',function(){
Swal.close()
});
document.getElementById('btn_excluir').addEventListener('click',function(){
Swal.fire({
title: `Excluir Arquivo!`,
html: ` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Sair </button>
</div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Sair').addEventListener('click', function() {
Swal.close('click')
});
document.getElementById('SwalExCód').addEventListener('click', function() {
var data = sessionStorage.getItem('data')
var hora = sessionStorage.getItem('hora')
var respC = doc.Código;
var respINP = document.getElementById('inputEx').value;
if (respC == respINP) {
var dbex = firebase.firestore();
var documento = doc.Código;
var titulo = doc.Titulo;
var bairro = doc.Bairro;
var rua = doc.Rua;
var numero_ = doc.Numero
var cidade = doc.Cidade;
var valorA = doc.ValorA;
var valorc = doc.ValorC;
var img = doc.IMG1;
var dex = firebase.firestore();
dex.collection('CódigosExcluidos').doc(doc.Código).set({
Documento: documento,
Titulo: titulo,
IMG: img,
Rua: rua,
Bairro: bairro,
Cidade: cidade,
CompraV: valorc,
LocaçãoV: valorA,
Data: data,
Hora: hora,
Numero: numero_,
});
dbex.collection(`${doc.Lista1}`).doc(respINP).delete();
setTimeout(function() {
var db = firebase.firestore();
db.collection(`Cadastros`).doc(respC).delete();
}, 1200)
Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
document.body.style.paddingRight = '0px';
}
})
setTimeout(function() {
Swal.fire('Excluido!', 'Cadastro excluido com sucesso!', 'success')
var list = document.getElementById('list');
list.innerHTML = '';
window.location.reload()
}, 4000)
}
})
});
document.getElementById('btn_edite').addEventListener('click',function(){
document.getElementById('titulo').value = doc.Titulo; //1
document.getElementById('cidade').value = doc.Cidade; //2
document.getElementById('rua').value = doc.Rua; //3
document.getElementById('bairro').value = doc.Bairro; //4
document.getElementById('selectListId_moradia').value = doc.Lista1; //5
document.getElementById('select_venda').value = doc.Lista2; //6
document.getElementById('valorLoc').value = doc.ValorA; //7
document.getElementById('valor').value = doc.ValorC; //8
document.getElementById('inputCodigo').value = doc.Código; //9
document.getElementById('numero').value = doc.Numero; //10
document.getElementById('input_UF').value = doc.UF; //11
document.getElementById('input_cep').value = doc.CEP; //12
document.getElementById('desconto').value = doc.Desconto; //13
document.getElementById('valorCond').value = doc.VCond; //14
document.getElementById('valorIPTU').value = doc.Viptu; //15
document.getElementById('Area_metragen').value = doc.AreaM; //16
document.getElementById('Quint_quant').value = doc.Quintal; //17
document.getElementById('Quint_metragen').value = doc.QuintalM; //18
document.getElementById('salas_quant').value = doc.Sala; //19
document.getElementById('salas_metragen').value = doc.SalaM; //20
document.getElementById('varanda_quant').value = doc.Varanda; //21
document.getElementById('Quarto_quant').value = doc.Quartos; //22
document.getElementById('suite_quant').value = doc.Suite; //23
document.getElementById('banheiro_quant').value = doc.Banheiro; //24
document.getElementById('piscinas_quant').value = doc.Piscina; //25
document.getElementById('piscinas_metragen').value = doc.PiscinaM; //26
document.getElementById('playg_quant').value = doc.Playg; //27
document.getElementById('playg_metragen').value = doc.PlaygM; //28
document.getElementById('andar_quant').value = doc.Andares; //29
document.getElementById('vagas_quant').value = doc.Garagem; //30
document.getElementById('duplex').value = doc.Duplex; //31
document.getElementById('Triplex').value = doc.Triplex; //32
document.getElementById('nome_proprietario').value = doc.NomeP; //33
document.getElementById('Tel_proprietario').value = doc.TelP; //34
document.getElementById('cpf_proprietario').value = doc.CpfP; //35
document.getElementById('endereço').value = doc.End; //36
document.getElementById('estadoAimóvel').value = doc.EstadoAT; //65
if (doc.EATdata && doc.EstadoAT) {
var result = doc.EATdata.split('-');
var um = result[0]
var dois = result[1]
document.getElementById('dadaETA').value = um; //66
document.getElementById('horaETA').value = dois; //67
document.getElementById('div_ETA').style.display = 'block'
} else {
document.getElementById('dadaETA').value = ''; //66
document.getElementById('horaETA').value = ''; //67
document.getElementById('div_ETA').style.display = 'none'
}
//IMGs
document.getElementById('imgUm').src = doc.IMG1
document.getElementById('inputImgUmTitulo').value = doc.Img1T; //39
document.getElementById('inputImgUmMetros').value = doc.Img1M; //40
document.getElementById('imgDois').src = doc.IMG2; //41
document.getElementById('inputImgDoisTitulo').value = doc.Img2T; //43
document.getElementById('inputImgDoisMetros').value = doc.Img2M; //44
document.getElementById('imgTres').src = doc.IMG3; //45
document.getElementById('inputImgTresTitulo').value = doc.Img3T; //47
document.getElementById('inputImgTresMetros').value = doc.Img3M; //48
document.getElementById('imgQuatro').src = doc.IMG4; //49
document.getElementById('inputImgQuatroTitulo').value = doc.Img4T; //51
document.getElementById('inputImgQuatroMetros').value = doc.Img4M; //52
document.getElementById('imgCinco').src = doc.IMG5; //53
document.getElementById('inputImgCincoTitulo').value = doc.Img5T; //55
document.getElementById('inputImgCincoMetros').value = doc.Img5M; //56
document.getElementById('imgSeis').src = doc.IMG6; //57
document.getElementById('inputImgSeisTitulo').value = doc.Img6T; //59
document.getElementById('inputImgSeisMetros').value = doc.Img6M; //60
document.getElementById('imgSete').src = doc.IMG7; //61
document.getElementById('inputImgSeteTitulo').value = doc.Img7T; //63
document.getElementById('inputImgSeteMetros').value = doc.Img7M; //64
var editedata = doc.EditeData
if (!editedata || editedata == '') {
var editedata = `${doc.Data},${doc.Hora}`
sessionStorage.setItem('Editecad', editedata)
} else {
sessionStorage.setItem('Editecad', doc.EditeData)
}
var suspenso = doc.Suspenso
if (!suspenso || suspenso == '') {
sessionStorage.setItem('Suspenso', '')
} else {
sessionStorage.setItem('Suspenso', suspenso)
}
document.getElementById('selectlista').value = ''
var cad = document.getElementById('Icad');
document.getElementById('listadeCad').style.display = 'none'
cad.className = 'fa-solid fa-eye';
document.getElementById('cadUmFlex').style.display = 'block'
document.getElementById('p1').style.color = 'rgb(255, 255, 255)'
document.getElementById('p2').style.color = 'rgb(255, 255, 255)'
document.getElementById('p3').style.color = 'rgb(255, 255, 255)'
document.getElementById('p4').style.color = 'rgb(255, 255, 255)'
document.getElementById('p5').style.color = 'rgb(255, 255, 255)'
document.getElementById('p6').style.color = 'rgb(255, 255, 255)'
document.getElementById('p7').style.color = 'rgb(255, 255, 255)'
document.getElementById('p8').style.color = 'rgb(255, 255, 255)'
ImoveisEX()
})
})
} else {
}
})
})
}
//fechar cadastro
function Ssair() {
FecharCad()
}
document.getElementById('listadeCad').style.display = 'none'
//imóveis Cadastrados
function Cadastrados() {
document.getElementById('selectlista').value = ''
var cad = document.getElementById('Icad');
var list = document.getElementById('list');
list.innerHTML = ''
document.getElementById('lbl_itens').style.display = 'none'
var listC = document.getElementById('listadeCad').style.display;
if (listC == 'none') {
document.getElementById('listadeCad').style.display = 'block'
cad.className = 'fa-solid fa-eye-low-vision'
FecharCad()
} else {
document.getElementById('listadeCad').style.display = 'none'
cad.className = 'fa-solid fa-eye'
}
}
function itensL1() {
setTimeout(function() {
document.getElementById('lbl_itens').style.display = 'block'
var itensL1 = sessionStorage.getItem('itensL1')
if (!itensL1 || itensL1 == '') {
document.getElementById('lbl_itens').innerHTML = `Total de Imóveis = 0`
} else {
document.getElementById('lbl_itens').innerHTML = `Total de Imóveis = ${itensL1}`
}
}, 2000)
}
function selectlista() {
var itens= 0
document.getElementById('lbl_itens').style.display = 'none'
sessionStorage.setItem('itensL1', '')
var resp = document.getElementById('selectlista').value;
var list = document.getElementById('list');
list.innerHTML = ''
itensL1()
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
var produtosRef = db.collection(`${resp}`);
produtosRef.get().then((querySnapshot) => {
querySnapshot.forEach(doc => {
var doc = doc.data();
if(doc.EstadoAT=='Vendido'||doc.EstadoAT=='Suspenso'){
}else{
itens++ 
var div = document.createElement('div')
var div2 = document.createElement('div')
var div3 = document.createElement('div')
var div4 = document.createElement('div')
var img = document.createElement('img');
var label1 = document.createElement('label');
var label2 = document.createElement('label');
var label3 = document.createElement('label');
var label4 = document.createElement('label');
var br1 = document.createElement('br');
var br2 = document.createElement('br');
var br3 = document.createElement('br');
var br4 = document.createElement('br');
div.id = 'divlista_'
img.id = 'img_';
var url = doc.IMG1;
if (url.includes("Rutimoveis")) {
img.src = '../src/Rutimoveis img.png';
} else {
img.src = doc.IMG1;
}
label1.id = 'lbl1';
label2.id = 'lbl2';
label3.id = 'lbl3';
label4.id = 'lbl4';
label1.textContent = doc.Titulo;
label2.textContent = doc.Código;
label3.textContent = ''
label3.className = 'fa-solid fa-pen-to-square'
label4.textContent = ''
label4.className = 'fa-solid fa-trash';
div2.appendChild(img);
div3.appendChild(label1);
div3.appendChild(br1);
div3.appendChild(br2);
div3.appendChild(label2);
div4.appendChild(label3);
div4.appendChild(br3);
div4.appendChild(br4);
div4.appendChild(label4);
div.appendChild(div2)
div.appendChild(div3)
div.appendChild(div4)
list.appendChild(div)
sessionStorage.setItem('itensL1', itens)
img.addEventListener('click', function() {
var url_ = doc.IMG1;
if (url_.includes("Rutimoveis")) {
var imagem = '../src/Rutimoveis img.png';
} else {
var imagem = doc.IMG1;
}
swal(`${doc.Titulo}`, '', `${imagem}`)
});
label4.addEventListener('click', function() {
var data = sessionStorage.getItem('data')
var hora = sessionStorage.getItem('hora')
Swal.fire({
title: `Excluir Arquivo!`,
html: ` <div  class="menu-container">
<p>Digite o código e click em Excluir. <br> A exclusão não podera ser desfeita!</p>
<br>
<input id='inputEx' type='text' placeHolder='Digite código...'>
<br><br>
<button id="SwalExCód" title="">Excluir <i class="fa-solid fa-trash"></i></button>
<br><br>  <button id='Sair' class='cancelar'> Sair </button>
</div>
`,
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom_CadExCód' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
document.getElementById('Sair').addEventListener('click', function() {
Swal.close('click')
});
document.getElementById('SwalExCód').addEventListener('click', function() {
var respC = doc.Código;
var respINP = document.getElementById('inputEx').value;
if (respC == respINP) {
var dbex = firebase.firestore();
var documento = doc.Código;
var titulo = doc.Titulo;
var bairro = doc.Bairro;
var rua = doc.Rua;
var numero_ = doc.Numero
var cidade = doc.Cidade;
var valorA = doc.ValorA;
var valorc = doc.ValorC;
var img = doc.IMG1;
var dex = firebase.firestore();
dex.collection('CódigosExcluidos').doc(doc.Código).set({
Documento: documento,
Titulo: titulo,
IMG: img,
Rua: rua,
Bairro: bairro,
Cidade: cidade,
CompraV: valorc,
LocaçãoV: valorA,
Data: data,
Hora: hora,
Numero: numero_,
});
dbex.collection(`${doc.Lista1}`).doc(respINP).delete();
setTimeout(function() {
var db = firebase.firestore();
db.collection(`Cadastros`).doc(respC).delete();
}, 1200)
Swal.fire({
title: `Deletando Arquivos... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
document.body.style.paddingRight = '0px';
}
})
setTimeout(function() {
Swal.fire('Excluido!', 'Cadastro excluido com sucesso!', 'success')
var list = document.getElementById('list');
list.innerHTML = '';
selectlista()
}, 4000)
}
})
});
label3.addEventListener('click', function() {
document.getElementById('titulo').value = doc.Titulo; //1
document.getElementById('cidade').value = doc.Cidade; //2
document.getElementById('rua').value = doc.Rua; //3
document.getElementById('bairro').value = doc.Bairro; //4
document.getElementById('selectListId_moradia').value = doc.Lista1; //5
document.getElementById('select_venda').value = doc.Lista2; //6
document.getElementById('valorLoc').value = doc.ValorA; //7
document.getElementById('valor').value = doc.ValorC; //8
document.getElementById('inputCodigo').value = doc.Código; //9
document.getElementById('numero').value = doc.Numero; //10
document.getElementById('input_UF').value = doc.UF; //11
document.getElementById('input_cep').value = doc.CEP; //12
document.getElementById('desconto').value = doc.Desconto; //13
document.getElementById('valorCond').value = doc.VCond; //14
document.getElementById('valorIPTU').value = doc.Viptu; //15
document.getElementById('Area_metragen').value = doc.AreaM; //16
document.getElementById('Quint_quant').value = doc.Quintal; //17
document.getElementById('Quint_metragen').value = doc.QuintalM; //18
document.getElementById('salas_quant').value = doc.Sala; //19
document.getElementById('salas_metragen').value = doc.SalaM; //20
document.getElementById('varanda_quant').value = doc.Varanda; //21
document.getElementById('Quarto_quant').value = doc.Quartos; //22
document.getElementById('suite_quant').value = doc.Suite; //23
document.getElementById('banheiro_quant').value = doc.Banheiro; //24
document.getElementById('piscinas_quant').value = doc.Piscina; //25
document.getElementById('piscinas_metragen').value = doc.PiscinaM; //26
document.getElementById('playg_quant').value = doc.Playg; //27
document.getElementById('playg_metragen').value = doc.PlaygM; //28
document.getElementById('andar_quant').value = doc.Andares; //29
document.getElementById('vagas_quant').value = doc.Garagem; //30
document.getElementById('duplex').value = doc.Duplex; //31
document.getElementById('Triplex').value = doc.Triplex; //32
document.getElementById('nome_proprietario').value = doc.NomeP; //33
document.getElementById('Tel_proprietario').value = doc.TelP; //34
document.getElementById('cpf_proprietario').value = doc.CpfP; //35
document.getElementById('endereço').value = doc.End; //36
document.getElementById('estadoAimóvel').value = doc.EstadoAT; //65
if (doc.EATdata && doc.EstadoAT) {
var result = doc.EATdata.split('-');
var um = result[0]
var dois = result[1]
document.getElementById('dadaETA').value = um; //66
document.getElementById('horaETA').value = dois; //67
document.getElementById('div_ETA').style.display = 'block'
} else {
document.getElementById('dadaETA').value = ''; //66
document.getElementById('horaETA').value = ''; //67
document.getElementById('div_ETA').style.display = 'none'
}
//IMGs
document.getElementById('imgUm').src = doc.IMG1
document.getElementById('inputImgUmTitulo').value = doc.Img1T; //39
document.getElementById('inputImgUmMetros').value = doc.Img1M; //40
document.getElementById('imgDois').src = doc.IMG2; //41
document.getElementById('inputImgDoisTitulo').value = doc.Img2T; //43
document.getElementById('inputImgDoisMetros').value = doc.Img2M; //44
document.getElementById('imgTres').src = doc.IMG3; //45
document.getElementById('inputImgTresTitulo').value = doc.Img3T; //47
document.getElementById('inputImgTresMetros').value = doc.Img3M; //48
document.getElementById('imgQuatro').src = doc.IMG4; //49
document.getElementById('inputImgQuatroTitulo').value = doc.Img4T; //51
document.getElementById('inputImgQuatroMetros').value = doc.Img4M; //52
document.getElementById('imgCinco').src = doc.IMG5; //53
document.getElementById('inputImgCincoTitulo').value = doc.Img5T; //55
document.getElementById('inputImgCincoMetros').value = doc.Img5M; //56
document.getElementById('imgSeis').src = doc.IMG6; //57
document.getElementById('inputImgSeisTitulo').value = doc.Img6T; //59
document.getElementById('inputImgSeisMetros').value = doc.Img6M; //60
document.getElementById('imgSete').src = doc.IMG7; //61
document.getElementById('inputImgSeteTitulo').value = doc.Img7T; //63
document.getElementById('inputImgSeteMetros').value = doc.Img7M; //64
var editedata = doc.EditeData
if (!editedata || editedata == '') {
var editedata = `${doc.Data},${doc.Hora}`
sessionStorage.setItem('Editecad', editedata)
} else {
sessionStorage.setItem('Editecad', doc.EditeData)
}
var suspenso = doc.Suspenso
if (!suspenso || suspenso == '') {
sessionStorage.setItem('Suspenso', '')
} else {
sessionStorage.setItem('Suspenso', suspenso)
}
document.getElementById('selectlista').value = ''
var cad = document.getElementById('Icad');
document.getElementById('listadeCad').style.display = 'none'
document.getElementById('listadeCad').style.display = 'none'
cad.className = 'fa-solid fa-eye';
document.getElementById('cadUmFlex').style.display = 'block'
document.getElementById('p1').style.color = 'rgb(255, 255, 255)'
document.getElementById('p2').style.color = 'rgb(255, 255, 255)'
document.getElementById('p3').style.color = 'rgb(255, 255, 255)'
document.getElementById('p4').style.color = 'rgb(255, 255, 255)'
document.getElementById('p5').style.color = 'rgb(255, 255, 255)'
document.getElementById('p6').style.color = 'rgb(255, 255, 255)'
document.getElementById('p7').style.color = 'rgb(255, 255, 255)'
document.getElementById('p8').style.color = 'rgb(255, 255, 255)'
});
}
})
})
}
//Salvar cadastro
function mostrarAlertaSalvar() {
Swal.fire({
title: `Salvando cadastro... `,
text: `Aguarde...`,
allowOutsideClick: false,
showConfirmButton: false,
didOpen: () => {
Swal.showLoading();
document.body.style.paddingRight = '0px';
}
});
setTimeout(function() {
Swal.fire('Imóvel salvo!', 'imóvel cadastrado com sucesso!', 'success')
setTimeout(function() {
window.location.reload()
}, 2000)
}, 5000)
};
sessionStorage.setItem('Editecad', '')
function salvarCad() {

  var titulo = document.getElementById('titulo').value.trim(); //1
  var cidade = document.getElementById('cidade').value.trim(); //2
  var rua = document.getElementById('rua').value.trim(); //3
  var bairro = document.getElementById('bairro').value.trim(); //4
  var select1 = document.getElementById('selectListId_moradia').value.trim(); //5
  var select2 = document.getElementById('select_venda').value.trim(); //6
  var valorA = document.getElementById('valorLoc').value.trim(); //7
  var valorC = document.getElementById('valor').value.trim(); //8
  var codigo = document.getElementById('inputCodigo').value.trim(); //9
  var numero = document.getElementById('numero').value.trim(); //10
  var uf = document.getElementById('input_UF').value.trim(); //11
  var cep = document.getElementById('input_cep').value.trim(); //12
  var desconto = document.getElementById('desconto').value.trim(); //13
  var Vcond = document.getElementById('valorCond').value.trim(); //14
  var Viptu = document.getElementById('valorIPTU').value.trim(); //15
  var areaM = document.getElementById('Area_metragen').value.trim(); //16
  var quintal = document.getElementById('Quint_quant').value.trim(); //17
  var quintalM = document.getElementById('Quint_metragen').value.trim(); //18
  var sala = document.getElementById('salas_quant').value.trim(); //19
  var salaM = document.getElementById('salas_metragen').value.trim(); //20
  var varanda = document.getElementById('varanda_quant').value.trim(); //21
  var quartos = document.getElementById('Quarto_quant').value.trim(); //22
  var suites = document.getElementById('suite_quant').value.trim(); //23
  var banheiros = document.getElementById('banheiro_quant').value.trim(); //24
  var piscinas = document.getElementById('piscinas_quant').value.trim(); //25
  var piscinaM = document.getElementById('piscinas_metragen').value.trim(); //26
  var playg = document.getElementById('playg_quant').value.trim(); //27
  var playgM = document.getElementById('playg_metragen').value.trim(); //28
  var Andares = document.getElementById('andar_quant').value.trim(); //29
  var Vgaragem = document.getElementById('vagas_quant').value.trim(); //30
  var duplex = document.getElementById('duplex').value.trim(); //31
  var triplex = document.getElementById('Triplex').value.trim(); //32
  var NomeP = document.getElementById('nome_proprietario').value.trim(); //33
  var telP = document.getElementById('Tel_proprietario').value.trim(); //34
  var cpfP = document.getElementById('cpf_proprietario').value.trim(); //35
  var end = document.getElementById('endereço').value.trim(); //36
  var estadoAT = document.getElementById('estadoAimóvel').value.trim(); //65
  var eatd = document.getElementById('dadaETA').value.trim(); //66
  var eath = document.getElementById('horaETA').value.trim(); //67
var eatdata = `${eatd} - ${eath}`
//IMGs
var img1 = document.getElementById('imgUm').src;
var img1T = document.getElementById('inputImgUmTitulo').value; //39
var img1M = document.getElementById('inputImgUmMetros').value; //40
var img2 = document.getElementById('imgDois').src; //41
var img2T = document.getElementById('inputImgDoisTitulo').value; //43
var img2M = document.getElementById('inputImgDoisMetros').value; //44
var img3 = document.getElementById('imgTres').src; //45
var img3T = document.getElementById('inputImgTresTitulo').value; //47
var img3M = document.getElementById('inputImgTresMetros').value; //48
var img4 = document.getElementById('imgQuatro').src; //49
var img4T = document.getElementById('inputImgQuatroTitulo').value; //51
var img4M = document.getElementById('inputImgQuatroMetros').value; //52
var img5 = document.getElementById('imgCinco').src; //53
var img5T = document.getElementById('inputImgCincoTitulo').value; //55
var img5M = document.getElementById('inputImgCincoMetros').value; //56
var img6 = document.getElementById('imgSeis').src; //57
var img6T = document.getElementById('inputImgSeisTitulo').value; //59
var img6M = document.getElementById('inputImgSeisMetros').value; //60
var img7 = document.getElementById('imgSete').src; //61
var img7T = document.getElementById('inputImgSeteTitulo').value; //63
var img7M = document.getElementById('inputImgSeteMetros').value; //64
var data = sessionStorage.getItem('data')
var hora = sessionStorage.getItem('hora')
var editedata = sessionStorage.getItem('Editecad')
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
db.collection(select1).doc(codigo).set({
Titulo: titulo,
Cidade: cidade,
Rua: rua,
Bairro: bairro,
Lista1: select1,
Lista2: select2,
ValorA: valorA,
ValorC: valorC,
Código: codigo,
Numero: numero,
UF: uf,
CEP: cep,
Desconto: desconto,
VCond: Vcond,
Viptu: Viptu,
AreaM: areaM,
Quintal: quintal,
QuintalM: quintalM,
Sala: sala,
SalaM: salaM,
Varanda: varanda,
Quartos: quartos,
Suite: suites,
Banheiro: banheiros,
Piscina: piscinas,
PiscinaM: piscinaM,
Playg: playg,
PlaygM: playgM,
Andares: Andares,
Garagem: Vgaragem,
Duplex: duplex,
Triplex: triplex,
NomeP: NomeP,
TelP: telP,
CpfP: cpfP,
End: end,
IMG1: img1,
Img1T: img1T,
Img1M: img1M,
IMG2: img2,
Img2T: img2T,
Img2M: img2M,
IMG3: img3,
Img3T: img3T,
Img3M: img3M,
IMG4: img4,
Img4T: img4T,
Img4M: img4M,
IMG5: img5,
Img5T: img5T,
Img5M: img5M,
IMG6: img6,
Img6T: img6T,
Img6M: img6M,
IMG7: img7,
Img7T: img7T,
Img7M: img7M,
Data: data,
Hora: hora,
EditeData: editedata,
EstadoAT: estadoAT,
EATdata: eatdata,
});
var dbc = firebase.firestore();
dbc.collection('Cadastros').doc(codigo).set({
Titulo: titulo,
Cidade: cidade,
Rua: rua,
Bairro: bairro,
Lista1: select1,
Lista2: select2,
ValorA: valorA,
ValorC: valorC,
Código: codigo,
Numero: numero,
UF: uf,
CEP: cep,
Desconto: desconto,
VCond: Vcond,
Viptu: Viptu,
AreaM: areaM,
Quintal: quintal,
QuintalM: quintalM,
Sala: sala,
SalaM: salaM,
Varanda: varanda,
Quartos: quartos,
Suite: suites,
Banheiro: banheiros,
Piscina: piscinas,
PiscinaM: piscinaM,
Playg: playg,
PlaygM: playgM,
Andares: Andares,
Garagem: Vgaragem,
Duplex: duplex,
Triplex: triplex,
NomeP: NomeP,
TelP: telP,
CpfP: cpfP,
End: end,
IMG1: img1,
Img1T: img1T,
Img1M: img1M,
IMG2: img2,
Img2T: img2T,
Img2M: img2M,
IMG3: img3,
Img3T: img3T,
Img3M: img3M,
IMG: img4,
Img4T: img4T,
Img4M: img4M,
IMG5: img5,
Img5T: img5T,
Img5M: img5M,
IMG6: img6,
Img6T: img6T,
Img6M: img6M,
IMG7: img7,
Img7T: img7T,
Img7M: img7M,
Data: data,
Hora: hora,
EditeData: editedata,
EstadoAT: estadoAT,
EATdata: eatdata,
})
mostrarAlertaSalvar()
}
//alerta
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
setTimeout(function() {
Swal.close()
}, 80000)
};
//botões IMGs
function IMG01() {
document.getElementById('filesUm').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesUm');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img1.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {

}, function error(err) {}, function complete() {
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
document.getElementById('imgUm').src = url_imagem
document.getElementById('imgUm').value = `${url_imagem}`
setTimeout(function() {
var resp = document.getElementById('imgUm').value;
// alert(resp)
document.getElementById('myProgressIMG1').style.display = 'none'
}, 1000)
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
function IMG02() {
document.getElementById('filesDois').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesDois');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img2.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem2) {
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
document.getElementById('imgDois').src = url_imagem2
document.getElementById('imgDois').value = `${url_imagem2}`
setTimeout(function() {
var resp = document.getElementById('imgDois').value;
//  alert(resp)
document.getElementById('myProgressIMG2').style.display = 'none'
}, 1000)
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
function IMG03() {
document.getElementById('filesTres').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesTres');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img3.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem3) {
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
document.getElementById('imgTres').src = url_imagem3
document.getElementById('imgTres').value = `${url_imagem3}`
setTimeout(function() {
var resp = document.getElementById('imgTres').value;
//alert(resp)
document.getElementById('myProgressIMG3').style.display = 'none'
}, 1000)
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
function IMG04() {
document.getElementById('filesQuatro').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesQuatro');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img4.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem4) {
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
document.getElementById('imgQuatro').src = url_imagem4
document.getElementById('imgQuatro').value = `${url_imagem4}`
setTimeout(function() {
var resp = document.getElementById('imgQuatro').value;
// alert(resp)
document.getElementById('myProgressIMG4').style.display = 'none'
}, 1000)
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
function IMG05() {
document.getElementById('filesCinco').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesCinco');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img5.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem5) {
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
document.getElementById('imgCinco').src = url_imagem5
document.getElementById('imgCinco').value = `${url_imagem5}`
setTimeout(function() {
var resp = document.getElementById('imgCinco').value;
//alert(resp)
document.getElementById('myProgressIMG5').style.display = 'none'
}, 1000)
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
function IMG06() {
document.getElementById('filesSeis').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesSeis');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img6.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem6) {
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
document.getElementById('imgSeis').src = url_imagem6
document.getElementById('imgSeis').value = `${url_imagem6}`
setTimeout(function() {
var resp = document.getElementById('imgSeis').value;
//alert(resp)
document.getElementById('myProgressIMG6').style.display = 'none'
}, 1000)
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
function IMG07() {
document.getElementById('filesSete').click();
var código = document.getElementById('inputCodigo').value;
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
var fileButton = document.getElementById('filesSete');
fileButton.addEventListener('change', function(e) {
var file = e.target.files[0];
var storageRef = firebase.storage().ref(`${código}/img7.jpg`);
var task = storageRef.put(file);
mostrarAlerta()
task.on('state_changed', function progress(snapshot) {}, function error(err) {}, function complete() {
storageRef.getDownloadURL().then(function(url_imagem7) {
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
document.getElementById('imgSete').src = url_imagem7
document.getElementById('imgSete').value = `${url_imagem7}`
setTimeout(function() {
var resp = document.getElementById('imgSete').src;
//alert(resp)
document.getElementById('myProgressIMG7').style.display = 'none'
}, 1000)
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
function LimparC() {
sessionStorage.setItem('Editecad', '')
document.getElementById('inputCodigo').value = ''; //00
document.getElementById('titulo').value = ''; //1
document.getElementById('cidade').value = ''; //2
document.getElementById('rua').value = ''; //3
document.getElementById('bairro').value = ''; //4
document.getElementById('selectListId_moradia').value = ''; //5
document.getElementById('select_venda').value = ''; //6
document.getElementById('valorLoc').value = ''; //7
document.getElementById('valor').value = ''; //8
document.getElementById('inputCodigo').value = ''; //9
document.getElementById('numero').value = ''; //10
document.getElementById('input_UF').value = ''; //11
document.getElementById('input_cep').value = ''; //12
document.getElementById('desconto').value = ''; //13
document.getElementById('valorCond').value = ''; //14
document.getElementById('valorIPTU').value = ''; //15
document.getElementById('Area_metragen').value = ''; //16
document.getElementById('Quint_quant').value = ''; //17
document.getElementById('Quint_metragen').value = ''; //18
document.getElementById('salas_quant').value = ''; //19
document.getElementById('salas_metragen').value = ''; //20
document.getElementById('varanda_quant').value = ''; //21
document.getElementById('Quarto_quant').value = ''; //22
document.getElementById('suite_quant').value = ''; //23
document.getElementById('banheiro_quant').value = ''; //24
document.getElementById('piscinas_quant').value = ''; //25
document.getElementById('piscinas_metragen').value = ''; //26
document.getElementById('playg_quant').value = ''; //27
document.getElementById('playg_metragen').value = ''; //28
document.getElementById('andar_quant').value = ''; //29
document.getElementById('vagas_quant').value = ''; //30
document.getElementById('duplex').value = ''; //31
document.getElementById('Triplex').value = ''; //32
document.getElementById('nome_proprietario').value = ''; //33
document.getElementById('Tel_proprietario').value = ''; //34
document.getElementById('cpf_proprietario').value = ''; //35
document.getElementById('endereço').value = ''; //36
document.getElementById('estadoAimóvel').value = ''; //65
//IMGs
document.getElementById('imgUm').src = '../src/Rutimoveis img.png'; //37
//sessionStorage.setItem('IMG1','')//38
document.getElementById('inputImgUmTitulo').value = ''; //39
document.getElementById('inputImgUmMetros').value = ''; //40
document.getElementById('imgDois').src = '../src/Rutimoveis img.png'; //41
//sessionStorage.setItem('IMG2','')//42
document.getElementById('inputImgDoisTitulo').value = ''; //43
document.getElementById('inputImgDoisMetros').value = ''; //44
document.getElementById('imgTres').src = '../src/Rutimoveis img.png'; //45
sessionStorage.setItem('IMG3', '') //46
document.getElementById('inputImgTresTitulo').value = ''; //47
document.getElementById('inputImgTresMetros').value = ''; //48
document.getElementById('imgQuatro').src = '../src/Rutimoveis img.png'; //49
//sessionStorage.setItem('IMG4','')//50
document.getElementById('inputImgQuatroTitulo').value = ''; //51
document.getElementById('inputImgQuatroMetros').value = ''; //52
document.getElementById('imgCinco').src = '../src/Rutimoveis img.png'; //53
//sessionStorage.setItem('IMG5','')//54
document.getElementById('inputImgCincoTitulo').value = ''; //55
document.getElementById('inputImgCincoMetros').value = ''; //56
document.getElementById('imgSeis').src = '../src/Rutimoveis img.png'; //57
//sessionStorage.setItem('IMG6','')//58
document.getElementById('inputImgSeisTitulo').value = ''; //59
document.getElementById('inputImgSeisMetros').value = ''; //60
document.getElementById('imgSete').src = '../src/Rutimoveis img.png'; //61
//sessionStorage.setItem('IMG7','')//62
document.getElementById('inputImgSeteTitulo').value = ''; //63
document.getElementById('inputImgSeteMetros').value = ''; //64
document.getElementById('p1').style.color = 'rgb(255, 255, 255)'
document.getElementById('p2').style.color = 'rgb(255, 255, 255)'
document.getElementById('p3').style.color = 'rgb(255, 255, 255)'
document.getElementById('p4').style.color = 'rgb(255, 255, 255)'
document.getElementById('p5').style.color = 'rgb(255, 255, 255)'
document.getElementById('p6').style.color = 'rgb(255, 255, 255)'
document.getElementById('p7').style.color = 'rgb(255, 255, 255)'
document.getElementById('p8').style.color = 'rgb(255, 255, 255)'
}
//botão proxima fase do cadastro
function proximo() {
var cidade = document.getElementById('cidade').value;
var bairro = document.getElementById('bairro').value;
var lista1 = document.getElementById('selectListId_moradia').value;
var lista2 = document.getElementById('select_venda').value;
var valorC = document.getElementById('valor').value;
var valorA = document.getElementById('valorLoc').value;
var lblCod = document.getElementById('lbl_codigo');
var lblTitulo = document.getElementById('lbl_titulo');
var código = document.getElementById('inputCodigo').value;
var Titulo = document.getElementById('titulo').value;
lblCod.innerHTML = `Código: ${código}`;
lblTitulo.innerHTML = `Titulo: ${Titulo}`;

if (!código || código == '') {
document.getElementById('p1').style.color = 'red'
} else {
document.getElementById('p1').style.color = 'rgb(0, 214, 36)'
};
if (!lista1 || lista1 == '') {
document.getElementById('p2').style.color = 'red'
} else {
document.getElementById('p2').style.color = 'rgb(0, 214, 36)'
};
if (!Titulo || Titulo == '') {
document.getElementById('p3').style.color = 'red'
} else {
document.getElementById('p3').style.color = 'rgb(0, 214, 36)'
};
if (!bairro || bairro == '') {
document.getElementById('p4').style.color = 'red'
} else {
document.getElementById('p4').style.color = 'rgb(0, 214, 36)'
};
if (!cidade || cidade == '') {
document.getElementById('p5').style.color = 'red'
} else {
document.getElementById('p5').style.color = 'rgb(0, 214, 36)'
};
if (!lista2 || lista2 == '') {
document.getElementById('p6').style.color = 'red'
} else {
document.getElementById('p6').style.color = 'rgb(0, 214, 36)'
};
if (!valorC || valorC == '') {
if (!valorA || valorA == '') {
document.getElementById('p7').style.color = 'red'
} else {
document.getElementById('p7').style.color = 'rgb(0, 214, 36)'
}
} else {
document.getElementById('p7').style.color = 'rgb(0, 214, 36)'
};
if (!valorA || valorA == '') {
if (!valorC || valorC == '') {
document.getElementById('p8').style.color = 'red'
} else {
document.getElementById('p8').style.color = 'rgb(0, 214, 36)'
}
} else {
document.getElementById('p8').style.color = 'rgb(0, 214, 36)'
};

if (!código || código == '' || !Titulo || Titulo == '' || !lista1 || lista1 == '' || !lista2 || lista2 == '' || !bairro || bairro == '' || !cidade || cidade == '') {
Swal.fire('Preencha os campos!', 'Preencha todos os campos obrigatórios.', 'warning')
} else {
if (valorA == '' && valorC == '') {
Swal.fire('Preencha o Valor!', 'Preencha pelomenos um dos campos valores, valor de compra, valor de locação ou ambos.', 'warning')
} else {
document.getElementById('cadUmFlex').style.display = 'none'
document.getElementById('cadUmFlex2').style.display = 'block'
document.getElementById('a_cad2').click()
}
}
}
//format Tel
document.getElementById('Tel_proprietario').addEventListener('input', function(e) {
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
function aplicarMascaraCEP(event_) {
event_.target.value = formatarCEP(event_.target.value);
}
//Voltar ficha 1 cadastro
function Vvoltar() {
voltarCad()
}
//Voltar ficha 1 cadastro
function voltarCad() {
document.getElementById('cadUmFlex2').style.display = 'none'
document.getElementById('cadUmFlex').style.display = 'block'
document.getElementById('a_cad2').click()
}
//Botão abrir Novo Cadastro
sessionStorage.setItem('SessiCodigo', ``)
document.getElementById('cadUmFlex').style.display = 'None'
document.getElementById('cadUmFlex2').style.display = 'none'
function NovoCad() {
document.getElementById('div_vendasEX_flex').style.display = 'none'
document.getElementById('selectlista').value = ''
var cad = document.getElementById('Icad');
document.getElementById('listadeCad').style.display = 'none'
cad.className = 'fa-solid fa-eye';
Swal.fire({
showCancelButton: false,
showConfirmButton: false,
customClass: {
popup: 'my-custom' // Aplica a classe CSS personalizada
},
didOpen: () => {
document.body.style.paddingRight = '0px';
}
});
var resp = document.getElementById('cadUmFlex').style.display;
var resp2 = document.getElementById('cadUmFlex2').style.display;
if (resp == 'block' || resp2 == 'block') {
Swal.fire('O Cadastro esta aberto!', 'Para fechar o cadastro click no botão abaixo "fechar"', 'warning')
} else {
document.getElementById('cadUmFlex').style.display = 'block'
var hora = sessionStorage.getItem('hora');
var num = hora.split(':')
var n0 = num[0];
var n1 = num[1];
var n2 = num[2];
const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let codigo = '';
for (let i = 0; i < 8; i++) {
codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
document.getElementById('inputCodigo').value = codigo + n1 + n2
Swal.fire('Novo cadastro!', `Cadastre um novo imóvel.<br>Código gerado: <b>${codigo+n1+n2}</b>`, 'success')
}
}
}
//fechar cadastro
function FecharCad() {
document.getElementById('cadUmFlex').style.display = 'None';
LimparC()
document.getElementById("a_cad2").click()
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
// const lbl_data = document.getElementById('lbl-data');
// lbl_data.innerHTML = `${data}`
sessionStorage.setItem('data', data)
sessionStorage.setItem('hora', timeString)
//var Data = document.getElementById('lbl_data_head')
//Data.innerHTML= data;
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
setTimeout(function() {
document.getElementById('a_cad2').click()
}, 2000)

const campos = [
  'inputCodigo', 'selectListId_moradia', 'titulo', 'rua','numero', 'bairro', 'cidade', 'input_UF', 'input_cep',
  'endereço','select_venda', 'valor','valorLoc',
  'desconto', 'valorCond', 'valorIPTU', 'Area_metragen', 'Quint_quant',
  'Quint_metragen', 'salas_quant', 'salas_metragen', 'varanda_quant',
  'Quarto_quant', 'suite_quant', 'banheiro_quant', 'piscinas_quant',
  'piscinas_metragen', 'playg_quant', 'playg_metragen', 'andar_quant',
  'vagas_quant', 'duplex', 'Triplex', 'nome_proprietario', 'Tel_proprietario',
  'cpf_proprietario', 'estadoAimóvel', 'dadaETA', 'horaETA',
  'inputImgUmTitulo', 'inputImgUmMetros', 'inputImgDoisTitulo', 'inputImgDoisMetros',
  'inputImgTresTitulo', 'inputImgTresMetros', 'inputImgQuatroTitulo', 'inputImgQuatroMetros',
  'inputImgCincoTitulo', 'inputImgCincoMetros', 'inputImgSeisTitulo', 'inputImgSeisMetros',
  'inputImgSeteTitulo', 'inputImgSeteMetros'
];

// Adiciona o evento Enter para cada campo
campos.forEach((id, index) => {
  const campo = document.getElementById(id);
  if (campo) {
    campo.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault(); // Evita envio de formulário
        const proximoCampo = campos[index + 1];
        if (proximoCampo) {
          const elemento = document.getElementById(proximoCampo);
          if (elemento) elemento.focus();
        }
      }
    });
  }
});
