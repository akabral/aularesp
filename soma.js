function toOla(id){
    let ele = document.getElementById(id)
    ele.innerHTML = "Símbolo da paixão automotiva do Brasil, a Puma Automóveis é a marca referência presente no imaginário dos apaixonados por automobilismo, com uma história de empreendedorismo de muita garra e determinação, sendo a empresa brasileira com maior número de produção de veículos esportivos da história.";

}

function soma() {

    let a = parseInt(document.getElementById("dir").value);
    let b = parseInt(document.getElementById("esq").value);
    document.getElementById("esq")
    var radios = document.getElementsByName("drone");
    var resultado;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {

            switch(radios[i].value) {
                case "soma":
                    resultado = a +b;
                break;
                case "subtracao":
                    resultado = a -b;
                break;
                case "divisao":
                    resultado = a /b;
                break;
                case "multiplicao":
                    resultado = a *b;
                break;
                default:
                  // code block
              } 
        }
    }
    document.getElementById("total").innerHTML = resultado;
}



function perName(tag) {
    let elementos = document.getElementsByTagName(tag);

    for (let elemento of elementos) {
        if (elemento.id == "mainId") {
            elemento.style.backgroundColor  = 'rgba(29, 27, 126, 0.658)';
        }
        else{
        	elemento.style.backgroundColor  = 'rgba(158, 75, 75, 0.63)';
        }
        
    }
}


function perClass(classe) {
    let elementos = document.getElementsByClassName(classe); 
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.borderRadius = '15px'; 
        elementos[i].style.border = '2px red dashed'; 
    }
}

function perId(id) {
    let elemento = document.getElementById(id);
    elemento.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Southern_right_whale.jpg/280px-Southern_right_whale.jpg')";
}


