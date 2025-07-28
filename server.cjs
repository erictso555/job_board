const express = require('express');
const fs = require('fs');  
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());    

app.get('/api/freelanceJobs', (req, res) => {
    const data = fs.readFileSync('./src/seed/freelanceJobs.json', 'utf-8');
    res.json(JSON.parse(data));
    console.log("Fetched freelance jobs data");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
