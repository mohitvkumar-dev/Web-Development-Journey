
let btn = document.querySelector("button");

let url2 = "https://dog.ceo/api/breeds/image/random";

btn.addEventListener("click",async ()=>{
   let fact = await getfacts();
//    console.log(fact);

   let p= document.querySelector("#result");
   p.innerText = fact;

   let pic= await getimage();
//    console.log(pic);

let img= document.querySelector("#dogimg");
img.setAttribute("src",pic);


});


let url = "https://catfact.ninja/fact";

 
async function getfacts(){
    try{
        let res= await axios.get(url);
        return res.data.fact;
    }catch(e){
        console.log("error -", e);
        return "No fact found";
    }
}

async function getimage(){
    try{
        let res= await axios.get(url2);
      return res.data.message;
    }catch(e){
        console.log("error -", e);
        return "No image found";
    }
}