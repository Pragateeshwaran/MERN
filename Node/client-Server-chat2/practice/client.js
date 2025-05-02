const net = require('net')

const client = new net.Socket()

client.connect(3000, 'localhost', ()=>{
    console.log('connected🔥')
    process.stdout.write('You: ')
})
client.on('data', (chunk)=>{
    const msg = chunk.toString().trim();
    if(msg === "exit"){
        console.log("Server exited")
        client.destroy()
        process.exit()
    }
    else{
        console.log("server:", msg)
        process.stdout.write('You: ')
    }
    
})

const sys = process.stdin
sys.addListener('data', (input)=>{
    client.write(input)
})