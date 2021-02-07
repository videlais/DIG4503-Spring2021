/**
 * Properties:
    name (String)
    favoriteColor (String)
Methods:
    constructor() Should accept two arguments and store their values as part of the class
    speak() This function should use console.log() to show the person's name in their favorite color
 */

import Chalk from 'chalk';

class Person {
    constructor(name, color) {
        this.name = name;
        this.favoriteColor = color;
    }

    speak() {
        console.log(Chalk.hex(this.favoriteColor)(this.name));
    }
}

export default Person;
