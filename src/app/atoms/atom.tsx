import { atom } from "recoil";

interface GPTResult {
  prefix: string;
  name: string;
  description: string;
  suitable: string;
  unsuitable: string;
}

type StageResult = {
  [key: string]: number;
};

export const stageResultState = atom<StageResult>({
  key: "stageResult",
  default: {},
});

export const gptResultState = atom<GPTResult>({
  key: "gptResult",
  default: {
    prefix: "",
    name: "",
    description: "",
    suitable: "",
    unsuitable: "",
  },
});

export const stageNumberState = atom<number>({
  key: "stageNumber",
  default: 1,
});

export const loadingState = atom<boolean>({
  key: "loadingOpen",
  default: false,
});
