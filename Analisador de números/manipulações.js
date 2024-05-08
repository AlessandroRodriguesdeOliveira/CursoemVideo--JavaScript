//Selecionado os elementos da DOM que irão ser manipuldos.
// O input, o select, o section, respectivamente.
// variável 'res' irá armazenar a div que mostrará os resultados quando ela for criada.
var seletor = document.getElementById('seletor');
var visor = document.getElementById('visor');
var section = document.getElementById('section');
var valores = [];

//Função para adicionar com a condição de já se encontrar dentro do array: valores.
function Adicionar(){
    if (valores.indexOf(Number(seletor.value)) != -1 || Number(seletor.value) == NaN || Number(seletor.value) < 0 || Number(seletor.value) > 100){
        alert('Número já adicionado ou incompatível.');
    }else{
        valores.push(Number(seletor.value));
        /*criei um option no body, e implementei essa crianção8 dentro do select, adicionando um texto dentro com o valor adicionado.*/
        var option = document.createElement('option');
        option.textContent = `Valor ${Number(seletor.value)} adicionado.`;
        visor.appendChild(option);
        //irá excluir a div com os resultados para atualização dos dados.
        section.removeChild(res);   
    } 
}   

function Finalizar(){
    //criação da div 'res' e colocando dentro da section
    criacao = document.createElement('div');
    criacao.setAttribute('id', 'res');
    section.appendChild(criacao);
    var res = document.getElementById('res');
    //criação das informações e colocando-as dentro da div
    maior = 0
    menor = 0
    soma = 0
    valores.forEach(function(valor){
        soma += valor
        if (valores.indexOf(valor) == 0){
            maior = valor;
            
        }else{
            if(valor > maior){
                maior = valor;
            }
        }
        if(valores.indexOf(valor) == 0){
            menor = valor;
        }else{
            if(valor < menor){
                menor = valor;
            }
        } 
    });
    //colocando as informações na div 'res'
    res.innerHTML += `<p>Ao todo, temos ${valores.length} números cadastrados.</p><p>O maior valor informado foi ${maior}.</p>
    <p>O menor valor informado foi ${menor}.</p>
    <p>Somando todos os valores, temos ${soma}.</p>
    <p>A média dos valores digitados é: ${(soma/valores.length).toFixed(2)}.`;
}
