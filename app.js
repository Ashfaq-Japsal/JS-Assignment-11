// 1
let firstName = prompt(`Enter your first name`);
let lastName = prompt(`Enter your last name`);
let fullName = firstName + ' ' + lastName;
document.write(`Welcome dear ${fullName}`);
//2
let favPhone = prompt(`Enter your favourite mobile phone model`);
let lengthOfFavPhone = favPhone.length;
document.write(`<br><br>My fvourite phone is: ${favPhone} <br> Length of string: ${lengthOfFavPhone}`);
//3
let country = `Pakistan`;
document.write(`<br><br>String: ${country} <br> Index of 'n': ${country.indexOf(`n`)}`);
//4
let word = `Hello World`;
document.write(`<br><br>String: ${word} <br> Last index of 'l': ${word.lastIndexOf(`l`)}`);
//5
let country2 = `Pakistani`;
document.write(`<br><br>String: ${country2} <br> Character at index 3: ${country2.charAt(3)}`);
//6
document.write(`<br><br>Welcome dear ${firstName.concat(' ' + lastName)}`);
//7
let city1 = `Hyderabad`;
let city2 = `Islamabad`;
let changeStrart = city1.indexOf(`a`);
document.write(`<br><br>City: ${city1} <br> After replacement: ${city1.replace(city1.slice(0, changeStrart), `Islam`)}`);
//8
let msg = `Ali and Sami are best friends. They play cricket and football together.`;
document.write(`<br><br>${msg.replaceAll(`and`, `&`)}`);
//9
let string = `472`;
let number = parseInt(string);
document.write(`<br><br>Value: ${string} <br> Type: ${typeof string}<br>Value: ${number}<br> Type: ${typeof number}`);
//13
let userName = prompt(`Enter your name`);
var flag = false
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == `@` || userName[i] == `.` || userName[i] == `!`) {
        alert(`Please enter a valid username`);
        flag = true
        break;
}
}
if (flag == false) {
    alert(`Thanks ${userName}`)
}
//14
function bakery (){
    let search = prompt(`Welcome to ABC bakery! What do you want to buy?`)
    let changingCase = search.toLowerCase()
    let items = ["cake", "apple pie", "cookie", "chips", "patties"]
    var flag = false
    for (let i = 0; i < items.length; i++) {
        if (items[i] == changingCase) {
            flag = true
            return (`${search} is available at index ${i} in our bakery`)
    }
    }
    if (flag == false) {
        return (`We are sorry ${search} is not available in our bakery`)
    }
}
alert(bakery())
//15
let password = prompt(`Please enter a password`)
let allowedChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0"]
let passwordMinLength = 6
let checked =[]
var flag = false
for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < allowedChars.length; j++) {
        if ((password[i] == allowedChars[j]) && (password[0] != 0 && password[0] != 1 && password[0] != 2 && password[0] != 3 && password[0] != 4 && password[0] != 5 && password[0] != 6 && password[0] != 7 && password[0] != 8 && password[0] != 9) && (password.length > 5)){
            checked.push(password[i])
            flag = true
        }
    }
}
if (password == "") {
    document.write(`<br><br>Entered password: ${password}<br>Password should contain only alphabets and numbers <br>Please enter a valid password`)
}
else if (checked.join("") == password) {
        document.write(`<br><br>Entered password: ${password}<br>Thanks for putting a correct password`)
}
else if ((checked.join("") != password) && (password[0] != 0 && password[0] != 1 && password[0] != 2 && password[0] != 3 && password[0] != 4 && password[0] != 5 && password[0] != 6 && password[0] != 7 && password[0] != 8 && password[0] != 9) && (password.length > 5)) {
    document.write(`<br><br>Entered password: ${password}<br>Password should contain only alphabets and numbers <br>Please enter a valid password`)
}
else if (password.length < 6) {
    document.write(`<br><br>Entered password: ${password}<br>Password must at least 6 characters long<br>Please enter a valid password`)
}
else if (password[0] == 0 || password[0] == 1 || password[0] == 2 || password[0] == 3 || password[0] == 4 || password[0] == 5 || password[0] == 6 || password[0] == 7 || password[0] == 8 || password[0] == 9) {
    document.write(`<br><br>Entered password: ${password}<br>Password cannot begin with a number<br>Please enter a valid password`)
}
//18
let text = `The quick brown fox jumps over the lazy dog`
let textLower = text.toLowerCase()
let counted = 0
for (let i = 0; i < text.length; i++) {
    if (textLower.slice(i,i+3) == `the`) {
        counted += 1
    }
}
document.write(`<br><br>Text: ${text}<br>There are ${counted} occurence(s) of word 'the'`)