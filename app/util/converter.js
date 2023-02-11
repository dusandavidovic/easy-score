import * as converter from "json-2-csv";

// json2csv options
const options = {
  delimiter: {
    wrap: '"', // Double Quote (") character
    field: ",", // Comma field delimiter
    eol: "\n", // Newline delimiter
  },
  prependHeader: true,
  sortHeader: false,
  excelBOM: true,
  trimHeaderValues: true,
  trimFieldValues: true,
  //keys: [
  //"Make",
  // "Model",
  // "Year",
  // "Specifications.Mileage",
  // "Specifications.Trim",
  //],
};

//const convert2CSV = ({ data, callback }) => {
const convert2CSV = (data) => {
  let myCsv = "";
  const json2csvCallback = function (err, csv) {
    if (err) throw err;
    myCsv = csv;
    console.log("myCsv", myCsv);
  };

  converter.json2csv(data, json2csvCallback, options);
  return myCsv;
};

export default convert2CSV;
