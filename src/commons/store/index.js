import { atom } from "recoil";

export const ManagerState = atom({
  key: "ManagerState",
  default: "",
});

export const IsOpenState = atom({
  key: "IsOpenState",
  default: false,
});
