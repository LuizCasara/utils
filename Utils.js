// Casara Utils Functions

// Get the Character Count In A String
const characterCount = (str, char) => str.split(char).length - 1

// Check if an Object Is Empty
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object

// Wait for a Certain Time Before Execution
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

// Get The Day Difference Between Two Dates
const daysBetween = (date1, date2) => Math.ceil(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24))

// Redirect to Another URL
const redirect = url => location.href = url

// Shuffle An Array
const shuffle = arr => arr.sort(() => 0.5 - Math.random())

// Get Selected Text On Webpage
const getSelectedText = () => window.getSelection().toString()

// Get a Random Boolean
const getRandomBoolean = () => Math.random() >= 0.5

// Calculate the Average of An Array
const average = (arr) => arr.reduce((a, b) => a + b) / arr.length


export {
    characterCount,
    isEmpty,
    wait,
    daysBetween,
    redirect,
    shuffle,
    getSelectedText,
    getRandomBoolean,
    average
}
