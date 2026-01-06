const express = require('express');
const helloRoute = require('./routes/hello');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/hello', helloRoute);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
