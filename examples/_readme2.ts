import fs from 'node:fs/promises'
import { stringToPdf } from '../src'
// eslint-disable-next-line import/newline-after-import
;(async () => {
  const code = 'console.log("Hello World")'

  const pdfDocument = await stringToPdf(code, {
    lang: 'js',
    theme: 'light-plus',
  })

  const pdfBytes = await pdfDocument.save()
  await fs.writeFile('hello-world.pdf', pdfBytes, 'binary')
})()
