import settings from "../config/settings";
import client from "./client";

const getFormEntries = async (sourceId, formId) => {
  try {
    const response = await client.get(
      settings.getUri(sourceId, "/entries", formId),
      {
        auth: settings.getAuth(sourceId),
      }
    );
    // do something?
    return response;
  } catch (error) {
    console.log("getFormEntries", error);
  }
};
const getFormFields = async (sourceId, formId) => {
  try {
    const response = await client.get(
      settings.getUri(sourceId, "/fields", formId),
      {
        auth: settings.getAuth(sourceId),
      }
    );
    // do something?
    return response;
  } catch (error) {
    console.log("getFormEntries", error);
  }
};

const getForms = (sourceId) => {
  try {
    const response = client.get(settings.getUri(sourceId), {
      auth: settings.getAuth(sourceId),
    });
    // do something?
    return response;
  } catch (error) {
    console.log("getFormEntries", error);
  }
};

export default {
  getForms,
  getFormFields,
  getFormEntries,
};
