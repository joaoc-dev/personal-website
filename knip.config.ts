import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  ignore: [
    'components/ui/**',
    'components/ui-modified/**',
  ],
  ignoreDependencies: [
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/g)].join('\n'),
  },
};

export default config;
