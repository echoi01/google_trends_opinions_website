const cheerio = require('cheerio');
const request = require('request');

let rendered = [];

const scrapeController = {
    getData: (req, res, next) => {
        request('https://trends.google.com/trends/hottrends/atom/hourly', ((error, response, html) => {
            let $ = cheerio.load(html);
            let scraped = $('a');
            for (let i = 0; i < 25; i++) {
                if (scraped[i] !== undefined) {
                    rendered.push(scraped[i]['children'][0].data)
                }
            }
            res.json({
                'ScrapedContent': rendered,
            })
        })
    }
}

module.exports = scrapeController;