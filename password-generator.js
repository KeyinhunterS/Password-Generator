// Password Generator
// Description: This App is for a random password generator
// Author: Hunter Saunders
// Start date: 01/16/25 End date: 01/22/25

const { argv } = require('process');

// Funtion tp display help message
function displayHelp() {
    console.log(`
        Usage: node password-generator.js [Options]
        
        Options:
        --help             Display this help MessageChanne
        --Length=<number>  Specity the length of the password (defualt is 8)
            
        Example:
        node password-generater.js --length=12
        Generates a password with 12 characters.
    `);
}

// Function to generate a random password
function generatePassword(length=8) {
    const characters = 'abcdefghijklmnopqrstuvwxyz'
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Main function
function main() {
    // Parse arguments
    const args = argv.slice(2);

    if (args.includes('--help')) {
        displayHelp();
        return;
    }
    
    //Default password length
    let length = 8;

    // Handle --length flag
    const lengthArg = args.find(arg => arg.startsWith('--length='));
    if (lengthArg) {
        const value = lengthArg.split('=')[1];
            if (!value || isNaN(value) || value <= 0){
                console.error('Error: invalid length. Please specify a positive number.');
                return;
            }
        length = parseInt(value,10);
    }

    // Generate and display the password
    const password = generatePassword(length);
    console.log(`Generated Password: ${password}`);
}

// Run the script
main();