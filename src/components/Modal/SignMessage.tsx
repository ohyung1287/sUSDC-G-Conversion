import { Button, Input, HStack } from "@chakra-ui/react";
import { FormControl } from "@chakra-ui/react";
import { useAccount, useNetwork, useSignMessage, useSigner } from "wagmi";
import { getContract, getContractPk } from "states/luniverseContracts";
import { GLUWA_ACCOUNT, sUSDCGDecimal, contractName } from "../../constants/general";
import React, { useState, useEffect } from "react";
import { BigNumber, ethers } from "ethers";
import { verifyMessage } from "ethers/lib/utils";
import { PRIMARY_ENDPOINT, DB_SIGN_TRANSFER } from "constants/endpoints";
import { AmountButton } from "components/Button";
import { GEMINI_PRICE_API, BTC_NETWORK_FEE_API } from "constants/endpoints";
import { schedule } from "../../constants/gemini";
import { REACT_APP_LUNIVERSE_RPC_MAINNET } from "../../constants/general";
interface ApproveTxDetail {
  spender: string;
  amount: string;
}

interface Props {
  userBalance: string;
  closeModal: () => void;
}

export function SignMessage(props: Props) {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const { chain } = useNetwork();
  const mySigner = sessionStorage.getItem("mySigner");
  const { data: signer } = useSigner();
  const myAddress = sessionStorage.getItem("myAddress");
  const address = myAddress ? myAddress.replace(/"/g, "") : useAccount().address;
  const [value, setValue] = useState<ApproveTxDetail>({
    spender: GLUWA_ACCOUNT,
    amount: "",
  });
  const [BTCPrice, setBTCPrice] = useState("0");
  const [BTCNetworkFee, setBTCNetworkFee] = useState("0");
  const [fee, setFee] = useState("0");
  useEffect(() => {
    getPriceFromAPIs();
  }, []);
  const recoveredAddress = React.useRef<string>();
  const contract = mySigner ? getContractPk() : getContract(chain, contractName, signer);
  const randomInteger = Math.floor(Math.random() * 1000000000).toString();
  const nonce = BigNumber.from(randomInteger + Math.floor(Date.now() / 1000).toString());
  const message = {
    TokenContract: ``,
    owner: `${address}`,
    spender: `${value.spender}`,
    amount: `${value.amount}`,
    fee: 0,
    nonce: `${nonce}`,
    sig: ``,
  };
  if (contract && contract.contractInstance) {
    message.TokenContract = `${contract.contractInstance.address}`;
  }
  const { signMessage } = useSignMessage({
    onSuccess(data, variables) {
      const address = verifyMessage(variables.message, data);
      recoveredAddress.current = address;
      message.sig = data;
      SendMessageSlack(message, props.closeModal);
    },
  });
  const handleInputAmount = (newValue) => {
    try {
      const userBal = ethers.BigNumber.from(props.userBalance);
      const input = ethers.BigNumber.from(newValue);
      if (input.gt(0)) {
        setSubmitDisabled(userBal.lt(input));
        setValue({
          ...value,
          ["amount"]: newValue,
        });
        calculateFee();
      } else {
        setSubmitDisabled(true);
      }
    } catch (err) {
      setSubmitDisabled(true);
    }
  };
  const handleSubmit = async () => {
    if (!submitDisabled && contract.contractInstance) {
      const hash = ethers.utils.solidityKeccak256(
        ["address", "address", "uint256", "uint256", "uint256", "uint256"],
        [contract.contractInstance.address, address, value.spender, value.amount, 0, nonce]
      );
      if (mySigner) {
        const provider = new ethers.providers.JsonRpcBatchProvider(REACT_APP_LUNIVERSE_RPC_MAINNET);
        const signer = new ethers.Wallet(mySigner, provider);
        signer.signMessage(hash).then((data) => {
          message.sig = data;
          SendMessageSlack(message, props.closeModal);
        });
      } else {
        signMessage({ message: hash });
      }
    }
  };
  const getPriceFromAPIs = ()=> {
    fetch(`${GEMINI_PRICE_API}`, {method: "GET"}).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          const BTCPair = data.find((o=>o.pair === "BTCUSD"));
          setBTCPrice(BTCPair.price);
        });
      }
    });
    fetch(`${BTC_NETWORK_FEE_API}`, {method: "GET"}).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setBTCNetworkFee(data.fastestFee);
        });
      }
    });
  }
  const calculateFee = ()=>{
    const BTCFee = parseFloat(BTCNetworkFee) * parseFloat(BTCPrice) * 0.00000001;
    const takerFee = schedule.find(o=>o.lowerLimit <= parseFloat(value.amount) 
      && (o.upperLimit === -1 || o.upperLimit >= parseFloat(value.amount))).fee; 
    const fee = (parseFloat(value.amount) * takerFee / 10 ** sUSDCGDecimal ) + BTCFee;
    setFee(fee.toFixed(6).toString());
  }
  return (
    <FormControl>
      <div style={{ paddingBottom: '1rem'}}> 
        Current BTC price<br /> {BTCPrice} sUSDC-G to 1 BTC
      </div>
      <div style={{ paddingBottom: '1rem'}}>
        Estimated fee<br /> {fee} sUSDC-G
      </div>
      <div style={{ width: '30px' }}>
        <AmountButton label="full" amount={props.userBalance} onClick={()=>handleInputAmount(props.userBalance)} ></AmountButton>
      </div>
      <Input
        type="number"
        min={0}
        step={1}
        name={`amount`}
        placeholder={`Your amount to convert (with decimals)`}
        onChange={(e) => handleInputAmount(e.target.value)}
        value={value.amount}
      />
      {submitDisabled && (
        <div style={{ color: "red" }}>
          Amount should be less than or equal to your balance and must input an unsigned number
        </div>
      )}
      <HStack justifyContent="center" alignItems="center" paddingTop="1.5rem">
        <Button disabled={submitDisabled} onClick={handleSubmit}>
          Submit
        </Button>
      </HStack>
    </FormControl>
  );
}
function SendMessageSlack(message, closeModal) {
  fetch(`${PRIMARY_ENDPOINT}${DB_SIGN_TRANSFER}`, {
    method: "POST",
    body: JSON.stringify(message),
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  }).then((res) => {
    if (res.ok) {
      closeModal();
    }
  });
}
