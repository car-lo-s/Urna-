let seuVoto = document.querySelector(".tela-voto p");
let cargo = document.querySelector(".tela-resultado p");
let descricao = document.querySelector(".tela-pessoa");
let aviso = document.querySelector(".tela-info");
let foto = document.querySelector(".tela-direita");
let num = document.querySelector(".tela-numero");
let estagio = 0;
let numeroHTML = "";
let impresso = "";
let white = false;
let final = 0;

function comeco() {
  white = false;
  impresso = "";
  let numeroHTML = "";
  let processo = etapas[estagio];
  seuVoto.style.display = "none";
  descricao.innerHTML = "";
  aviso.style.display = "none";
  foto.style.display = "none";

  if (estagio === 0) {
    cargo.innerHTML = processo.titulo;
    for (let i = 0; i < processo.numeros; i++) {
      if (i === 0) {
        numeroHTML += '<div class="numeros pisca"></div>';
      } else {
        numeroHTML += '<div class="numeros"></div>';
      }
    }
    num.innerHTML = numeroHTML;
  }
  if (estagio === 1) {
    // alert("teste")
    cargo.innerHTML = processo.titulo;
    for (let i = 0; i < processo.numeros; i++) {
      if (i === 0) {
        numeroHTML += '<div class="numeros pisca"></div>';
      } else {
        numeroHTML += '<div class="numeros"></div>';
      }
    }
    num.innerHTML = numeroHTML;
  }
}

function valor(n) {
  let codigo = document.querySelector(".numeros.pisca");
  if (codigo != null) {
    codigo.innerHTML = n;
    impresso += n;
    codigo.classList.remove("pisca");

    if (codigo.nextElementSibling != null) {
      codigo.nextElementSibling.classList.add("pisca");
    } else {
      atualiza();
    }
  }
}

function atualiza() {
  let verifica = 0;
  let processo = etapas[estagio];
  let j = 0;

  // alert(impresso)

  etapas.map(function (nome, i) {
    let contador = 0;
    if (nome.numeros === 5) {
      while (j < nome.candidatos.length) {
        if (nome.candidatos[j].numero === impresso) {
          foto.style.display = "block";
          foto.querySelector(".direita-img img").src =
            nome.candidatos[j].fotos[0].url;
          foto.querySelector(".small").style.display = "none";
          descricao.innerHTML = `Nome: ${nome.candidatos[j].nome} <br>Partido: ${nome.candidatos[j].partido} `;
          aviso.style.display = "block";
          seuVoto.style.display = "block";
          contador++;
        }
        if (contador === 0) {
          aviso.style.display = "block";
          seuVoto.style.display = "block";
          // alert(contador)
          descricao.innerHTML =
            '<div class="aviso--grande pisca">VOTO NULO</div>';
        }

        j++;
      }
    } else if (nome.numeros === 2) {
      while (j < nome.candidatos.length) {
        if (nome.candidatos[j].numero === impresso) {
          foto.style.display = "block";
          foto.querySelector(".small").style.display = "block";
          foto.querySelector(".direita-img img").src =
            nome.candidatos[j].fotos[0].url;
          foto.querySelector(".small img").src =
            nome.candidatos[j].fotos[1].url;
          // foto.querySelector('.small').style.display='none'
          descricao.innerHTML = `Nome: ${nome.candidatos[j].nome} <br>Partido: ${nome.candidatos[j].partido} `;
          aviso.style.display = "block";
          seuVoto.style.display = "block";
        }
        if (contador === 0) {
          aviso.style.display = "block";
          seuVoto.style.display = "block";
          // descricao.innerHTML = '<div class="aviso--grande pisca">VOTO NULO</div>'
        }

        j++;
      }
    }
    j = 0;
  });
}

comeco();

function branco() {
  if (impresso === "") {
    aviso.style.display = "block";
    seuVoto.style.display = "block";
    num.style.display = "none";
    descricao.innerHTML =
      '<div class="aviso--grande pisca">VOTO EM BRANCO</div>';

    white = true;
  } else {
    alert("nao");
  }
}

function corrige() {
  comeco();
  impresso.innerHTML = "";
  num.style.display = "block";
  // alert(impresso)
}

function confirma() {
  let processo = etapas[estagio];
  final++;
  votoConfirmado = false;
  if (white === true) {
    votoConfirmado = true;
  } else if (impresso.length === processo.numeros) {
    votoConfirmado = true;
  }
  if (votoConfirmado) {
    estagio++;
    // alert(estagio)
    comeco();
  }
  if (final === 2) {
    fim();
  }
}

function fim() {
  document.querySelector(".tela").innerHTML =
    '<div class="aviso--gigante pisca">FIM</div>';
}
