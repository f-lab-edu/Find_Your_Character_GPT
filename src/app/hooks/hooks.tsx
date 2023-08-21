import { useRecoilState, useSetRecoilState } from "recoil";
import { gptResultState, loadingState } from "../atoms/atom";
import { useRouter } from "next/navigation";

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
