import { compilePdfs } from '../src'
// eslint-disable-next-line import/newline-after-import
;(async () => {
  await compilePdfs({
    rootDir: 'src',
    include: ['src/**/*.ts'],
    theme: 'light-plus',
  })
})()
