import http from "http";
import _ from 'lodash'; 

const port = 3000;

const currentDate = new Date();
const one_day = 1000 * 60 * 60 * 24;

const holidays = [
    { "name": "New Year", "date": new Date(2025, 0, 1) }, // January
    { "name": "Easter", "date": new Date(2025, 3, 21) },  // April
    { "name": "Canada Day", "date": new Date(2025, 6, 1) }, // July
    { "name": "Labour Day", "date": new Date(2025, 8, 1) }, // September
    { "name": "Thanksgiving Day", "date": new Date(2025, 9, 13) }, // October
    { "name": "Christmas Day", "date": new Date(2025, 11, 25) } // December
];


const server = http.createServer((req, res) => {
    _.forEach(holidays, (holiday) => {
        console.log(`Name: ${holiday.name}, Days to Holiday: ${Math.round((holiday.date.getTime() - currentDate.getTime()) / one_day)}`);
    });

    const htmlContent = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>HTML Response</title>
            </head>
            <body>
            <p>Name: New Year, Days to Holiday: -14</p>
            <p>Name: Easter, Days to Holiday: 96</p>
            <p>Name: Canada Day, Days to Holiday: 167</p>
            <p>Name: Labour Day, Days to Holiday: 229</p>
            <p>Name: Thanksgiving Day, Days to Holiday: 271</p>
            <p>Name: Christmas Day, Days to Holiday: 344</p>
            </body>
        </html>
    `;

    res.statusCode = 200;
    res.end(htmlContent);

});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

