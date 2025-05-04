https = require('https')

https.get('https://github.com/pragateeshwaran', (res)=>{
    let data = ''
    res.on('data', (chunks)=>{
        data += chunks
    })

    res.on('end', ()=>{
        console.log((data))
    })
})