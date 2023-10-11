import { useEffect, useState } from "react";

export const useAppError = () => {
  const [appError, setAppError] = useState<string | undefined>();


  useEffect(() => {
    let appErrTimeout: NodeJS.Timeout;
    if (appError) {
      appErrTimeout = setTimeout(() => {
        setAppError(undefined);
      }, 5000);
    }
    return () => {
      clearTimeout(appErrTimeout);
    };
  }, [appError]);

  return { appError, setAppError };
};
