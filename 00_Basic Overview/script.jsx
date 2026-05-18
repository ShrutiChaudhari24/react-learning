// ====================================================
// using noraml JS
// ========================================================

// ager normal JS mae humey html likhna ho tho kitna sara karna padega
var h1 = document.createElement('h1'); // to create the html tag using JS
h1.innerHTML = "Hello from JS" // to insert the text in HTML
// console.log(h1);

document.body.appendChild(h1); // to show on UI

// function in JS
function abc(){
    console.log('hello');
}
abc();


// ====================================================
// using JSX
// ========================================================

// JSX ka full form hai: JavaScript XML
// Ye React me use hone wala ek syntax hai jo hume JavaScript ke andar HTML jaisa code likhne deta hai.

// Example:
var h1 = <h1>Hello World</h1>; // Ye normal HTML nahi hai. Ye JSX hai.

<abc /> // easae nhi hum JSX mae call kar sakte hai JSX mae 

// JSX ki zarurat kyu padi?
// Without JSX:
// Ye thoda complex aur unreadable lagta hai.
// JSX ki help se same cheez easily likh sakte hai: