const url = process.argv[2];
const filePath = process.argv[3];
const fs = require('fs')

const request = require('request');


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  const fileSize = body.length
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.error(err)
      return
    }
  })
  console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}`)
});







//make app that takes in 2 arguments from command line
// first arg is a URL - DONE
// second arg is a local file path -'/Users/Manuel/w2/d3-net/page-fetcher/test.txt' - DONE
// it should download the resource to the local path on your machine.
// example input: "node fetcher.js http://www.example.edu/ ./index.html"
// example output: "Downloaded and saved 3261 bytes to ./index.html"

// 2 operations
// 1. need to make an HTTP request + need to wait for the response
// 2. Need to take data and write it to my local file system