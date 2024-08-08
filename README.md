
# use-download-files

This package provides Tow custom hooks for downloading files and exporting images For Reactjs and Nextjs App.

## Installation

To install the package, run:

```bash
npm install use-download-files
```

## Usage

### useDownloadFile Hook

This hook allows you to download a file from a given URL.

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

This hook allows you to export an image from a given URL.

#### Example

```typescript
import React from 'react';
import { useExportImage } from 'use-download-files';

const MyImageComponent = () => {
  const exportFunction = () => fetch('https://example.com/image');

  const { exportImage, isPending } = useExportImage({ exportFunction, name: 'example-image' });

  return (
    <div>
      <button onClick={exportImage} disabled={isPending}>
        {isPending ? 'Exporting...' : 'Export Image'}
      </button>
    </div>
  );
};

export default MyImageComponent;
```
