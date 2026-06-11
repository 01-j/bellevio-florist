Overview
- Project: bellevio florist — an online flower shop
- Type: Static demo / prototype (personal project)
- Stack: Next.js + React + TypeScript (App Router)
- Currency: IDR (Indonesian Rupiah — Rp)
- Style: Elegant & minimalist — clean whites, soft greens, premium feel
- Responsive: Yes — mobile, tablet, desktop

Flower Catalog
- 10–15 flower types organized into categories (Roses, Lilies, Tulips, etc.)
- You'll provide the real list later; we start with realistic placeholder data
- Each flower has:  id, name, category, price (IDR), imageUrl (Unsplash), description 
- Displayed in a visual grid with real stock photos

Bouquet Builder
- Per-stem pricing: each flower adds its unit price × quantity to the total
- Multiple stems of the same flower allowed
- +/- increment/decrement controls on each flower
- Click to re-select/swap flowers in the bouquet
- Live-updating total price
- Soft limit of 15 stems (gentle suggestion, not hard block)

Cart & Checkout
- Multiple bouquets in the cart (build several, cart them all)
- Grand total across all bouquets
- Simulated full checkout: Cart Review → Shipping Form → Confirmation
- Shipping form: Name, Phone, Address, Delivery Method, Greeting Card Note
- Confirmation: Full receipt with mock order number, summary, delivery details
State & Persistence
- All state saved to localStorage
- Survives refresh and browser restart

Routes
 /  → Home |  /build  → Builder |  /cart  → Cart |  /checkout  → Checkout |  /checkout/confirmation  → Receipt