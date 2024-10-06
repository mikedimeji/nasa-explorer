require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("NASA API Key:", process.env.NASA_API_KEY);
});
