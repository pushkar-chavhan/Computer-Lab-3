// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/studentDB')
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.log(err));

const studentSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  department: String,
  email: String,
  year: Number,
});

const Student = mongoose.model('Student', studentSchema);

// Root route (optional)
app.get('/', (req, res) => {
  res.send('Backend is working ✅');
});

// CRUD Routes
app.post('/students', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.send(student);
});

app.get('/students', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

app.get('/students/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

app.put('/students/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

app.delete('/students/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted successfully' });
});

app.listen(5000, () => console.log('Server running on port 5000'));
