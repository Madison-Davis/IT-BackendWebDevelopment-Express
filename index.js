// Imports
import Express from "express"
import * as fs from "fs"

// Variables
// Link: https://developer.wmata.com/docs/services/547636a6f9182302184cda78/operations/547636a6f918230da855363f
const app = Express();
const port = 3000;
var data = fs.readFileSync('expressTrains.json', 'utf8');
var words = JSON.parse(data);

app.get("/", (req, res) => {
    res.send(words["Trains"][1])
});

app.get("/version2", (req, res) => {
    res.sendFile("index.html", {root : "."})
});

app.listen(port, () => {
    console.log("Running");
})



