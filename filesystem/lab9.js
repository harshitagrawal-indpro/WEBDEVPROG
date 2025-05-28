const fs = require('fs');
const path = require('path');

// 1. read a text file 

const filePath = path.join(__dirname,"text.txt");
fs.readFile(filePath, 'utf-8', (err, data) => {
    if(err){
        console.log("error readign the file :", err);
        return;
    }
    console.log(data);

});



// creating and writing to a new file 
fs.writeFile('newfile.txt','utf-8',(err,data)=>{
    if (err){
        console.log(err);
        return;
    }else{
        console.log(data);  
    }
})