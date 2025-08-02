const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/appointment', (req, res) => {
  const { name, symptom } = req.body;
  console.log(`Appointment requested by ${name} for ${symptom}`);
  res.json({ message: `Appointment booked for ${name} with symptom: ${symptom}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
