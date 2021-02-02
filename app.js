const express = require('express');
const path = require('path')

const app = express();

const public = path.join(__dirname, 'public');
app.use(express.static(public));

app.get('/', (req, res) => {
  res.send('Hello, welcome to my application');
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(public, 'about.html'));
})

app.get('/guestbook', (req, res) => {
  res.send(`<h1>Guestbook</h1>`)
})

app.use((req, res) => {
  res.status('404');
  res.send(`404 bitch`);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}.`)
})

module.exports = app;