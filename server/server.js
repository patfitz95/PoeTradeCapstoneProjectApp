require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routers/users');
const authRouter = require('./routers/auth');
const path = require('path');

const app = express();
const port = process.env.PORT || 4001;
app.use(express.static("build"));

// const publicPath = path.join(__dirname, '..', 'client/build');

app.use(cors());
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/auth', authRouter);
// app.use(express.static(publicPath));


app.get('/', (req, res) => {
  res.send('Welcome to our server!');
});
// app.get('*', (req, res) => {
//   res.sendFile(path.join(publicPath, 'index.html'));
// });
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});