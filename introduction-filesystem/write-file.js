const fs = require("fs");

const contentText = (title,description) =>{
    return `
    ### ${title}
    ${description}`

}

fs.writeFile("write.example.md", contentText("This is title", "This is description"), (error)=>{
    if(error){
        console.log({message: "Error to create file"});
        return;
    }
    console.log({message: "File written successfully"})
})