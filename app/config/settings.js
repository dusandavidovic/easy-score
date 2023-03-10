// NOTE: this setings is ONLY valid for Wufoo Forms!!!
const uriFormsBase = "https://{{subdomain}}.wufoo.com/api/v3/forms";
const uriFormsOther = "{{formid}}{{endPoint}}.{{format}}";

const settings = [
  {
    id: "david",
    accessId: "Y3VO-26SD-XJBC-RBO4",
    subdomain: "bhycadmin",
    format: "json",
  },
  {
    id: "james",
    subdomain: "bhyctest",
    accessId: "AXLK-1Q4V-GMTC-UETL",
    format: "json",
  },
];

const getSetting = (id) => {
  return settings.filter((item) => item.id === id)[0];
};

const getUri = (id, endPoint, formId) => {
  const { subdomain, format } = getSetting(id);

  let localBase = uriFormsBase.replace("{{subdomain}}", subdomain);
  let localOther = uriFormsOther.replace(
    "{{formid}}",
    formId ? `/${formId}` : ""
  );
  localOther = localOther.replace("{{endPoint}}", endPoint ? endPoint : "");
  localOther = localOther.replace("{{format}}", format ? format : "json");
  const uri = `${localBase}${localOther}`;
  return uri;
  //return `${localBase}${localOther}`;
};

const getAuth = (id) => {
  const { accessId } = getSetting(id);
  return {
    username: accessId,
    password: "anyPass",
  };
};

const getAuthEncoded = (id) => {
  const { accessId } = getSetting(id);
  return btoa(`${accessId}:anyPass`);
};

export default {
  getSetting,
  getUri,
  getAuth,
  getAuthEncoded,
};
