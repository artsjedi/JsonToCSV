const fs = require("fs");
const papaparse = require("papaparse");

var inputFile = process.argv[2];
var outputFile = process.argv[3];

if (!inputFile) console.error("no input file configured")
if (!outputFile) console.error("no output file configured")

// read definition
var data = fs.readFileSync(inputFile, "utf8");
var papaparseResult = papaparse.unparse(data, {delimiter:";"});
 
// write to File
fs.writeFileSync(outputFile, papaparseResult);