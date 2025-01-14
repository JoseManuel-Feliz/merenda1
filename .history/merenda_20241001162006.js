function sommaInteri(N) {
    let somma = 0;
    let count = 0;

    for (let i = 1; i <= N; i++) {
        if (somma + i > N) {
            return count;
        }
        somma += i;
        console.log(somma)
        count++;
        console.log(count)
    }
    if (N < 0 || N) {

    }
    return Invalid input;
}