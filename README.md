# Mapalizer

An npm module to map and normalize a value in a given range

[![NPM](https://img.shields.io/npm/v/mapalizer.svg)](https://www.npmjs.com/package/mapalizer) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installation

```bash
npm install mapalizer
```

## Usage

Provide the 5 required arguments in the function call and the normalized value will be returned

```tsx
import useMapalizer from "mapalizer";

const result = useMapalizer(value: number,initalBaseVal: number,finalBaseVal: number,initalTargetVal: number, finalTargetVal: number);
```

## Example

```jsx
import useMapalizer from "mapalizer";

const result = useMapalizer(10, 1, 100, 20, 30);
```
