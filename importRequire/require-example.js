const fs = require("fs");

fs.readFile("example.txt", "utf-8", (error,data)=>{
  if(error){
    console.error(error);
    return;
  }
  console.log(data);

})