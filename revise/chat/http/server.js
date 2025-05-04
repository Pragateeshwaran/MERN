    const http = require('http')

    http.createServer((req, res)=>{
        console.log("✅ connected to client")
        data = ''
        req.on("data", (chunks)=>{
            data += chunks
        })
        let wordCount = 0, charCount = 0 
        req.on("end", ()=>{
            wordCount = data.toString().split(" ").filter(Boolean).length
            charCount = data.toString().filter(Boolean).length
        })
        res.end(JSON.stringify({wordCount, charCount}));

    }).listen(3000, ()=>{
        console.log('Server is running at http://localhost:3000/')
    })