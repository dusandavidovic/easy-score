import axios, { CanceledError } from "axios";

// const config = {
//   baseULR: "",
//   apiKey: "",
// };

// export default axios.create({
//   baseURL: config.baseULR,
//   params: {
//     key: config.apiKey,
//   },
// });
export default axios.create();
export { CanceledError };
