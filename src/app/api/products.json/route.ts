import { commerce, commerceEnabled } from '@/lib/commerce'

export const dynamic = 'force-static'

/** commerce.provider='none' 時回空陣列 —— 這是還沒有產品的正確行為，不是錯誤。 */
export async function GET() {
  const products = await commerce.getProducts()
  return Response.json({ enabled: commerceEnabled, count: products.length, products })
}
