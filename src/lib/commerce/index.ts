import brand from '../../../brand.config'
import type { CommerceAdapter } from './types'
import { noneAdapter } from './adapters/none'

// Phase 2：commerce.provider 改成 'shopify' 並在這裡加上 shopifyAdapter
const adapters: Record<string, CommerceAdapter> = { none: noneAdapter }

export const commerce: CommerceAdapter = adapters[brand.commerce.provider] ?? noneAdapter
export const commerceEnabled = brand.commerce.provider !== 'none'
export type { Product, CartLine, CommerceAdapter } from './types'
