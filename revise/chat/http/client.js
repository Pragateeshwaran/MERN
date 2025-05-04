const http = require('http')
process.stdout.write("You: ")
sys = process.stdin

sys.on("data", (input)=>{
    const msg = input.toString()
    if(msg == "end"){
        console.log("Ended")
        process.exit()
    }
    
    req = http.request({
        hostname: "localhost", 
        port: 3000, 
        path: "/",
        method: 'POST'
    }, (res)=>{
        let data = ''
        res.on("data", (chunks)=>{
            data += chunks
        })
        res.on("end", ()=>{
            const result = JSON.parse(data);
            console.log(result.wordCount)
            console.log(result.charCount)
            process.stdout.write("You: ");
        })
         
    })

    req.write(msg)
})

