//adding elements to the page
// const body = document.body;
// body.append("Hello World", " ", "Bye");
// .appendChild() you can only append elements ex. div , p , h1. you can only append on thing at a time
// append() you can do the same but also do strings

//Ceating an element
// const div = document.createElement("div");
// here we just created a div but if inspect the document in the console there is nothig. This because we haven't add it to out page
// body.append(div); // this add the div we just created to our page. now if we expect our page in the browser we can see the div

// add text to our div (they are two ways)

// div.innerText = "Hi, I am nico.";
// div.textContent = " Hi I am Nico.";
// what is the diference between innerText and innerContent. They are prity much the same. InnerText prints out the text that is visable, this will be printed as the page would . while inner content prints out everything that is on the page, whith style or indentation. if you use the console .

//what if we wanted to add an elemt tag insde of coneted.if we use the
//div.textContent = "<strong> Hi I am Nico.</strong>"; in this example by adding the strong tag. this will not make our text bold. but just make our add everything as text. even if me use .innerText. the both same.

// if you want to render html inside of your div you need to use .innerHTML
// div.innerHTML = " <strong> Hi I am Nico.</strong>";
// now the text is bolder and is using the html tags to render out the contetnt. But innerHtml has huge security issues.If you allow user to put content in to your page the can write malicius code. another way you can do this byt creating a new  element into your code
// const strong = document.createElement("strong");
// div.append(strong);
// strong.textContent = " Hello Didi";
//min 940
const body = document.body;
const div = document.createElement("div");
const spanName = document.querySelector("#name");
const spanUR = document.querySelector("#youAre");
//what if we want to remove element out Dom. if we want to remove the spanName we can use
// spanName.remove();
//if we inspect our page it dosent even appear in the Dom
// we ccan later add it back in
// div.append(spanName);.
// div.remove(spanUR);
body.append(div);
spanUR.remove();
div.append(spanUR);

//What if you want to add classes or get  properpeties to an element or data atributs. This where you will do mosnt of your data manipulation.
// The first one manging the atibuts of an element. We are goig to add a title attribut to the span's. The titel attribuest gives the element once you hover them it will give a box with the title given. To get the attribute of an element
console.log(spanName.getAttribute("title"));
// Usally we dont use "spanName.getAttribute("title")"
// we will just use spanName.id or spanName.title
// the good thing about getAttribute is very explicit on what you are doing

// to set an attribute
spanName.setAttribute("class", "bro");
//We can also set the attribute as
spanName.className = "brosito";

//removing Attribute
spanName.removeAttribute("class");

//The next thing is dealing with date attributes
//You add the attribute to the element data-"name"
console.log(spanUR.dataset);
console.log(spanUR.dataset.test);
//You can also get new data set propeties
spanName.dataset.newBro = "brogramer";
console.log(spanName.dataset);
console.log(spanName.dataset.newBro);

// we can also get a class
//once we add a class to our element. now we can take our spanName and acces the class by using classList. classList as muliple difrent methods. but the most important ones are classList.add()
spanName.classList.add("chad");
// spanName.classList.remove("chad");
//and we also have toggle
spanName.classList.toggle("latin");
//what toggle will do is add it or remove if it already exist. W can also add a boolean if is true it will add it and if false it will remove it
//toggl("latin", true) add or toggle("latin", false) remove it

//now the most importing DOM manipulation is modifing the style.The style property is a way of acccesing any style propetie of css.
// spanName.style.color = "red";
spanName.style.backgroundColor = "red";
