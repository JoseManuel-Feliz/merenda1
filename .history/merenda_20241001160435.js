function sommaInteri(N) {
    let somma = 0;
    let count = 0;

    for (let i = 1; i <= N; i++)
        somma += i;

    if (somma > N) {
        console.log(count)
    } else {
        count++
    }
}
