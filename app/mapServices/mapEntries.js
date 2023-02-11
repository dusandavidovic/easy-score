import convert2CSV from "./../util/converter";

// TEST, only for Wufoo
const swMap = {
  Field328: "Fleet",
  Field213: "Boat",
  Field216: "Class",
  Field2: "FirstName",
  Field3: "LastName",
  Field999: "HelmName",
  Field440: "SailNo",
  Field220: "RatingFS",
  Field221: "RatingNFS",
};

const swMapEntry = (entry, fields) => {
  const line = {};
  for (let sw in swMap) {
    //console.log(sw, swMap[sw], entry[sw]);
    if (entry[sw]) {
      line[swMap[sw]] = entry[sw];
    }
  }
  return line;
};

const mapEntries = (fields, entries) => {
  const sf = setFields(fields);
  //console.log("simplyfyFields", sf);
  const lines = [];
  entries.forEach((obj) => {
    lines.push(swMapEntry(obj, fields));
  });
  console.log(lines);
};

const setFields = (fields) => {
  let newArr = [];
  fields.forEach((value) => {
    if (value["ID"].substr(0, 5) === "Field")
      newArr.push({
        title: value["Title"],
        id: value["ID"],
        required: value["IsRequired"],
      });
  });
  return newArr;
};

export default {
  mapEntries,
  setFields,
};
