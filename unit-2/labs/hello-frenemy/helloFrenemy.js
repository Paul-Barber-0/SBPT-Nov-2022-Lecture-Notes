// function greeter(name) {
//     if(name === 'darth vader') {
//         console.log("Go away!");
//     } else {
//         console.log()
//     }
// }

function pascalCase(string) {
    for(i in string) {
        if(i == 0 || string[i - 1] === ' ') {
            string[i] = string[i].toUpperCase();
            console.log(string[i].toUpperCase());
        }
    }
}

pascalCase('darth vader');