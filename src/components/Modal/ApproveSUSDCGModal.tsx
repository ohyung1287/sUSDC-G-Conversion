import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useAccount, useNetwork, useSigner } from "wagmi";
import { getUserBalance, getContract, getUserBalancePk, getContractPk } from "states/luniverseContracts";
import { IModalProps } from "./types";
import { GLUWA_ACCOUNT, sUSDCGDecimal, contractName } from "../../constants/general";
import React, { useState, useEffect } from "react";
import formatTokenAmount from "utils/formatTokenAmount";
import { SignMessage } from "./SignMessage";

const ApproveSUSDCGModal: React.FC<IModalProps> = ({ isOpen, closeModal }) => {
  let myAddress = sessionStorage.getItem("myAddress");
  const { address } = useAccount();
  let balance;
  const [userBalance, setUserBalance] = useState("0");
  const { chain } = useNetwork();
  const { data: signer } = useSigner();
  useEffect(() => {
    if (myAddress) {
      myAddress = myAddress.replace(/"/g, "");
      const contractInstance = getContractPk();
      getUserBalancePk(contractInstance, myAddress, setUserBalance);
    }
  }, [myAddress]);

  if (chain && address) {
    const contractInstance = getContract(chain, contractName, signer);
    balance = getUserBalance(contractInstance, address, setUserBalance);
  }
  let displayBalance = "0";
  if (userBalance !== "0") balance = userBalance;
  if (balance) displayBalance = formatTokenAmount(balance, sUSDCGDecimal);

  const defaultContent = (
    <>
      <ModalHeader>Approve sUSDC-G</ModalHeader>
      <ModalCloseButton _focus={{ boxShadow: "none" }} />
      <ModalBody paddingBottom="1.5rem">Your Address {address}</ModalBody>
      <ModalBody paddingBottom="1.5rem">Gluwa Address {GLUWA_ACCOUNT}</ModalBody>
      <ModalBody paddingBottom="1.5rem">
        Your current balance
        <br /> {displayBalance} sUSDC-G ({balance})
      </ModalBody>
      <ModalBody paddingBottom="1.5rem">
        <SignMessage userBalance={balance} closeModal={closeModal}/>
      </ModalBody>
      <ModalBody paddingBottom="1.5rem" placeholder="">Please be advised that the fee for your conversion is estimated based on the total amount you wish to convert and the prevailing Bitcoin network conditions at the time of the transaction. However, we would like to inform you that the actual fee may vary due to fluctuations in the Bitcoin network conditions. Thank you for your understanding.</ModalBody>
    </>
  );
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent w="600px">{defaultContent}</ModalContent>
    </Modal>
  );
};

export default ApproveSUSDCGModal;
