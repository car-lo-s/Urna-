let seuVoto = document.querySelector(".tela-voto p")
let cargo = document.querySelector(".tela-resultado p")
let descricao =document.querySelector(".tela-pessoa")
let aviso = document.querySelector(".tela-info")
let foto = document.querySelector(".tela-direita")
let num = document.querySelector(".tela-numero")
let estagio = 0
let numeroHTML = ''
let impresso = ''

function comeco(){
    let processo = etapas[estagio]
    seuVoto.innerHTML = ''
    descricao.innerHTML=''
    aviso.innerHTML=''
    foto.innerHTML = ''

    if(estagio === 0){
        cargo.innerHTML = processo.titulo
        for(let i = 0; i < processo.numeros;i++){
            if(i===0){
                numeroHTML+='<div class="numeros pisca"></div>'
            }else{
                numeroHTML+='<div class="numeros"></div>'
            }
        }
        num.innerHTML = numeroHTML
    }
}

function valor(n){
    let codigo = document.querySelector('.numeros.pisca')
    if(codigo!=null){
        codigo.innerHTML=n
        impresso+=n
        codigo.classList.remove('pisca')
        
        if(codigo.nextElementSibling!=null){
            codigo.nextElementSibling.classList.add('pisca')
        }else{
            atualiza()
        }
        
    }
    
}

function atualiza(){
    alert(etapas.length)
}

function branco(){
    
}

function corrige(){
    
}

function confirma(){
    
}

comeco()