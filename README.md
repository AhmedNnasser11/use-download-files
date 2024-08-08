
# use-download-files

This package provides two custom hooks for downloading files and exporting images for Reactjs and Nextjs apps.

[LinkedIn Profile](https://www.linkedin.com/in/ahmed-nasser-931490212/) | [CodeSandbox Example](https://codesandbox.io/p/sandbox/export-files-32ckc5?file=%2Fsrc%2FApp.tsx%3A18%2C39)

## Installation

To install the package, run:

```bash
npm install use-download-files
```

## Usage

### useDownloadFile Hook

The `useDownloadFile` hook allows you to download a file from a given URL.

#### Parameters

- `requestFunction`: A function that returns a Promise resolving to the file data.
- `name`: The name of the file to be downloaded.

#### Returns

- `downloadFile`: A function to initiate the file download.
- `isPending`: A boolean indicating if the download is in progress.

#### Example

```typescript
import React from 'react';
import { useDownloadFile } from 'use-download-files';

const MyComponent = () => {
  const requestFunction = () => fetch('https://example.com/file');

  const { downloadFile, isPending } = useDownloadFile({ requestFunction, name: 'example-file' });

  return (
    <div>
      <button onClick={downloadFile} disabled={isPending}>
        {isPending ? 'Downloading...' : 'Download File'}
      </button>
    </div>
  );
};

export default MyComponent;
```

### useExportImage Hook

The `useExportImage` hook allows you to export an image from a given URL.

#### Returns

- `elementRef`: A ref to be attached to the element to be exported.
- `exportElement`: A function to initiate the export.

#### Example

```typescript
import React from 'react';
import { useExportImage } from 'use-download-files';

const MyImageComponent = () => {
  const { elementRef, exportElement } = useExportImage();

  return (
    <div ref={elementRef}>
      <button onClick={exportElement}>Export Image</button>
      <h1>Hello</h1>
      <h3>Export this element</h3>
    </div>
  );
};

export default MyImageComponent;
```

For a live example, check out this [CodeSandbox Example](https://codesandbox.io/p/sandbox/export-files-32ckc5?file=%2Fsrc%2FApp.tsx%3A18%2C39).
