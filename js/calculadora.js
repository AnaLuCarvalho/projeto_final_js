function somar() {
    const numero1 = parseFloat(document.getElementById("numero1Soma").value);
    const numero2 = parseFloat(document.getElementById("numero2Soma").value);

    const total = numero1 + numero2;

    const paragrafo = document.getElementById("resultadoSoma");
    paragrafo.innerHTML = '';

    const resultado = document.createElement('strong');
    resultado.innerText = `Resultado: ${total}`;
    paragrafo.appendChild(resultado); 
}

function subtrair() {
    const numero1 = parseFloat(document.getElementById('numero1Sub').value);
    const numero2 = parseFloat(document.getElementById('numero2Sub').value);
        
    const total = numero1 - numero2;

    const paragrafo = document.getElementById('resultadoSubtracao');
    paragrafo.innerHTML = '';

    const resultado = document.createElement('strong');
    resultado.innerText = `Resultado: ${total}`;
    paragrafo.appendChild(resultado);
}

function multiplicar() {
    const numero1 = parseFloat(document.getElementById('numero1Mult').value);
    const numero2 = parseFloat(document.getElementById('numero2Mult').value);

    const total = numero1 * numero2;

    const paragrafo = document.querySelector('#projeto3 .resultado');

    paragrafo.innerHTML = '';

    const resultado = document.createElement('strong');
    resultado.innerText = `Resultado: ${total}`;
    paragrafo.appendChild(resultado);
}

function dividir() {
    const numero1 = parseFloat(document.getElementById('numero1Div').value);
    const numero2 = parseFloat(document.getElementById('numero2Div').value);

    const paragrafo = document.querySelector('#projeto4 .resultado');

    if (numero2 !== 0) {
        const total = numero1 / numero2;
        paragrafo.innerHTML = '';

        const resultado = document.createElement('strong');
        resultado.innerText = `Resultado: ${total}`;
        paragrafo.appendChild(resultado); 
    }
}
