import settings from "../config/settings";
import client from "./client";

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

// import apiClient from "./newClient";
// const getForms = (sourceId) => {
//   const uri = settings.getUri(sourceId);
//   const auth = settings.getAuthEncoded(sourceId);
//   console.log(uri);
//   console.log(auth);
//   //apiClient.setHeaders({ auth: settings.getAuth(sourceId) });
//   apiClient.setBaseURL(uri);
//   apiClient.setHeader({ Authorization: auth });
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

export default {
  getForms,
  //getFormFields,
  //getFormEntries,
};
