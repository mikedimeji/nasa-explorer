require('dotenv').config();
const cors = require('cors');
const app = require('./app');
const port = process.env.PORT || 10000;


const corsOptions = {
  origin: ['https://nasa-explorer-1.onrender.com'],
  methods: 'GET', 
  credentials: true, 
};

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log("NASA API Key:", process.env.NASA_API_KEY);
});
