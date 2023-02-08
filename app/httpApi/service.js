import settings from "../config/settings";
import client from "./client";

// import apiClient from "./newClient";
// const getForms = (sourceId) => {
//   apiClient.setBaseURL(settings.getUri(sourceId));
//   apiClient.setHeader({ Autharization: settings.getAuth(sourceId) });
//   apiClient.get();
// };

// const getFormEntries = async (sourceId, formId) => {
//   try {
//     const response = await client.get(
//       settings.getUri(sourceId, "/entries", formId),
//       {
//         auth: settings.getAuth(),
//       }
//     );
//     // do something?
//     return response;
//   } catch (error) {
//     console.log("getFormEntries", error);
//   }
// };
// const getFormFields = async (sourceId, formId) => {
//   try {
//     const response = await client.get(
//       settings.getUri(sourceId, "/fields", formId),
//       {
//         auth: settings.getAuth(),
//       }
//     );
//     // do something?
//     return response;
//   } catch (error) {
//     console.log("getFormEntries", error);
//   }
// };

const getForms = async (sourceId) => {
  try {
    const response = await client.get(settings.getUri(sourceId), {
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
  //getFormFields,
  //getFormEntries,
};
