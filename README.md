# Magic the Gathering Mini Demo

## Built-in Objects and Methods Used

- **Date Object**: `getMonth()`, `getDate()`, `getFullYear()` to extract and format the current date.
- **Number Object**: `Number()` for conversion, `isNaN()` to check for NaN, `isInteger()` to check if integer, `toFixed()` for decimal formatting, `toLocaleString()` for number formatting.

## GitHub Pages Link

[Live Demo](https://yourusername.github.io/your-repo-name) (Replace with actual link after publishing)

## Screenshot

Path: `screenshot.png`

## Reflection

The easiest part was setting up the basic HTML structure and linking the JavaScript file, as I had done similar things before. The hardest part was ensuring the date formatting always showed two digits for month and day, which required careful handling of the Date object's zero-based months. I learned that the Date object in JavaScript uses zero-based indexing for months, so you need to add 1 when displaying. With the Number object, I discovered how to reliably convert strings to numbers and validate them using isNaN and isInteger methods. Displaying results in the browser was straightforward using getElementById and innerHTML, but I had to be careful with string concatenation for multiple results.