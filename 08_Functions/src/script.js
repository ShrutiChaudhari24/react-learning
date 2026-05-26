var a = document.querySelector('h1')

function hero(){
    console.log('hello guys I am hero');
}

// ya tho ease likh doo 
// a.addEventListener('click', function(){
//     console.log('hello')
// })

// ya pura function hata kae uss ki gaghe hero function call kar doo a.addEventListener('click', hero()); nahi matlab call mat karna call kiya tho tho vo directly hi chal jayega bina click kae bina event listner lagaye
a.addEventListener('click', hero);