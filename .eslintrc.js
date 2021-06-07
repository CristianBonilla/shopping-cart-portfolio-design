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
    semi: [
      'warn',
      'always'
    ],
    'space-before-function-paren': 'off',
    indent: [
      'warn',
      2
    ],
    'array-bracket-spacing': [ 'warn', 'always' ],
    'no-extra-boolean-cast': 'off',
    'no-unused-expressions': 'error',
    'template-curly-spacing': [
      'error',
      'always'
    ],
    'no-return-assign': 'off'
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
        '@typescript-eslint/semi': [
          'warn',
          'always'
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'indent': 'off',
        '@typescript-eslint/indent': [
          'warn',
          2
        ],
        'array-bracket-spacing': [ 'warn', 'always' ],
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_'
          }
        ],
        'no-extra-boolean-cast': 'off',
        'no-unused-expressions': 'error',
        // '@typescript-eslint/no-unused-expressions': [ 'warn' ],
        'template-curly-spacing': [
          'error',
          'always'
        ],
        'no-return-assign': 'off',
        '@typescript-eslint/no-explicit-any': 'off'
      }
    }
  ]
}
