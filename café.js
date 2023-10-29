let coffe = Math.round(Math.random() * 326);
let empty = 0;

while(true){
    console.log(`A xícara de café está com: ${coffe}ml`);
    if (coffe == empty) {
        console.log('Fill...');
        break
    } else if (coffe <= 325) {
        console.log('Drink...')
        coffe--;
    };
};