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
fs.writeFile('newfile.txt','this is me harshit',(err)=>{
    if (err){
        console.log(err);
        return;
    }else{
        console.log("file created");
        console.log("reading the file !");
    }
    fs.readFile('newfile.txt','utf-8',(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        else {
            console.log(data);
        }
    })
})


// append to a file

fs.appendFile('newfile.txt',"this is me harshit the new one ", (err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    else {
        console.log(data);
        fs.readFile('newfile.txt',"utf-8",(err)=>{
            if (err){
                console.log(err);
                return;
            }
            fs.readFile("newfile.txt","utf-8",(err,data)=>{
                if(err){
                    cosnole.log(err);
                    return;

                }
                console.log(data)
            })
        })
    }
})