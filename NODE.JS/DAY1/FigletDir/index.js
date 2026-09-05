const figlet= require("figlet");

figlet(" I'm IAS Mohit Kumar PAswan", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});