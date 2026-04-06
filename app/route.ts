import { readFileSync } from 'fs'
import { join } from 'path'

export async function GET() {
  const htmlPath = join(process.cwd(), 'public', 'index.html')
  const htmlContent = readFileSync(htmlPath, 'utf-8')
  
  return new Response(htmlContent, {
    headers: {
      'Content-Type': 'text/html',
    },
  })
}
