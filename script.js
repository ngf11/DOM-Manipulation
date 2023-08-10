//adding elements to the page
const body = document.body;
body.append("Hello World", " ", "Bye");
// .appendChild() you can only append elements ex. div , p , h1. you can oly append on thing at a time
// append() you can do the same but also do strings

//Ceating an element
const div = document.createElement("div");
// here we just created a div but if inspect the docupent in the console there is nothig. This because we haven't add it to out page
body.append(div); // this add the div we just created to our page. now if we expect our page in the browser we can see the div

// add text to our div (they are two ways)

// div.innerText = "Hi, I am nico.";
div.textContent = " Hi I am Nico.";
// what is the diference between innerText and innerContent. They are prity much the same. InnerText prints out the text that is visable, this will be printed as the page would . while inner content prints out everything that is on the page, whith style or indentation. if you use the console . 7:32
