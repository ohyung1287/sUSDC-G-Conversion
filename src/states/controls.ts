import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface ControlsState {
  activeView: string;
  activeModal: string;
  tabIndex: number;
  provider: string;
  isDevModeActive: boolean;
  isUsingStaging: boolean;
  setActiveView: (activeView: string) => void;
  setActiveModal: (activeModal: string) => void;
  setTabIndex: (tabIndex: number) => void;
  setProvider: (provider: string) => void;
  setIsDevModeActive: (isDevModeActive: boolean) => void;
  setIsUsingStaging: (isUsingStaging: boolean) => void;
}

const useControls = create<ControlsState>()(
  persist(
    (set) => ({
      activeView: "",
      activeModal: "",
      tabIndex: 0,
      provider: "injected",
      isDevModeActive: process.env.REACT_APP_DEV_MODE != null && process.env.REACT_APP_DEV_MODE === "ON" ? true : false,
      isUsingStaging: false,
      setActiveView: (activeView: string) => set(() => ({ activeView })),
      setActiveModal: (activeModal: string) => set(() => ({ activeModal })),
      setTabIndex: (tabIndex: number) => set(() => ({ tabIndex })),
      setProvider: (provider: string) => set(() => ({ provider })),
      setIsDevModeActive: (isDevModeActive: boolean) => set(() => ({ isDevModeActive })),
      setIsUsingStaging: (isUsingStaging: boolean) => set(() => ({ isUsingStaging })),
    }),
    {
      name: "controls-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useControls;
