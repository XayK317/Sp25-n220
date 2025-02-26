const h2ref = document.querySelector("h1");
const nnameRef = document.querySelector("#name");
const sizeRef = document.querySelector("#size");

function changeH1Style() {
    if(h1Ref.style.backgroundColor ! =="red") {
        h1Ref.style.backgroundcolor = "red";
    } else {
    h1Ref.style.backgroundColor = "red";
}
}

function changeH1Color() {
    console.log(e.target.vaue);
    h1Ref.style.color = "green";
}

function changeH1size(e) {
    const fontsize = Number(e.target.value);
    if (fontSize >=8){
    h1Ref.style.fontSize = e.target.value + "px";
    } else {
        e.tafget.value = 8;
        h1ref.style.fontSiz = "8px";
    }
}

h1Ref.onclick = changeH1Style;

nameRef.onchange = changeH1Color; 

sizeRef.oninput = changeH1size;
sizeRef.onchange = changeH1size;