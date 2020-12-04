const express = require('express');
const app = express();

const employeesRoutes = require('./src/routes/employeesRouter');
const functionsRoutes = require('./src/routes/functionsRouter');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', employeesRoutes);
app.use('/api', functionsRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
