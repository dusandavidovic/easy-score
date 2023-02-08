import { create } from "apisauce";

const apiClient = create({ baseULR: "aaa" });

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);
  console.log(response);
  if (response.ok) {
    return response;
  }
};

export default apiClient;
