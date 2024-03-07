//EXERCICIO 1:


let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA); // =====> VALOR FINAL DA SOMA: 91


//EXERCICIO 2

function pertenceSequenciaFibonacci(numero) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Loop para gerar a sequência de Fibonacci até o número exceder ou igual ao número fornecido
    while (b <= numero) {
    
        if (b === numero) {
            return true; 
        }
        
        // Gera o próximo número na sequência de Fibonacci
        let temp = b;
        b = a + b;
        a = temp;
    }

    return false; 
}


const numero = 5;  // ----------> Numero pode ser alterado conforme sua preferência.

// Verifica se o número pertence à sequência de Fibonacci
if (pertenceSequenciaFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}


// EXERCICIO 3:

// a) 1, 3, 5, 7, R:9

// b) 2, 4, 8, 16, 32, 64, R:128

// c) 0, 1, 4, 9, 16, 25, 36, R:49

// d) 4, 16, 36, 64, R:100

// e) 1, 1, 2, 3, 5, 8, R:13

// f) 2,10, 12, 16, 17, 18, 19, R:20

// EXERCICIO 4:

// Ligue um dos interruptores e espere um pouco. Desligue e ligue um segundo interruptor. Vá até a sala. A lâmpada desligada e quente corresponde ao 
// primeiro interruptor, a lâmpada acesa ao segundo e a lâmpada apagada e fria ao terceiro.

//EXERCICIO 5:

function inverterString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }
    return invertedString;
}


const stringOriginal = "Me passa de fase aí recrutador!"; // ---> Palavra ou frase que será revertida.


const stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);