const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/birthdaycalendar', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.set('useFindAndModify', false);

// Define mongoose schema
const birthdaySchema = new mongoose.Schema({
  name: String,
  date: Date,
});

const Birthday = mongoose.model('Birthday', birthdaySchema);

// CRUD Operations
app.post('/api/birthdays', async (req, res) => {
  try {
    const birthday = new Birthday(req.body);
    await birthday.save();
    res.json(birthday);
  } catch (error) {
    res.status(500).json({ error: 'Error creating birthday' });
  }
});

app.get('/api/birthdays', async (req, res) => {
  try {
    const birthdays = await Birthday.find();
    res.json(birthdays);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching birthdays' });
  }
});

app.put('/api/birthdays/:id', async (req, res) => {
  try {
    const updatedBirthday = await Birthday.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBirthday);
  } catch (error) {
    res.status(500).json({ error: 'Error updating birthday' });
  }
});

app.delete('/api/birthdays/:id', async (req, res) => {
  try {
    await Birthday.findByIdAndRemove(req.params.id);
    res.json({ message: 'Birthday deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting birthday' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});