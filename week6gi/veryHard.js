let coin = [1, 2, 5];
let amount = 11;

function funCoin(arr, amount) {
    let total = 0;
    let largest;
    while (amount > 0) {
        largest = Math.max(...arr)
        if (largest > amount) {
            arr = removeLargest(arr);
            if (!arr.length) return -1;
        }
        else {
            amount -= largest;
            total++;
        }
    }
    return total;
}

function removeLargest(arr) {
    let largest = Math.max(...arr)
    largest = arr.filter(arr => arr !== largest)
    return largest
}

console.log(funCoin(coin, amount));