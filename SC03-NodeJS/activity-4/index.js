import fs from "node:fs";

let pathMyApp = "./src/myapp";
let pathTest = "./src/test";
let pathDataDog = "./src/data/raw/dog";
let pathDataCat = "./src/data/raw/cat";
let pathDataTrain = "./src/data/train";
let pathDataTest = "./src/data/test";
let pathDataValidation = "./src/data/validation";
let fileInit = "_init_.py";
let fileUtils = "utils.py";
let fileTest = "test_division.py";

// Create directories
fs.mkdir(pathMyApp, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathTest, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathDataDog, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathDataCat, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathDataTrain, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathDataTest, { recursive: true}, (err) => {
    if (err) throw err;
});
fs.mkdir(pathDataValidation, { recursive: true}, (err) => {
    if (err) throw err;
});

// Create files
fs.writeFile(`${pathMyApp}/${fileInit}`, "", (err) => {
    if (err) throw err;
});
fs.writeFile(`${pathMyApp}/${fileUtils}`, "", (err) => {
    if (err) throw err;
});
fs.writeFile(`${pathTest}/${fileInit}`, "", (err) => {
    if (err) throw err;
});
fs.writeFile(`${pathTest}/${fileTest}`, "", (err) => {
    if (err) throw err;
});

