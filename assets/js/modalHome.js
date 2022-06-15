// ABRIR MODAL

window.onload = () => {
  this.openModal("#modalHome");
}

function openModal(nameModal) {
  $(nameModal).modal({
    show: true
  });
}

// CRIAR MENSAGEM MODAL

function requestWhatsapp() {
  const name = document.querySelector("#input-name").value;
  const email = document.querySelector("#input-email").value;

  const job = document.getElementById('input-serv');
  const jobText = job.options[job.selectedIndex].text;

  const local = document.getElementById('input-local');
  const localText = local.options[local.selectedIndex].text;

  const url = "https://wa.me/5514996057056?text=Eu%20" + name + "%20gostaria%20de%20conversar%20sobre%20Serviços%20" +
    jobText + ",%20Unidade de:%20" + localText + ",%20Email para contato:%20" + email;

  window.open(url, "_blank");
}
