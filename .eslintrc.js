module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true
  },
  extends: [
    'eslint:recommended',
    'standard'
  ],
  rules: {
    'no-unused-vars': 'warn',
    semi: [ 'warn', 'always' ],
    'space-before-function-paren': 'off'
  },
  overrides: [
    {
      files: [
        "*.ts",
        "*.tsx",
        "*.vue"
      ],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:vue/essential',
        '@vue/standard',
        '@vue/typescript/recommended'
      ],
      parser: 'vue-eslint-parser',
      parserOptions: {
        extraFileExtensions: [
          '.vue'
        ],
        parser: '@typescript-eslint/parser',
        project: [
          './tsconfig.json'
        ],
        sourceType: 'module',
        ecmaVersion: 2020
      },
      plugins: [
        '@typescript-eslint',
        'vue'
      ],
      rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'space-before-function-paren': 'off',
        semi: 'off',
        '@typescript-eslint/semi': [ 'warn', 'always' ],
        '@typescript-eslint/explicit-module-boundary-types': 'off'
      }
    }
  ]
}
