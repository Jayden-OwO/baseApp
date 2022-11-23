module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  printWidth: 130,
  tabWidth: 2,
  bracketSpacing: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
};
