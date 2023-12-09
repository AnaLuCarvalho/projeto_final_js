function calculaMedia() {
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);
  const nota4 = parseFloat(document.getElementById('nota4').value);

  if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4) ||
      nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10 ||
      nota3 < 0 || nota3 > 10 || nota4 < 0 || nota4 > 10) {
      alert('Por favor, insira notas válidas (entre 0 e 10).');
      return;
  }

  const media = (nota1 + nota2 + nota3 + nota4) / 4;

  const situacao = (media >= 6) ? 'Parabéns, você foi aprovado!!' : 'Infelizmente você não foi aprovado, se dedique mais!';

 
  const resultadoFinal = document.getElementById('resultadoFinal');
  resultadoFinal.innerHTML = `<strong>Média:</strong> ${media.toFixed(2)} <br> <strong>Situação:</strong> ${situacao}`;
}
