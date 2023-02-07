import { create } from "apisauce";

const apiClient = create({ baseURL: "https://api.github.com" });
//const apiClient = create();

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log(response);
  if (response.ok) {
    return response;
  }
};

export default apiClient;
