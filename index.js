import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const url = "https://rickandmortyapi.com/api/character/"

app.use(express.static("public"));

app.get("/", async (req, res) => {
    const randomId1 = Math.floor(Math.random() * 826) + 1;
    const randomId2 = Math.floor(Math.random() * 826) + 1;
    try {
        const result  = await axios.get(`${url}${randomId1},${randomId2}`);
        const data = result.data;
        res.render("index.ejs", {character : data});
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
    
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
    
})
