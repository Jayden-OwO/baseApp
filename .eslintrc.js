module.exports = {
  parser: '@typescript-eslint/parser', // 指定ESLint解析器
  extends: [
    'plugin:react/recommended', //  从@eslint-plugin-react推荐规则
    'prettier',
    'plugin:prettier/recommended', // 启用eslint-plugin-prettier，并将prettier错误显示为ESLint错误。确保这一项始终在数组的最后一项。
  ],
  plugins: ['react', 'react-hooks'], // 启用的插件
  parserOptions: {
    ecmaVersion: 2018, // 允许解析现代ECMAScript特性
    sourceType: 'module', // 允许使用 imports 导入
    ecmaFeatures: {
      jsx: true, // 语序解析JSX
    },
  },
  rules: {
    // 指定ESLint规则的位置。可以用来覆盖从扩展的配置中指定的规则。
    indent: 'off',
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'no-return-assign': 0,
    semi: ['error', 'always'],
    'no-confusing-arrow': 0,
    'no-console': 0,
    'max-len': ['error', { code: 130, ignoreComments: true, ignoreStrings: true }],
    'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'default-case': 'off',
    'no-case-declarations': 'off',
    'no-param-reassign': 'off',
    'no-useless-escape': 'off',
    'no-lonely-if': 'off',
    'no-undef': 'off',
    'jsx-a11y/accessible-emoji': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-boolean-value': ['error'],
    'react/jsx-closing-bracket-location': [2],
    'react/jsx-one-expression-per-line': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent': 0,
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/jsx-filename-extension': 0,
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/destructuring-assignment': 0,
    'react/require-default-props': 0,
    'react/sort-comp': 0,
    'react/display-name': 0,
    'react/static-property-placement': 0,
    'react/jsx-no-bind': 0,
    'react/no-find-dom-node': 0,
    'react/no-unused-prop-types': 0,
    'react/default-props-match-prop-types': 0,
    'react/function-component-definition': 0,
    'react/no-unused-class-component-methods': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'react/no-access-state-in-setstate': 0,
    'react/no-multi-comp': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'react/jsx-no-constructed-context-values': 0,
    'react/no-unstable-nested-components': 0,
    'react-hooks/rules-of-hooks': 2, // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 2, // 检查 effect 的依赖
    'sort-imports': [
      0,
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: true,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'import/order': [
      0,
      {
        group: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'unknown'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'before',
          },
          {
            pattern: 'iscommon/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        warnOnUnassignedImports: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
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
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // 告诉eslint-plugin-react自动检测要使用的React版本
    },
  },
  globals: {
    document: true,
    navigator: true,
    window: true,
    node: true,
  },
};
