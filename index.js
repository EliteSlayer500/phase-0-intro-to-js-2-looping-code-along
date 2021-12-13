function writeCards(array, event) {
    let newArr = []
    for(let i = 0; i< array.length; i++) {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
        // Thank you, Charlie, for the wonderful birthday gift!",
    }
    return newArr
}

// function writeCards(array, event) {
//     let newArr = []
//     for(let i = 0; i< array.length; i++) {
//         newArr.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
//     }
//     debugger 
//     return newArr
// }
// debugger

function countDown(number) {
    while(number >= 0) {
        console.log(number)
        number --
    }
}