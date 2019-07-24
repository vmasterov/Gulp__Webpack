function test(count) {
    let number;

    for (let i = 0, l = count; i < l; i++) {
        number = Math.random();
    }

    return number;
}

console.log(test(1000));