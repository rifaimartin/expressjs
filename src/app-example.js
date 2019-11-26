import express from "express";

const app = express();
const port = 3000;

let handleRequest = (req, res) => {
    const {query, params, body} = req

    res.json(
        {
            message: `Request ${req.method} to '${req.originalUrl}'`,
            query,
            params,
            body
        },);
}
// `<h1>Request ${req.method} to ${req.originalUrl}, content ${req.body}, params ${req.params.userName}, query ${req.query.name}.</h1>`
let handleNotFound = (req, res) => {
    res.status(404).send(`<h1>Not Found Page</h1>`);
};

app.use(express.json());

// app.get("/", (req, res) => res.send("Hello Express!"));
// app.get("/hello/:name", handleRequest);
// app.post("/hello", handleRequest);
// app.put("/hello", handleRequest);
// app.delete("/hello", handleRequest);
// app.get("/hello.json", (req, res) => res.json({hello: "Hello Express!"}));


app.get("/post/:category?", handleRequest)
app.get("/users/:id([0-9]+)", handleRequest)
app.get("/users/:gender(male|female)", handleRequest)
app.get("/users/:username?", handleRequest)
app.get("/post/:category:author/", handleRequest)
app.get("/train/routes", handleRequest)

app.use(handleNotFound);
app.listen(port, () => {
    console.log(`My App Listening Port ${port}!`);
});

