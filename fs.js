//FS module
// Import fs module
const fs = require('fs');

// Present Working Directory: C:\Desktop\NodeJSTut
// Making a new directory called ./myFolder:

fs.mkdir('./myFolder', (err) => {
    if(err){
        console.log(err);
    } else{
        console.log('Folder Created Successfully');
    }
})

// asyncronous
//const fs = require('fs');

const data = "Hi,this is newFile.txt";

fs.writeFile('./myFolder/myFile.txt', data, (err)=> {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Writen to file successfully!');
    }
})


// how to read asynchronously fs.readFile()
//const fs = require('fs');

fs.readFile('./myFolder/myFile.txt', {encoding: 'utf-8'}, (err, data) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('File read successfully! Here is the data');
        console.log(data);
    }
})

// reading and writing to a file syncronously
//const fs = require('fs');

try{
    // Write to file synchronously
    fs.writeFileSync('./myFolder/myFileSync.txt', 'myFileSync says Hi');
    console.log('Write operation successful');

    // Read file synchronously
    const fileData = fs.readFileSync('./myFolder/myFileSync.txt', 'utf-8');
    console.log('Read operation successful. Here is the data:');
    console.log(fileData);

} catch(err){
    console.log('Error occurred!');
    console.log(err);
}


// how to read a directory using fs.readdir()
//const fs = require('fs');

fs.readdir('./myFolder', (err, files) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Directory read successfully! Here are the files:');
    console.log(files);
})

// how to rename a file using fs.rename()
//const fs = require('fs');

fs.rename('./newFolder/newFile.txt', './newFolder/newFileAsync.txt', (err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('File renamed successfully!')
})


// how to delete a file using fs.unlink()
//const fs = require('fs');

fs.unlink('./myFolder/myFileSync.txt', (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File Deleted Successfully!')
})

