function snapCrackle(maxValue) {
    let result = ''
    for (let i = 1; i <= maxValue; i++) {
    if (i % 2 !== 0 && i % 5 === 0) {
        result +='SnapCrackle, '
            continue
        }
    if (i % 2 !== 0) {
         result += 'Snap, '
            continue
        }
     if (i % 5 === 0) {
        result += 'Crackle, '
            continue
        }
        result += i + ', '
    }
    return result
}
console.log(snapCrackle(10))