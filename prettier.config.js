/** @type {import("prettier").Config} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],

  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  printWidth: 100,

  overrides: [
    {
      files: '*.html',
      options: {
        parser: 'html',
      },
    },
    {
      files: ['*.css'],
      options: {
        parser: 'css',
      },
    },
    {
      files: ['*.js', '*.ts', '*.jsx', '*.tsx'],
      options: {
        parser: 'babel',
      },
    },
  ],
}
