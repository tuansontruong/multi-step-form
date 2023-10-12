import { useState } from "react";

export function usePostData() {
  const [isProccessing, setIsProccessing] = useState(false);
  const postData = () => {
    setIsProccessing(true);
    const fetchApi = new Promise((resolve) => {
      setTimeout(() => resolve("done"), 2000);
    });

    fetchApi
      .then(() => {
        console.log("post succeed");
        window.location.hash = "#Success";
      })
      .finally(() => {
        setIsProccessing(false);
      });
  };

  return {
    isProccessing,
    postData,
  };
}
