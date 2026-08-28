


let url= "http://universities.hipolabs.com/search?name=";

let btn= document.querySelector("button");

btn.addEventListener("click", async()=>{
    let country=document.querySelector("input").value;
    console.log(country);
    let colleges = await getCollege(country);
   
    show(colleges);
});

function show(colleges){
    let lis=document.querySelector("#list");
    for(college of colleges){
        console.log(college.name);

        let li= document.createElement("list");
        li.innerText = college.name;
        list.appendChild(li);
    }
}

async function getCollege(country){
    try{
        let res = await axios.get(url+country);
        return res.data;
    }catch(e){
       console.log("error- ", e);
       return[];
    }
}