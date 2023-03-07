import { apiList } from "../data/apiList";

export const getCryptoApi = async () => {
  const cryptoAPI = apiList[1];
  const subPath = cryptoAPI.subpath[0];

  const response = await fetch(`${cryptoAPI.url}${subPath.path}?limit=20`);
  const data = await response.json();

  return data;
};
