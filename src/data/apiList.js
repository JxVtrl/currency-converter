export const apiList = [
  {
    id: 0,
    name: "Coin API",
    url: "https://rest.coinapi.io",
    subpath: [
      {
        id: 0,
        name: "Get all symbols",
        path: "/v1/symbols",
      },
      {
        id: 1,
        name: "Get all exchanges",
        path: "/v1/exchanges",
      },
    ],
  },
  {
    id: 1,
    name: "Crypto API",
    url: "https://api.coincap.io",
    subpath: [
      {
        id: 0,
        name: "Get all assets",
        path: "/v2/assets",
      },
    ],
  },
];
