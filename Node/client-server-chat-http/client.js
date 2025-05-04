const http = require('http');

let conversationCount = 0; // Track the number of conversations

// Function to send a message to the server
const sendMessage = (message) => {
    const options = {
        hostname: 'localhost',
        port: 4000,
        path: '/',
        method: 'POST',
    };

    const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            console.log(`Response from server: ${data}`);
            conversationCount++; // Increment conversation count after each response
            if (conversationCount < 5) { // Let's limit to 5 exchanges, adjust as needed
                promptForMessage();
            } else {
                console.log('Maximum conversation limit reached.');
                process.exit(); // Exit after the conversation limit is reached
            }
        });
    });

    req.write(message);
    req.on('error', (error) => {
        console.error(`Problem with request: ${error.message}`);
    });

    req.end();
};

// Function to prompt for a message
const promptForMessage = () => {
    process.stdout.write('Enter your message: '); // Prompt the user for input

    // Use sys.addListener to capture input
    const sys = process.stdin;
    sys.addListener('data', (input) => {
        const message = input.toString().trim(); // Read the input message
        if (message.toLowerCase() === 'exit') {
            console.log('Exiting the chat. Goodbye!');
            process.exit(); // Exit the program if 'exit' is typed
        }
        sendMessage(message); // Send the message to the server
    });
};

// Start the prompt for the first message
promptForMessage();
