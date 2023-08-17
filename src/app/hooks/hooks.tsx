import { useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { gptResultState, loadingState, stageNumberState, stageResultState } from "../atoms/atom";
import { useRouter } from "next/navigation";

type StageResult = {
  [key: string]: number;
};

export default function useStageNumber() {
  const [stageNumber, setStageNumber] = useRecoilState<number>(stageNumberState);
  const stageResult = useRecoilValue<StageResult>(stageResultState);
  const stateResultTotalSum = useMemo(
    () =>
      Object.values(stageResult).reduce((acc, cur) => {
        return acc + cur;
      }, 1),
    [stageResult]
  );

  return { stateResultTotalSum };
}

export function useGPTHandler() {
  const router = useRouter();
  const [loadingOpen, setLoadingOpen] = useRecoilState<boolean>(loadingState);
  const setGptResult = useSetRecoilState(gptResultState);

  async function gptRequestHandler(stageResult: {}) {
    try {
      setLoadingOpen(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ value: stageResult }),
      });

      let data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      if (typeof data === "string") {
        data = JSON.parse(data);
      }
      setGptResult(data);
      if (response.status === 200) {
        router.push("/result");
        setLoadingOpen(false);
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
    }
  }

  return { gptRequestHandler, loadingOpen };
}
