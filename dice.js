console.log("hello world!")

let div = document.createElement("div");
let body = document.querySelector("body");
let btn = document.querySelector("button");

        //HÄR VILL JAG SLUMPA ETT NUMMER NÄR JAG TRYCKER PÅ KNAPPEN
        const result = dice()

        btn.addEventListener("click", dice) 

        
        function dice () {
            
            console.log("hej")
            return Math.round (Math.random() * 6);
            
        }
        div.innerHTML = result
        
        body.appendChild(div);
        
       



console.log(result)


