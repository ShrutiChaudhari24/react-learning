var h1 = document.createElement('h1'); // to create the html tag using JS
h1.innerHTML = "Hello from JS" // to insert the text in HTML
// console.log(h1);

document.body.appendChild(h1); // to show on UI

// This above we seen that how to create the element using JS DOM manipulation

// ==========================================================
// Now how to create element using react js
// ==========================================================

// React Js is a library 

// Library is used to give one particular feature to the particular website we can customize small small features seperately A library gives specific functionality/features. // You control when and how to use it.
    // examples := 
    // - GSAP (using to create moving animations)
    // - Lenis (used to create smooth scrolling) 
    // - React JS (used to create UI)

// framework sub kuch inbuilt milta hai jyada customization hum nahi kar sakte
    // -NextJs
    // Angular
    // Remix

// import and export -> multiple files ke beech data/function/component share karne ke liye use hote hai

// app.js se variable 'a' import kar rahe hai
import { a } from './app.js';

console.log(a);

// export 2 tarah kae hote hai
// 1) named export -> kisi ko name assign kiya huya tha us name sae uss ko export kiya 
// 2) default export -> ko hum directly import kar sakte hai
import kuchbhi from './app.js'; // yaha name kuch bhi likho jo default export ho raha hoga vo hi default export hoga \
console.log(a);

// Real DOM Vs Virtual DOM
// Real DOM is our actual DOM the tree like structure of HTML
//            HTML 
//          /      \
//      head        body
//       /         / \         \        \
//    title  header  section1  section2 footer
//                    /  \   \ 
//                   h1  Image button

// virtual DOM 
// Virtual DOM React ka ek lightweight copy/version hota hai Real DOM ka.
// Ye actual browser DOM nahi hota.
// React pehle memory me ek fake DOM banata hai.

// React:

// 1) Purana Virtual DOM save rakhta hai
// 2) Naya Virtual DOM banata hai
// 3) Dono compare karta hai
// (isse Diffing bolte hai)
// 4) Sirf changed part update karta hai
// 5) Fir Real DOM me minimal changes karta hai
// Is process ko Reconciliation bolte hai.

// | Real DOM                 | Virtual DOM                   |
// | ------------------------ | ----------------------------- |
// | Browser ka actual DOM    | Real DOM ki lightweight copy  |
// | Slow ho sakta hai        | Faster updates                |
// | Directly update hota hai | Pehle compare hota hai        |
// | Har change costly        | Sirf required change hota hai |
// | Browser handle karta hai | React handle karta hai        |
