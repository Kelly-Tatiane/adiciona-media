console.log("Digite numeros que eu te direi a média deles, se você quiser parar de adionar números digite sair")
let numeros = []
let num;
let soma = 0;
let media = 0
process.stdin.on("data", function (data){
    let entrada =+data.toString().trim()
    num = entrada
    numeros.push(num)
    soma += num
    media = soma / numeros.length
    console.log(soma)
    console.log("Oarray de números é:" +numeros)
    console.log("A média do array é:" +media)
});