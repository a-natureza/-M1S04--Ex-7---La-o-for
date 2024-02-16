// Definindo variáveis para armazenar os produtos e suas quantidades
let hortifruti = 0;
let laticinios = 0;
let carnes = 0;
let peixes = 0;
let aves = 0;

let continuarCompra = true; // Variável de controle para continuar ou não a compra

while (continuarCompra) {
    let produto = prompt("Qual produto você deseja comprar? Escolha uma opção:\n\n1) Hortifruti\n2) Laticínios\n3) Carnes\n4) Peixes\n5) Aves\n6) Fechar pedido");
    
    switch (produto) {
        case "1":
            hortifruti += parseInt(prompt("Quantos itens de Hortifruti você deseja comprar?"), 10);
            break;
        case "2":
            laticinios += parseInt(prompt("Quantos itens de Laticínios você deseja comprar?"), 10);
            break;
        case "3":
            carnes += parseInt(prompt("Quantos itens de Carnes você deseja comprar?"), 10);
            break;
        case "4":
            peixes += parseInt(prompt("Quantos itens de Peixes você deseja comprar?"), 10);
            break;
        case "5":
            aves += parseInt(prompt("Quantos itens de Aves você deseja comprar?"), 10);
            break;
        case "6":
            // Determinando o produto mais comprado
            let maxQuantidade = Math.max(hortifruti, laticinios, carnes, peixes, aves);
            let produtoMaisComprado = "";
            if (maxQuantidade === hortifruti) produtoMaisComprado = "Hortifruti";
            else if (maxQuantidade === laticinios) produtoMaisComprado = "Laticínios";
            else if (maxQuantidade === carnes) produtoMaisComprado = "Carnes";
            else if (maxQuantidade === peixes) produtoMaisComprado = "Peixes";
            else if (maxQuantidade === aves) produtoMaisComprado = "Aves";

            console.log(`O produto mais comprado foi ${produtoMaisComprado}, com ${maxQuantidade} itens.`);

            continuarCompra = false; // Altera a variável para encerrar o loop
            break;
        default:
            alert("Por favor, selecione uma opção válida.");
            break;
    }
    
    if (!continuarCompra) break; // Garante a saída do loop
}
