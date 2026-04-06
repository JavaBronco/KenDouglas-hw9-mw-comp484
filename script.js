// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object for the current date
let currentDate = new Date();

// Get the current month, day, and year
let month = currentDate.getMonth() + 1; // JavaScript months are 0-based, so add 1
let day = currentDate.getDate();
let year = currentDate.getFullYear();

// Add leading zeros to month and day if needed
let formattedMonth = month < 10 ? '0' + month : month;
let formattedDay = day < 10 ? '0' + day : day;

// Create a string in the format: "The current date in the Multiverse is MM/DD/YYYY"
let dateMessage = `The current date in the Multiverse is ${formattedMonth}/${formattedDay}/${year}`;

// Display the result in the element with id="dateOutput"
document.getElementById('dateOutput').textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Create at least 4 separate variables:
// - at least 2 numeric strings
// - at least 1 decimal string
// - at least 1 non-numeric string

let blackLotusCost = "15"; // numeric string
let lightningBoltDamage = "3"; // numeric string
let invalidMana = "blue"; // non-numeric string
let jacePower = "3.5"; // decimal string

// For EACH variable: convert and check separately

// Black Lotus
let original1 = blackLotusCost;
let converted1 = Number(original1);
let isNaN1 = Number.isNaN(converted1);
let isInteger1 = Number.isInteger(converted1);
let message1 = isNaN1 ? "This is not a valid mana cost." : (isInteger1 ? "This is a valid integer mana cost." : "This is a valid decimal mana cost.");

// Lightning Bolt
let original2 = lightningBoltDamage;
let converted2 = Number(original2);
let isNaN2 = Number.isNaN(converted2);
let isInteger2 = Number.isInteger(converted2);
let message2 = isNaN2 ? "This is not a valid mana cost." : (isInteger2 ? "This is a valid integer mana cost." : "This is a valid decimal mana cost.");

// Invalid Mana
let original3 = invalidMana;
let converted3 = Number(original3);
let isNaN3 = Number.isNaN(converted3);
let isInteger3 = Number.isInteger(converted3);
let message3 = isNaN3 ? "This is not a valid mana cost." : (isInteger3 ? "This is a valid integer mana cost." : "This is a valid decimal mana cost.");

// Jace's Power
let original4 = jacePower;
let converted4 = Number(original4);
let isNaN4 = Number.isNaN(converted4);
let isInteger4 = Number.isInteger(converted4);
let message4 = isNaN4 ? "This is not a valid mana cost." : (isInteger4 ? "This is a valid integer mana cost." : "This is a valid decimal mana cost.");

// Combine all results into ONE string
let conversionResults = "";
conversionResults += `Original: '${original1}' -> Converted: ${converted1} -> isNaN: ${isNaN1} -> isInteger: ${isInteger1} -> ${message1}<br>`;
conversionResults += `Original: '${original2}' -> Converted: ${converted2} -> isNaN: ${isNaN2} -> isInteger: ${isInteger2} -> ${message2}<br>`;
conversionResults += `Original: '${original3}' -> Converted: ${converted3} -> isNaN: ${isNaN3} -> isInteger: ${isInteger3} -> ${message3}<br>`;
conversionResults += `Original: '${original4}' -> Converted: ${converted4} -> isNaN: ${isNaN4} -> isInteger: ${isInteger4} -> ${message4}<br>`;

// Display the final result inside the element: id="numberConversionOutput"
document.getElementById('numberConversionOutput').innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Create at least 2-3 numeric variables
let card1Cost = 2; // Lightning Bolt
let card2Cost = 4; // Black Lotus
let card3Cost = 1; // Sol Ring
let totalCards = 60; // Standard deck size

// Perform calculations:
// - Addition: total mana cost
let totalManaCost = card1Cost + card2Cost + card3Cost;

// - Division: average mana cost
let averageManaCost = totalManaCost / 3;

// Use toFixed() for average
let formattedAverage = averageManaCost.toFixed(2);

// Use toLocaleString() for total cards
let formattedTotalCards = totalCards.toLocaleString();

// Build a string showing results
let mathResults = `Total mana cost for sample cards: ${totalManaCost}<br>`;
mathResults += `Average mana cost: ${formattedAverage}<br>`;
mathResults += `Total cards in deck: ${formattedTotalCards}<br>`;

// Conditional: check if average is high or low
if (averageManaCost > 3) {
    mathResults += "This is a high curve deck.";
} else {
    mathResults += "This is a low curve deck.";
}

// Display the results inside the element with id="mathOutput"
document.getElementById('mathOutput').innerHTML = mathResults;