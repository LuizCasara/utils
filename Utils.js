// Casara Utils Functions

// Get the Character Count In A String
const characterCount = (str, char) => str.split(char).length - 1

// Check if an Object Is Empty
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object;

// Wait for a Certain Time Before Execution
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// Get The Day Difference Between Two Dates
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

// Redirect to Another URL
const redirect = url => window.location.href = url;

// Shuffle An Array
const shuffle = arr => arr.sort(() => 0.5 - Math.random());

// Get Selected Text On Webpage
const getSelectedText = () => window.getSelection().toString();

// Get a Random Boolean
const getRandomBoolean = () => Math.random() >= 0.5;

// Calculate the Average of An Array
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length;

// valid if is a valid email with "@", ".com". 
function validateEmail(email) {
    if (email == null || email === "") {
        return false;
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Minimum eight characters, at least one letter and one number:
const passwordRegex01 = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
// Minimum eight characters, at least one letter, one number and one special character:
const passwordRegex02 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
const passwordRegex03 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex04 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
const passwordRegex05 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

function validatePassword(pass, lvl) {
    if (pass == null || pass === "") {
        return false;
    }
    switch (lvl) {
        case 1:
            return passwordRegex01.test(String(pass).toLowerCase());
        case 2:
            return passwordRegex02.test(String(pass).toLowerCase());
        case 3:
            return passwordRegex03.test(String(pass).toLowerCase());
        case 4:
            return passwordRegex04.test(String(pass).toLowerCase());
        case 5:
            return passwordRegex05.test(String(pass).toLowerCase());
        default:
            return pass != null;
    }
}

// Regex to get the first letters of name
const rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
function getInitials(name) {
    let initials = [...name.matchAll(rgx)] || [];
    initials = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toUpperCase();

    return initials;
}

export {
    characterCount,
    isEmpty,
    wait,
    daysBetween,
    redirect,
    shuffle,
    getSelectedText,
    getRandomBoolean,
    average,
    validateEmail,
    validatePassword,
    getInitials,
}
