//import { Constants } from "expo-constants";

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

const getSetting = (id) => {
  return settings.filter((item) => item.id === id);
};

const getUri = (id, endPoint, formId) => {
  const { subdomain, format } = getSetting(id);

  let localBase = uriFormsBase.replace("{{subdomain}}", subdomain);
  let localOther = uriFormsOther.replace("{{formid}}", formId ? formId : "");
  localOther = localOther.replace("{{endPoint}}", endPoint);
  localOther = localOther.replace("{{format}}", format);
  return `${localBase}${localOther}`;
};

const getAuth = (id) => {
  const { accessId } = getSetting(id);
  return {
    username: accessId,
    password: "anyPass",
  };
};

export default {
  getSetting,
  getUri,
  getAuth,
};
