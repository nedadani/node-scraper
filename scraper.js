const axios = require("axios");

const url = "https://www.amazon.co.uk/deal/7006cf95";

axios(url).then(response => {
    const html = response.data;
    console.log(html)
}).catch(console.error);