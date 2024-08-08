
import { useState } from 'react';

type RequestFunction = () => Promise<Response>;

interface UseDownloadFileProps {
  requestFunction: RequestFunction;
  name?: string;
}

export const useDownloadFile = ({
  requestFunction,
  name = 'data',
}: UseDownloadFileProps) => {
  const [isPending, setIsPending] = useState(false);

  const downloadFile = async () => {
    setIsPending(true);

    try {
      const response = await requestFunction();

      if (!response.ok) {
        throw new Error('Failed to download file.');
      }

      const blob = await response.blob();
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href;
      link.setAttribute('download', `${name}`);
      link.click();

      link.remove();
      URL.revokeObjectURL(href);
    } catch (e) {
      console.error(e);
    } finally {
      setIsPending(false);
    }
  };

  return {
    downloadFile,
    isPending,
  };
};
