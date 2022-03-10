const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000", "https://zulkarnaenfhr.github.io/indonesia-covid-mapping/", "https://zulkarnaenfhr.github.io/"],
};

const requestEndpoint = "https://data.covid19.go.id/public/api/skor.json";

app.get("/", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(requestEndpoint, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
