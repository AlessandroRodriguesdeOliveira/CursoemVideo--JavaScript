function Tabuar(){
    //pegando os elementos da DOM.
    var num = Number(document.getElementById('numero').value);
    var select = document.getElementById('tabuada');
    var div = document.querySelector('div');
    //limpando o select antes de iniciar com novos valores.
    select.innerHTML = ''
    //verificando caso seja um número igual ou menor do que 0, isso criará um parágrafo dizendo que está incorreto.
    if (num <= 0){
        var item1 = document.createElement('p');
        item1.setAttribute('id', 'p');
        div.appendChild(item1);
        p = document.getElementById('p');
        p.innerHTML = '<strong>O valor negativo, 0 e/ou vazio não é usável. Preencha corretamente!</strong>';
    //tudo ok? Então será criado um option no body e transferido para o select com as informações.
    }else{
        for(var i = 0; i <= 10; i++){
            var item = document.createElement('option');
            item.textContent = `${i} x ${num} = ${i*num}`;
            select.appendChild(item);
        }
        //deletando o parágrafo de erro, que será criado depois, caso ele exista.
        var p = document.getElementById('p');
        div.removeChild(p);
    }
}