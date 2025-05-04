const { URL } = require("url");

const urlString = "https://github.com/Pragateeshwaran";
const parsedUrl = new URL(urlString);

console.log("Protocol:", parsedUrl.protocol);    // e.g., https:
console.log("Hostname:", parsedUrl.hostname);    // e.g., github.com
console.log("Port:", parsedUrl.port || "default"); // empty string means default port
console.log("Pathname:", parsedUrl.pathname);    // e.g., /Pragateeshwaran
console.log("Origin:", parsedUrl.origin);        // e.g., https://github.com
