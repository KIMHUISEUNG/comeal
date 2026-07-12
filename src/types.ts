import { type Database } from "@/database.types";

export type UseMutationCallback = {
  onSuccess?: () => void; //요청 성공시
  onError?: (error: Error) => void; //요청 에러발생시
  onMutate?: () => void; //요청 시작시
  onSettled?: () => void; //요청 종료시
};
