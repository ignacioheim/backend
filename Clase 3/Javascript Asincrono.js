
const printWord = (text, callback) => {
    let wordsSplit = text.split(' ');
    let i = 0;
    let idInterval = setInterval(
        ()=>{
            console.log(wordsSplit[i++]);
            if (i == wordsSplit.length) {
                clearInterval(idInterval);
                console.log(`Number of words: ${i}`)
                callback();
            }
        },
        1000
    )
}

let words = "Hi! How are you?"
let words2 = "Como estas mi buen amigo?"
let words3 = "Contame que hiciste hoy en tu dia"
let finishMessage = () => console.log("Completed process.")


printWord(words, () => {
    printWord(words2, () => {
        printWord(words3, () => {
                console.log("Completed process.")
        })
    })
});