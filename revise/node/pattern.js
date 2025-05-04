const fs = require('fs')
fs.readFile('./test.txt', (err, data)=>{
    if(err){
        console.log(err)
    }
    const pattern = /a{2,}/g
    const d = data.toString()
    let new_string = d.replace(pattern, 'b')
    console.log(new_string)
    fs.writeFile('./test.txt', new_string, (err)=>{
        if(err) throw err
        console.log("File wrote")
    })
})