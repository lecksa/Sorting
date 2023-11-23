// let stop = +prompt('stop number')

// function numbers(c){
//     let arr = [0, 1]

//     for(let i = 0; i < c; i++){
//         if(arr[i] < c)
//         arr.push(arr[i] + arr[i + 1])
//     }
//     console.log(arr);
// }

// numbers(stop)


//3-3
let symbols = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function ran_id(id) {
    let random = "";
    while (random.length < 30) {
        if (random[0] !== id[0, 9] && random[0, 2] !== 'sys' && random[0, 2] !== 'ibm' && random[0, 2] !== 'sql') {
            random += id[Math.round(Math.random() * id.length)]; // id[Math.round(0,582738 * 62)]
        }
    }
    console.log(random);
}

ran_id(symbols)


//4-4
function bubblesort(arr) {
    for (let item of arr) {
        for (let i = 0; i < item; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        item--
    }
    console.log(arr);
}

bubblesort([23, 65, 1, 46, -7, 1111, 0])
