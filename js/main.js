// Je commence par creer mon tableau pour répertorier mes mots

let arrayWords = ['lotus', 'galaxie', 'bison', 'eucalyptus', 'stylo', 'ouragan', 'python'];


let alpha = {
    1:"a",
    2:"b",
    3:"c",
    4:"d",
    5:"e",
    6:"f",
    7:"g",
    8:"h",
    9:"i",
    10:"j",
    11:"k",
    12:"l",
    13:"m",
    14:"n",
    15:"o",
    16:"p",
    17:"q",
    18:"r",
    19:"s",
    20:"t",
    21:"u",
    22:"v",
    23:"w",
    24:"x",
    25:"y",
    26:"z"

};


   
        // Fonction pour que l'ordinateur choisisses un mots.
function generateWords() {
    const randomWords = arrayWords[Math.floor(Math.random() * arrayWords.length)];
    return (randomWords);
}
const randomWords = generateWords()
    alert(randomWords)

    

    alert(alpha[3])







// let arrayWords1 = arrayWords


//     console.log(arrayWords1.replace(regexp|arrayWords , "_"));

//     // array1.forEach(element => console.log(element));