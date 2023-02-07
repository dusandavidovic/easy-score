import settings from "../config/settings";
import client from "./client";

const getForms = async (sourceId) => {
  try {
    const response = await client.get(settings.getUri(sourceId), {
      auth: settings.getAuth(sourceId),
    });
    if (response.data) return response;
    console.log("getForms - no data returnde by request");
  } catch (error) {
    console.log("getForms", error);
  }
};

const getFormEntries = async (sourceId, formId) => {
  try {
    const response = await client.get(
      settings.getUri(sourceId, "/entries", formId),
      {
        auth: settings.getAuth(sourceId),
      }
    );
    // do something?
    if (response.data) return response;
    console.log("getFormEntries - no data returnde by request");
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
    if (response.data) return response;
    console.log("getFormFields - no data returnde by request");
  } catch (error) {
    console.log("getFormFields", error);
  }
};

export default {
  getForms,
  getFormFields,
  getFormEntries,
};
