const fs = require("fs");
fs.readFile("write.example.md", "utf8", (error,data)=>{
    if(!error){
        let countWord = 0;
        const wordLocal = "description"
        const getText = data.split(" ");
        getText.forEach(word=>{
            if(word === wordLocal){
                countWord++;
            }
        });
        for(let i=0; i < countWord; i++){
            fs.writeFile(`writeCopy${i}.example.text`, wordLocal, (error)=>{
                if(!error){
                    console.log("File written successfully")
                    return;
                }
                console.error(error);
                
            })
        }
        return;
    }
    console.log(error);
})