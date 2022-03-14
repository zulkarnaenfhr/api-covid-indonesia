const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000", "https://zulkarnaenfhr.github.io/indonesia-covid-mapping/", "https://zulkarnaenfhr.github.io/"],
};

app.get("/", cors(corsOptions), async (req, res) => {
    const url = "localhost/5000";
    res.json({
        message: "Just to Enable the Cors Option from https://covid19.go.id/dokumentasi-api . for personal project because there is a corsOption url setting just for my project",
        endpoint: {
            cityScore: "https://api-covid-indonesia.herokuapp.com/cityScore",
            feedBerita: "https://api-covid-indonesia.herokuapp.com/feedBerita",
        },
    });
});

const apiCityRiskScore = "https://data.covid19.go.id/public/api/skor.json";
app.get("/cityScore", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiCityRiskScore, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const feedBerita = "https://newsapi.org/v2/everything?q=covid&apiKey=4f8b1414b1634e198f8758eef4d8daf2&domains=detik.com";
app.get("/feedBerita", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(feedBerita, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
