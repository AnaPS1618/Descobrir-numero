
//Ao realizar login, já recebera um numero aleatório
let numeroMisteriosoGerado = 0;

document.addEventListener('DOMContentLoaded', function(){
    numeroMisterioso();
    document.querySelector('#numero').value = '';
})

let tentativas = 0;


document.querySelector('#verificar')
        .addEventListener('click', function verificarNumeroMisterioso(){

    tentativas++
    
    let numeroInformado = parseInt(document.querySelector('#numero').value);
    switch(true){
        case numeroInformado > numeroMisteriosoGerado:
            document.querySelector('h2').innerHTML = ('O número misterioso é menor');
        break;
        case numeroInformado < numeroMisteriosoGerado:
            document.querySelector('h2').innerHTML = ('O número misterioso é maior');
        break;
        case numeroInformado === numeroMisteriosoGerado:
            if(tentativas > 1){
                alert(`Parabêns! Você descobriu o número misterioso em: ${tentativas} tentativas`)
            }else{
                alert(`Parabêns! Você descobriu o número misterioso em: ${tentativas} tentativa`)
            }
            document.querySelector('h2').innerHTML = 'Numeros de 1 a 1000'
            numeroMisterioso()
        break;
        case isNaN(numeroInformado):
            alert('Por favor, informe um número válido');
        break;
        case numeroInformado === null:
            alert('Por favor, informe um número válido');
        break;
    }

    document.querySelector('#numero').value = '';
});

document.querySelector('#regrasClick')
        .addEventListener('click', function(){
    
    let listaRegas = document.querySelector('#listaRegras')
    if(listaRegas.style.display === 'none'){
        listaRegas.style.display = 'block';
    }else{
        listaRegas.style.display = 'none';
    }
});

function numeroMisterioso(){
    numeroMisteriosoGerado = (parseInt(Math.random() * 1000) + 1);
    console.log(`Numero aleatório ao carregar página: ${numeroMisteriosoGerado}`);
};
