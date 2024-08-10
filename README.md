
# use-export-files-hooks

**use-export-files-hooks** is a versatile npm package that provides two powerful custom hooks—`useDownloadFile` and `useExportImage`—for seamless file downloading and image exporting in React.js and Next.js applications. This package is designed to simplify and streamline the process of exporting files and images directly from your web applications.

## Live Demo

For a hands-on demonstration, check out this [CodeSandbox Example](https://codesandbox.io/p/sandbox/export-files-32ckc5?file=%2Fsrc%2FApp.tsx%3A18%2C39).

## Key Features

- **Simple Integration**: Easily integrate file downloading and image exporting functionalities into your React or Next.js projects.
- **Customizable**: Hooks are designed to be flexible and can be adapted to various use cases.
- **Asynchronous Operations**: Manage file downloads and image exports asynchronously with progress indicators.

## Installation

To add **use-export-files-hooks** to your project, use npm:

```bash
npm install use-export-files-hooks
```

## Usage

### 1. useDownloadFile Hook

The `useDownloadFile` hook simplifies the process of downloading files from a URL directly within your React components.

#### Parameters

- `requestFunction`: A function returning a Promise that resolves to the file data.
- `name`: The desired name for the downloaded file.

#### Returns

- `downloadFile`: A function that triggers the file download.
- `isPending`: A boolean indicating the download's progress status.

#### Example Usage

```typescript
import React from 'react';
import { useDownloadFile } from 'use-export-files-hooks';

const MyComponent = () => {
  const requestFunction = () => fetch('https://jsonplaceholder.typicode.com/users');
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

### 2. useExportImage Hook

The `useExportImage` hook allows you to export images of specific elements within your React components. Attach a ref to the element you wish to export and trigger the export function.

#### Returns

- `elementRef`: A ref to be attached to the element intended for export.
- `exportElement`: A function that initiates the image export.

#### Example Usage

```typescript
import React from 'react';
import { useExportImage } from 'use-export-files-hooks';

const MyImageComponent = () => {
  const { elementRef, exportElement } = useExportImage();

  return (
    <div ref={elementRef}>
      <button onClick={() => exportElement("myImgName")}>Export Image</button>
      <h1>Hello</h1>
      <h3>Export this element</h3>
    </div>
  );
};

export default MyImageComponent;
```

## Why Choose use-export-files-hooks?

- **Efficiency**: Reduce development time by using pre-built hooks for common file operations.
- **Flexibility**: Customize the hooks to fit your application's needs.
- **Community-Driven**: Regular updates and community support to keep the package reliable and up-to-date.

## Author

Developed by [Ahmed Nasser](https://www.linkedin.com/in/ahmed-nasser-931490212/). Feel free to connect on LinkedIn for more information or collaboration.
