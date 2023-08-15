//adding elements to the page
const body = document.body;
body.append("Hello World", " ", "Bye");
// .appendChild() you can only append elements ex. div , p , h1. you can only append on thing at a time
// append() you can do the same but also do strings

//Ceating an element
const div = document.createElement("div");
// here we just created a div but if inspect the document in the console there is nothig. This because we haven't add it to out page
body.append(div); // this add the div we just created to our page. now if we expect our page in the browser we can see the div

// add text to our div (they are two ways)

// div.innerText = "Hi, I am nico.";
div.textContent = " Hi I am Nico.";
// what is the diference between innerText and innerContent. They are prity much the same. InnerText prints out the text that is visable, this will be printed as the page would . while inner content prints out everything that is on the page, whith style or indentation. if you use the console .

//what if we wanted to add an elemt tag insde of coneted.if we use the
//div.textContent = "<strong> Hi I am Nico.</strong>"; in this example by adding the strong tag. this will not make our text bold. but just make our add everything as text. even if me use .innerText. the both same.

// if you want to render html inside of your div you need to use .innerHTML
div.innerHTML = " <strong> Hi I am Nico.</strong>";
// now the text is bolder and is using the html tags to render out the contetnt. But innerHtml has huge security issues.If you allow user to put content in to your page the can write malicius code. another way you can do this byt creating a new  element into your code
const strong = document.createElement("strong");
div.append(strong);
strong.textContent = " Hello Didi";
//min 940
