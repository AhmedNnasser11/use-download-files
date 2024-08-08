import { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

export const useExportImage = () => {
  const elementRef = useRef<HTMLDivElement | null>(null);

  const exportElement = useCallback(async (filename: string = 'element.png') => {
    if (elementRef.current) {
      const dataUrl = await toPng(elementRef.current);
      const link = document.createElement('a');
      link.href = dataUrl;
      link.download = filename;
      link.click();
    }
  }, []);

  return { exportElement, elementRef };
};