const net = require('net')

const server = net.createServer((socket)=>{
    console.log("🔥 connected to server.")
    socket.on('data', (chunk)=>{
        const msg = chunk.toString().trim()
        if(msg == 'exit'){                                                                      
            console.log('client exited.')
            server.close()
        }
        else{
            console.log("Client: ", msg)
            process.stdout.write("You: ")
        }

    })
    const sys = process.stdin
    sys.addListener('data', (input)=>{
    socket.write(input)
    })
})



server.listen((3000), ()=>{
    console.log("started")
})