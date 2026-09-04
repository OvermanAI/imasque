import type { CommerceAdapter } from '../types'

/** v1 預設。還沒有產品時的正確行為：空集合，而不是報錯。 */
export const noneAdapter: CommerceAdapter = {
  async getProducts() { return [] },
  async getProduct() { return null },
  async createCart() { throw new Error('commerce.provider is "none" — 還沒接 Shopify') },
}
