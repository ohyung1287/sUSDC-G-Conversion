import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

import WalletSelector from "components/Web3Provider/WalletSelector";
import { IModalProps } from "./types";

const SelectWalletModal: React.FC<IModalProps> = ({ isOpen, closeModal }) => {
  return (
    <Modal isOpen={isOpen} onClose={closeModal} isCentered>
      <ModalOverlay />
      <ModalContent w="300px">
        <ModalHeader>Select Wallet</ModalHeader>
        <ModalCloseButton
          _focus={{
            boxShadow: "none",
          }}
        />
        <ModalBody paddingBottom="1.5rem">
          <WalletSelector closeModal={closeModal} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectWalletModal;
