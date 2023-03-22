import React, { lazy } from "react";

const SelectWalletModal = lazy(() => import("./SelectWalletModal"));
const ApproveSUSDCGModal = lazy(() => import("./ApproveSUSDCGModal"));
import useControls from "states/controls";

const ModalProvider: React.FC = () => {
  const activeModal = useControls((state) => state.activeModal);
  const setActiveModal = useControls((state) => state.setActiveModal);

  return (
    <>
      <SelectWalletModal isOpen={activeModal === "walletSelector"} closeModal={() => setActiveModal("")} />
      <ApproveSUSDCGModal isOpen={activeModal === "approveSUSDCG"} closeModal={() => setActiveModal("")} />
    </>
  );
};

export default ModalProvider;
