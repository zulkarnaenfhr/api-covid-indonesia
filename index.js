const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000", "https://zulkarnaenfhr.github.io/indonesia-covid-mapping/", "https://zulkarnaenfhr.github.io/"],
};

const apiCityRiskScore = "https://data.covid19.go.id/public/api/skor.json";

app.get("/", cors(corsOptions), async (req, res) => {
    const url = "localhost/5000";
    res.json({
        message: "Selamat Datang di API COVID-19 INDONESIA - Enjoy My Work",
        "projects source": "https://github.com/Reynadi531/api-covid19-indonesia-v2",
        endpoints: {
            kumulatif: [`${url}/api/indonesia`, `${url}/api/indonesia/more`],
            harian: [`${url}/api/indonesia/harian`],
            provinsi: [`${url}/api/indonesia/provinsi`, `${url}/api/indonesia/provinsi/alt`, `${url}/api/indonesia/provinsi/more`, `${url}/api/indonesia/provinsi/harian`],
            csv: {
                kumulatif: [`${url}/api/indonesia/csv`],
                harian: [`${url}/api/indonesia/csv/harian`],
                provinsi: [`${url}/api/indonesia/csv/provinsi`, `${url}/api/indonesia/csv/provinsi/alt`],
            },
        },
    });
});

app.get("/cityScore", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiCityRiskScore, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
