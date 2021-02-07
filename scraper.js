const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.amazon.co.uk/deal/41b5f944';

axios(url).then(response => {
    const data = cheerio.load(response.data);
    const extracted = cheerio.html(data('div #octopus-dlp-asin-stream'));
    console.log(extracted);
}).catch(console.error);


