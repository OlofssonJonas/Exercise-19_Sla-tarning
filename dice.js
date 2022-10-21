console.log("hello world!")

let div = document.createElement("div");
let body = document.querySelector("body");
let btn = document.querySelector("button");

        //HÄR VILL JAG SLUMPA ETT NUMMER NÄR JAG TRYCKER PÅ KNAPPEN

btn.addEventListener("click", dice)

function dice() {
    return Math.floor (Math.random() * 7);
}

dice()

const result = dice()

console.log(result)

body.appendChild(div);
div.innerHTML = result