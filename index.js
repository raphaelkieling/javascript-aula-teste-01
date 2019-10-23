var list = []

// Popula minha lista
for (var i = 0; i < 200; i++) {
    list.push(i);
}

// Percorre verificando se ela é divisivel por 3 ou 5
for (var number of list) {
    if (number % 3 == 0 || number % 5 == 0) {
        console.log(number + " Esse número é divisor por 5 ou 3")
    }
}