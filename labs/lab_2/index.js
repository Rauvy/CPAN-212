import express from 'express';

const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send("Hello");
});

app.get('/name', (req, res) => {
    res.send("Rehina Yakubiv");
});

app.get('/greeeting', (req, res) => {
    res.send("Rehina Yakubiv | N01649674");
});

app.get('/add/:x/:y', (req, res) => {
    console.log(req.params);
    const result = parseInt(req.params.x) + parseInt(req.params.y);

    res.send(`Result: ${result.toString()}`);
});

app.get('/calculate/:a/:b/:operation', (req, res) => {
    //Usage for "/" operation: http://localhost:3000/calculate/8/2/%2F
    console.log(req.params);
    const operation = req.params.operation;
    console.log(operation);
    let result;

    switch(operation) {
        case "+":
            result = parseInt(req.params.a) + parseInt(req.params.b);
            break;
        case "-":
            result = parseInt(req.params.a) - parseInt(req.params.b);
            break;
        case "*":
            result = parseInt(req.params.a) * parseInt(req.params.b);
            break;
        case "/":
            result = parseInt(req.params.a) / parseInt(req.params.b);
            break;
        case "**":
            result = parseInt(req.params.a) ** parseInt(req.params.b);
            break;
    }

    res.send(`Result: ${result}`);
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});