function Contar(){
    //pegando os elemntos DOM para modificações.
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var display = document.getElementById('display');

    //verificação se foram preenchidas pelo menos o campo 'fim' e 'passo'.
    if (fim == 0 || passo ==0){
        display.innerHTML = '<strong>Preencha todas as lacunas!</strong>';
    }else{
        display.innerHTML = 'Contando...<br>';
        //de acordo com a comparação entre os valores de 'início' e 'começo';
        //versão para contagem crescente.
        if(inicio <= fim){
            for(var i = inicio; i <= fim; i += passo){
                if (i == fim){
                   
                    display.innerHTML += `${i}  &#128681`;
                    
                } else{
                    display.innerHTML += `${i}  &#10145`; 
                }
            }
        //versão para contagem decrescente.
        }else{
            for(var i = inicio; i >= fim; i -= passo){
                if (i == fim){
                    display.innerHTML += `${i} &#128681`;
                } else{
                    display.innerHTML += `${i} &#10145`;  
                }
            }
        }   
    }
}
        



