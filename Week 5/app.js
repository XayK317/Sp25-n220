const h1Ref = document. getElementById("title")

console.log("hiRef:", hiRef);

const letterGradeRefs = document.getElementsByClassName("letter-grade");

console.log("letterGradeRefs:", letterGradeefs);

const pRef = document.querySelector("p");

console.log("pRef:", pRef);

const h1AltRef = document.querySelector("#title");

console.log("h1AltRef:", h1AltRef);

const liRefs = document.querySelectorAll("li");

console.log("liRefs:", liRefs);

const ulRef= document.querySelector("ul");

console.log("ul textContent", ulRef.textContent);

console.log("ul innerText", ulRef.innertext);

console.log("ul innerHTML", ulRef.innerHTML);

pRef.innerText = "The cozy old farmer ate the little green rock.";

ulRef.innerHTML = "<li class='letter-grade'>C</li>";
ulRef.innerHTML += "<li class='letter-grade'>D</li>";
ulRef.innerHTML += "<li class='letter-grade'style='display; none'<E</li>";
ulRef.innerHTML += "<li class='letter-grade'>F</li>";

h1Ref.style.backgroundColor = "red";
h1Ref.style.color = "white";

pRef.style.backgrounfColorx = "#00ff00";
pRef.style.color = "rgb(x255, 50, 0)"
pRef.syle.height = "400px";
pRef.style.width = "400px";

h1Ref.style.display = "none";

h1Ref.style.display = "inline"; 

const ulLiRefs = ulRef.querySelectorAll("li");

console.log("ulLiRefs:", ulLiRefs);

const googleLinkRef = document.querySelector("a.google");

googleLinkeRef = "https://google.com";
googleLinkRef.target = "_blank";

const inputRef = document.querySelector("input");

inputRef.setAttribute("placeholder", "Green Jello with the Fruit");

pRef.dataset.age = "89";

console.log(pRef);

console.log(pRef.dataset);

pRef.ClassList.add("blue");

pRef.ClassList.remove("blue");

console.log(pRef.classList.contains("blue"));

const newLi = document.createElement("Li");
newLi.innerText = "G";
newLi.classList.add("letter-grade");

ulReft.appendchild(newLi);