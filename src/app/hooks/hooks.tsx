import { useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { stageNumberState } from "../atoms/atom";

export function useStageNumberMemo(stageResult: {}, clickHandlerGPT: any): void {
  const [stageNumber, setStageNumber] = useRecoilState<number>(stageNumberState);
  const stageNumberMemo = useMemo(
    () =>
      Object.values(stageResult).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 1),
    [stageResult]
  );

  useEffect(() => {
    setStageNumber(stageNumberMemo);
    if (stageNumber > 10) {
      clickHandlerGPT();
    }
  }, [stageNumberMemo, stageNumber]);
}
