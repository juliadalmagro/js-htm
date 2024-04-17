let input = document.getElementById('todos');
let botao = document.getElementById('botao');
let divItens = document.getElementById('divItens');
let inputCorFundo = document.getElementById('cor1');
let inputCorTexto = document.getElementById('cor2');

let itens = [];
getLocalStorage();

botao.addEventListener('click', (_) => {
    if (input.value.replace(/ /g, '')) {
        itens.push(
            {
                descricao: input.value,
                corDeFundo: inputCorFundo.value,
                corDoTexto: inputCorTexto.value
            }
        )    
    }
    addLocalStorage();
    addCard();
});

function addCard(){
    divItens.innerHTML = ''
    itens.forEach((objeto, indice) => {
        let {descricao, corDeFundo, corDoTexto} = objeto
        let texto = input.value;
        let linha = document.createElement('div');
        linha.className = 'row mt-3'
        linha.innerHTML = 
        `
        <div class="col-12">
            <div class="card" style="background-color: ${corDeFundo};">
                <div class="card-body" style="color: ${corDoTexto};"> 
                    <span>
                        ${indice} - ${descricao}
                    </span>
                    <button type="button" class="btn btn-dark" onclick="editar(${indice})">Alterar</button>
                </div>
            </div>
        </div>
        `;

        divItens.appendChild(linha);
    })
    input.value = ''
}


function editar(indice) {
    const novoTexto = prompt('Digite o novo texto');
    itens[indice].descricao = novoTexto; 
    addCard();
    addLocalStorage();   
}

function excluir(_){
    const idExclusao = prompt('Informe o número para exclusão');
    if(idExclusao.toString().replace(/\D/g, '')){
        itens.splice(idExclusao, 1);
    }
    addCard();
    addLocalStorage();
 }

 function getLocalStorage(){
    try{
        itens = JSON.parse(localStorage.getItem('itens'));
        addCard();
    } catch(error){
        localStorage.setItem('itens', '[]');
    }
 }
 
 function addLocalStorage(){
    localStorage.setItem('itens', JSON.stringify(itens));
 }



//itens.splice(indice, 0, '')















// let titulo = document.getElementById('titulo');
// let botaoTeste = document.getElementById('botaoTeste');

// botaoTeste.addEventListener('click', () => {
//     alert("clicou");
// }) 

// // function clickTest(event){
// //     alert("clicou");
// // }







// // console.log(titulo.innerText);
// // console.log(titulo.innerHTML);

// // titulo.innerText = 'oi';
// // titulo.style.color = 'red';

// titulo.classList.add('azul');


