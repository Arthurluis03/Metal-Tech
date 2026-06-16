
const boxForm = document.querySelector(".container");
const inputNome = document.getElementById("name");
const inputTipo = document.getElementById("tipo");
const inputQuantidade = document.getElementById("quantidade");
const inputSetor = document.getElementById('setor')
const inputCodigo = document.getElementById("codigo")
const inputFornecedor = document.getElementById("fornecedor");
const btnSumit = document.querySelector('.btn-cadastrar');
const btnLimpar = document.getElementById('.btn-limpar')

const tabela = document.getElementById("clientesTable");
const ferramenta = JSON.parse(localStorage.getItem("ferramenta")) || [];


document.getElementById('btnLimpar').addEventListener('click', () => {
  
    localStorage.clear()

});
btnSumit.addEventListener("click", (e) => {
   e.preventDefault();

//   Validações
// Nome da Ferramenta: obrigatório e entre 5 e 15 caracteres. Tipo da Ferramenta:
// obrigatório. Quantidade: deve ser maior que zero. Setor: obrigatório. Código:
// obrigatório e com exatamente 5 caracteres.

  if(inputNome.value.length < 5 || inputNome.value.length > 15){
    alert('Erro! Os caracteres devem ser  5 á 15.')
    return;
  }

  if(inputCodigo.value.length < 5 || inputCodigo.value.length > 5){
    alert('Valor do código invalido!')
    return;
  }
  if(!inputNome.value || !inputCodigo.value || !inputFornecedor.value || !inputQuantidade.value || !inputSetor.value || !inputTipo.value){
    alert("Erro! Alguns campos não foram selecionados")
    return;
  }



  
  //

const novaFerramenta = {
   nome: inputNome.value,
   tipo: inputTipo.value,
   setor: inputSetor.value,
   quantidade: inputQuantidade.value,
   codigo: inputCodigo.value,
   fornecedor: inputFornecedor.value
};
  
  ferramenta.push(novaFerramenta);
 localStorage.setItem(
    "ferramenta",
    JSON.stringify(ferramenta)
);

  adicionarLinha(novaFerramenta);

  
});

function adicionarLinha(ferramenta) {
  const novaLinha = document.createElement("tr");
  console.log(ferramenta);

  novaLinha.innerHTML = `
      <td>${ferramenta.nome}</td>
      <td>${ferramenta.tipo}</td>
      <td>${ferramenta.quantidade}</td>
      <td>${ferramenta.setor}</td>
      <td>${ferramenta.codigo}</td>
      <td>${ferramenta.fornecedor}</td>
  `;

  tabela.appendChild(novaLinha);
}

ferramenta.forEach((ferramenta) => {
  adicionarLinha(ferramenta);
});

/////////////////////////////////////////////
