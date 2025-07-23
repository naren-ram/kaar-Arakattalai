const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());


app.get('/api/message', (req, res) => {
  res.json({ message: 'Kaar Arakattalai' });
});


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
