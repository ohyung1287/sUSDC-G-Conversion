import { PRIMARY_ENDPOINT, SLACK_APP_ENDPOINT } from "../../constants/endpoints";

const sendSlackTxConfirmation = (data) => {
  return fetch(`${PRIMARY_ENDPOINT}${SLACK_APP_ENDPOINT}`, {
    body: JSON.stringify(data),
    method: "POST",
  }).then((response) => {
    return response.json();
  });
};

export { sendSlackTxConfirmation };
