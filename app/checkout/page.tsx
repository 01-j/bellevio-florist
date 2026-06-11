import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout",
};

export default function CheckoutPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-floral-green-pale bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-wide text-floral-green">
            Bellevio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-16">
        <h1 className="text-3xl font-light text-gray-900">Checkout</h1>
        <p className="mt-2 text-gray-500">
          Complete your order with shipping details. This feature is coming soon.
        </p>
        <div className="mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-floral-green hover:text-floral-green-light transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>
    </div>
  );
}
