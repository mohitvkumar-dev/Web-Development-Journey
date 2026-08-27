let jsonReq= '{"fact":"Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.","length":124}';

let validReq = JSON.parse(jsonReq);
console.log(validReq);
console.log(validReq.fact);


let stud = {
    name : "Mohit",
    branch: "ECE",
};

let req= JSON.stringify(stud);
console.log(req);