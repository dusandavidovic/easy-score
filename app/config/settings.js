import { Constants } from "expo-constants";

// NOTE: this setings is ONLY valid for Wufoo Forms!!!
const uriFormsBase = "https://{{subdomain}}.wufoo.com/api/v3/forms";
const uriFormsOther = "/{{formid}}{{endPoint}}.{{format}}";

const settings = [
  {
    id: "scorer",
    accessId: "Y3VO-26SD-XJBC-RBO4",
    subdomain: "bhycadmin",
    format: "json",
  },
  {
    id: "bhyc.rcsail",
    subdomain: "bhyctest",
    accessId: "AXLK-1Q4V-GMTC-UETL",
    format: "json",
  },
];

const getSettings = (id) => {};
