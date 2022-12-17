# prettier-config-core

Custom Prettier settings as an extensible shared config.

## Installation

If using npm version 5+:

```bash
npx install-peerdeps --dev @meteozdemir/prettier-config-core
```

If using npm version version < 5:

```bash
npm install -g install-peerdeps
install-peerdeps --dev @meteozdemir/prettier-config-core
```

If want to install manually without install-peerdeps CLI:

```bash
npm i -D @meteozdemir/prettier-config-core prettier
```

## Usage

A `.prettierrc.cjs` file will be automatically created in the root of your project with:

```javascript
module.exports = {
    ...require('@meteozdemir/prettier-config-core'),
};
```

If the file is not created automatically by any reason, simply create a `.prettierrc.cjs` file in the root of project and copy code above.

## Rule Override

Add any rule you want to override to `.prettierrc.cjs` file.

```javascript
module.exports = {
    ...require('@meteozdemir/prettier-config-core'),
    // ...
    singleQuote: false,
    bracketSpacing: false,
};
```
