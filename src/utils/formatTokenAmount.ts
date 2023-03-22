import { utils, BigNumber } from "ethers";

const formatTokenAmount = (amount: string | number | BigNumber, decimals: string | number) => {
  let result = utils.formatUnits(amount, decimals).split(".")[0].toString();
  if (utils.formatUnits(amount, decimals).split(".")[1] && utils.formatUnits(amount, decimals).split(".")[1].length > 4)
    result = result + "." + utils.formatUnits(amount, decimals).split(".")[1].slice(0, 4);
  return result;
};

export default formatTokenAmount;
