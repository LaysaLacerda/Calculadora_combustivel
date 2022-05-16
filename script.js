function calc(GASOLINA,ALCOOL) {
    let VLRESULT = 0
    VLRESULT = ALCOOL / GASOLINA
    
    if (VLRESULT > 0.7) {
        alert('O preço da gasolina vale mais a pena.')
      }
    if (VLRESULT < 0.7) {
        alert('O preço do álcool vale mais a pena.')
      }
    if (VLRESULT == 0.7) {
        alert('O preço dos dois são equivalentes, tanto faz.')
      }   
    if(confirm("Deseja realizar uma nova consulta?") == false){
    }
}