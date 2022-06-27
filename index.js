const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
const corsOptions = {
    origin: ["http://localhost:3000", "https://zulkarnaenfhr.github.io/indonesia-covid-mapping/", "https://zulkarnaenfhr.github.io/", "https://indonesia-covid-mapping-next.vercel.app/"],
};

app.get("/", cors(corsOptions), async (req, res) => {
    const url = "localhost/5000";
    res.json({
        message: "Just to Enable the Cors Option from https://covid19.go.id/dokumentasi-api . for personal project because there is a corsOption url setting just for my project",
        endpoint: {
            UpdateIndonesiaHarian: "https://api-covid-indonesia.herokuapp.com/UpdateHarianIndonesia",
            PemeriksaandanVaksinisasi: "https://api-covid-indonesia.herokuapp.com/PemeriksaandanVaksinisasi",
            KasusSeluruhProvinsi: "https://api-covid-indonesia.herokuapp.com/KasusSeluruhProvinsi",
            RiskScoreKecamatan: "https://api-covid-indonesia.herokuapp.com/RiskScoreKecamatan",
            RumahSakitRujukan: "https://api-covid-indonesia.herokuapp.com/RumahSakitRujukan",
            LaboratoriumRujukan: "https://api-covid-indonesia.herokuapp.com/LaboratoriumRujukan",
            HarianProvinsi: "https://api-covid-indonesia.herokuapp.com/HarianProvinsi",
            RiskScoreProvinsi: "https://api-covid-indonesia.herokuapp.com/RiskScoreProvinsi",
            feedBerita: "https://api-covid-indonesia.herokuapp.com/feedBerita",
        },
    });
});

const apiUpdateIndonesiaHarian = "https://data.covid19.go.id/public/api/update.json";

app.get("/UpdateHarianIndonesia", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiUpdateIndonesiaHarian, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiPemeriksaandanVaksinisasi = "https://data.covid19.go.id/public/api/pemeriksaan-vaksinasi.json";

app.get("/PemeriksaandanVaksinisasi", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiPemeriksaandanVaksinisasi, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiKasusSeluruhProvinsi = "https://data.covid19.go.id/public/api/prov.json";

app.get("/KasusSeluruhProvinsi", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiKasusSeluruhProvinsi, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiRiskScoreKecamatan = "https://data.covid19.go.id/public/api/kecamatan_rawan.json";

app.get("/RiskScoreKecamatan", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiRiskScoreKecamatan, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiRumahSakitRujukan = "https://data.covid19.go.id/public/api/rs.json";

app.get("/RumahSakitRujukan", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiRumahSakitRujukan, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiLaboratoriumRujukan = "https://data.covid19.go.id/public/api/lab.json";

app.get("/LaboratoriumRujukan", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiLaboratoriumRujukan, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiHarianProvinsi = "https://data.covid19.go.id/public/api/prov_time.json";

app.get("/HarianProvinsi", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiHarianProvinsi, fetchOptions);
    const jsonResponse = await response.json();
    res.json(jsonResponse);
});

const apiRiskScoreProvinsi = "https://data.covid19.go.id/public/api/skor.json";

app.get("/RiskScoreProvinsi", cors(corsOptions), async (req, res) => {
    const fetchOptions = {
        method: "GET",
    };
    const response = await fetch(apiRiskScoreProvinsi, fetchOptions);
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
