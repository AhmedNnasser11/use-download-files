
import { useState } from 'react';

type ExportImageFunction = () => Promise<Response>;

interface UseExportImageProps {
  exportFunction: ExportImageFunction;
  name?: string;
}

export const useExportImage = ({
  exportFunction,
  name = 'image',
}: UseExportImageProps) => {
  const [isPending, setIsPending] = useState(false);

  const exportImage = async () => {
    setIsPending(true);

    try {
      const response = await exportFunction();

      if (!response.ok) {
        throw new Error('Failed to export image.');
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
    exportImage,
    isPending,
  };
};
