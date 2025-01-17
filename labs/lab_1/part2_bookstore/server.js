import http from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendPage = (res, filePath, contentType) => {
    fs.readFile(filePath, (err, content) =>{
        if (err){
            res.writeHead(500, { "Content-Type" : "text/plain" });
            res.end("server error");
            return;
        }
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
    });
}


const server = http.createServer((req, res) => {
    const base = path.join(__dirname, "pages");
    let filePath;
    let contentType = "text/html";

    switch(req.url){
        case "/":
            filePath = path.join("home.html");
            break;
        case "/order":
            filePath = path.join(base, "order.html");
            break;
        case "/contact-us":
            filePath = path.join(base, "contactUs.html");
            break;
        case "/books":
            filePath = path.join(base, "books.html");
            break;
        default:
            filePath = path.join(base, "error.html");
            break;
    }

    sendPage(res, filePath, contentType);
});

server.listen(port, () =>{
    console.log(`Server running on ${port}`);
})
