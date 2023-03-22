export const PRIMARY_AZURE_ENDPOINT = "https://sc-dapp-api-test-function.azurewebsites.net/api/";
export const PRIMARY_LOCALHOST_ENDPOINT = "http://localhost:7071/api/";
export const GEMINI_PRICE_API = "https://api.gemini.com/v1/pricefeed";
export const BTC_NETWORK_FEE_API = "https://bitcoinfees.earn.com/api/v1/fees/recommended";
export const DB_SIGN_TRANSFER =
  "slack-sign-susdcg-transfer/?code=" + process.env.REACT_APP_AZURE_HOST_KEY + "&clientId=default";

export const PRIMARY_ENDPOINT =
  process.env.REACT_APP_ENDPOINT_TYPE != null &&
  process.env.REACT_APP_ENDPOINT_TYPE != "" &&
  process.env.REACT_APP_ENDPOINT_TYPE === "LOCALHOST"
    ? PRIMARY_LOCALHOST_ENDPOINT
    : PRIMARY_AZURE_ENDPOINT;
export const SLACK_APP_ENDPOINT = "slack";
