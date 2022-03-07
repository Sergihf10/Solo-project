const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(4000, () => {
  console.log('Server listening on port 4000');
});
