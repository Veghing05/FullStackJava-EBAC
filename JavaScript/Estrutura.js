const frutas =  [ ] ; 
frutas . push ( "banana" ,  "maçã" ,  "pêssego" ) ; 
console . log ( frutas.comprimento ) ;​​ //3 

frutas [ 5 ]  =  "manga" ; 
console . log ( frutas [ 5 ] ) ;  // 
console 'manga' . log ( Object.keys ( frutas ) ) ;​​ //['0', '1', '2', '5'] 
console . log ( frutas.comprimento ) ;​​ //6  

frutas . comprimento =  10 ; 
console . tora ( frutas ) ;  // ['banana', 'maçã', 'pêssego', vazio x 2, 'manga', vazio x 4] 
console . log ( Object.keys ( frutas ) ) ;​​ //['0', '1', '2', '5'] 
console . log ( frutas.comprimento ) ;​​ //10 
console . log ( frutas [ 8 ] ) ; // indefinido  


frutas . comprimento =  2 ; 
console . log ( Object.keys ( frutas ) ) ;​​ //['0', '1'] 
console . log ( frutas.comprimento ) ;​​ //2  

const cores =  [ "vermelho" ,  "amarelo" ,  "azul" ] ; 
cores [ 5 ]  =  "roxo" ; 
cores . forEach ( ( item , índice )  =>  { 
  console.log ( ` $ { índice } : $ { item } ` ) ; } ) ; // Saída: // 0: vermelho // 1: amarelo // 2: azul // 5: roxo







cores . reverter ( ) ;  // ['roxo', vazio × 2, 'azul', 'amarelo', 'vermelho']

const cores =  [ "vermelho" ,  "amarelo" ,  "azul" ] ; 
cores [ 5 ]  =  "roxo" ; 
const iterador = cores . chaves ( ) ; 
for  ( chave const do iterador )  { 
  console . log ( ` ${ chave } : ${ cores [ chave ] } ` ) ; 
} 
// Saída 
// 0: vermelho 
// 1: amarelo 
// 2: azul 
// 3: indefinido 
// 4: indefinido 
// 5: roxo

const novasCores = cores . toReversed ( ) ;  // ['roxo', indefinido, indefinido, 'azul', 'amarelo', 'vermelho']



