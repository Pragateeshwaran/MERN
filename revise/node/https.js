const https = require('https')

https.get('https://github.com/pragateeshwaran', (res)=> {
    data = ''
    res.on('data', (chunks)=>{
        data += chunks
    })
    res.on('end', ()=>{
        
        console.log(data)
    })
    
})