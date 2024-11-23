const express = require('express'); // import the express
const app = express();
const port = 5000; // difine a the server port 

app.get('/', (req, res) => {
    res.send('Hi this is Jubayer welcome')
}) 
app.get('/data', (req, res) => {
    res.send('Hi welcome to my first server2')
}) 
app.get('/about', (req, res) => {
    res.send('Hi welcome to my first server3')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})