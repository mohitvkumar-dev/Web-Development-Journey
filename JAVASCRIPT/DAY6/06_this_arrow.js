const students={
   name: "Mohit",
   cgpa:9.5,
   prop:this, // global scope
   getName:function(){
    console.log(this);
    return this.name;
   },
   getMarks: ()=>{
       console.log(this); // parent's scope -> window
    return this.marks;
   },

   getinfo1: function(){
    setTimeout(()=>{
        console.log("this")
    }, 2000);
   },
   
   getinfo2:function(){
    setTimeout(function(){
        console.log("this")
    }, 2000);
}
};