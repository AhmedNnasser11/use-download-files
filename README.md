
# My Custom Hooks Package

This package provides custom hooks for downloading files and exporting images.

## Installation

To install the package, run:

```bash
npm install my-custom-hooks
```

## Usage

### useDownloadFile Hook

This hook allows you to download a file from a given URL.

#### Example

```typescript
import React from 'react';
import { useDownloadFile } from 'my-custom-hooks';

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
import { useExportImage } from 'my-custom-hooks';

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
