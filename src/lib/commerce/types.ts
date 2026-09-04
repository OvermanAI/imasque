export type Money = { amount: string; currencyCode: string }

export type Product = {
  handle: string
  title: string
  description: string
  price: Money
  images: { url: string; alt: string }[]
  available: boolean
}

export type CartLine = { merchandiseId: string; quantity: number }

/** 唯一的商務介面。Phase 2 接 Shopify、未來換 AgentDTC 都實作這個。 */
export interface CommerceAdapter {
  getProducts(): Promise<Product[]>
  getProduct(handle: string): Promise<Product | null>
  createCart(lines: CartLine[]): Promise<{ checkoutUrl: string }>
}
