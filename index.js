




function gerarPreco(){
    let valor = document.getElementById('valor');
    let volume = document.getElementById('volume');
    let resultado = document.getElementById('resultado');

    let calculo = valor.value/(volume.value/1000);

    let select = document.getElementById('select')
    let tipo = select.options[select.selectedIndex]; 

    

    
   
    resultado.innerHTML = `O produto custa ${calculo} reais por ${tipo.value}`

    
    
    

}



