const students={
  name: "Mohit",
  age : 22,
  maths: 98,
  eng:89,
  phy:98,
  getAvg(){
    let avg=(this.maths+this.eng+this.phy)/3;
    console.log(avg);
  }
};