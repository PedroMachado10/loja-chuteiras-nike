function calculoUm(valor){
    if(valor<259){
        document.getElementById('prchu-um').innerHTML 
        = 'Valor Insuficiente!';
    }
    else{
        document.getElementById('prchu-um').innerHTML 
        = 'Aceito, ótima proposta!';
    }
}    

function calculoDois(valor){
    if(valor<239){
        document.getElementById('prchu-dois').innerHTML 
        = 'Valor Insuficiente!';
    }
    else{
        document.getElementById('prchu-dois').innerHTML 
        = 'Aceito, otima proposta!';
    }
}   

function calculoTres(valor){
    if(valor<319){
        document.getElementById('prchu-tres').innerHTML 
        = 'Valor Insuficiente!';
    }
    else{
        document.getElementById('prchu-tres').innerHTML 
        = 'Aceito, otima proposta!';
    }
}    

    