import antfu from '@antfu/eslint-config';

export default antfu({
  react: true,
  nextjs: true,
  typescript: true,

  stylistic: {
    quotes: 'single',
    semi: true,
    indent: 2,
  },

  formatters: {
    css: true,
  },

  ignores: [
    'components/ui/**',
    'components/ui-modified/**',
  ],
}, {
  rules: {
    'node/prefer-global/process': 'off', // Allow using `process.env`
  },
});
