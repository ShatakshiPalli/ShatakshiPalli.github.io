module.exports = {
  extends: ['next/core-web-vitals'],
  rules: {
    // You can disable specific rules if needed
    '@typescript-eslint/no-unused-vars': 'warn', // Changes error to warning
    'react/no-unescaped-entities': 'warn', // Changes error to warning
  },
}