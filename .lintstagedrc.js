import path from 'path';

const buildEslintCommand = (filenames) =>
  `eslint --fix ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`;

const formatCommand = 'prettier --write';

export default {
  '*.{js,jsx,ts,tsx}': [formatCommand, buildEslintCommand],
  '*.{json,css,md}': [formatCommand],
};
