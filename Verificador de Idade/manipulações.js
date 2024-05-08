//pegando os elemntos da DOM.
var nasci = document.getElementById('nascimento');
var div = document.getElementById('imagem');
var sexos = document.getElementsByName('sexo');
var p = document.getElementById('p');

function verificar(){
    //pegando a data do sistema.
    var agora = new Date();
    //calculando a idade.
    var anos = agora.getFullYear() - Number(nasci.value);
    //verifincando se foram marcados todos os campos corretamente, se não ficou sem marcar.
    if((sexos[0].checked == false && sexos[1].checked == false) || (Number(nasci.value) == 0)){
        p.innerHTML = '<strong>Preencha os dados acima para ver o resultado!</strong>'
    } else {
        //se é homem
        if (sexos[0].checked){
            p.innerText = `Detectado uma pessoa do gênero masculino com ${anos} anos.`
            //de acordo com a idade, a div recebe uma imagem representando a idade com o respectivo gênero selecionado.
            if (anos >= 5 && anos <= 10 ){
                div.innerHTML = '<img src="menino.png" alt="Foto de criança">';
            } else if (anos >= 11 && anos <= 30){
                div.innerHTML = '<img src="jovem.png" alt="Foto de Jovem">'
    
            }else if(anos > 30 && anos < 60){
                div.innerHTML = '<img src="homem.png" alt="Foto de adulto">'
    
            } else{
                div.innerHTML = '<img src="idoso.png" alt="Foto de idoso">'
            }

        }else {
            //nesse caso será mulher.
            p.innerText = `Detectado uma pessoa do gênero feminino com ${anos} anos.`
            //de acordo com a idade uma imagem para a div.
            if (anos >= 5 && anos <= 10 ){
                div.innerHTML = '<img src="menina.png" alt="Foto de criança">'
                
    
            } else if (anos >= 11 && anos <= 30){
                div.innerHTML = '<img src="jovemm.png" alt="Foto de Jovem">'
    
            }else if(anos > 30 && anos < 60){
                div.innerHTML = '<img src="mulher.png" alt="Foto de adulto">'
    
            } else{
                div.innerHTML = '<img src="idosa.png" alt="Foto de idoso">'
    
    
            }
        }
    }
} 


    
    



    
    
