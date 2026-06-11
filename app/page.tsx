import Link from "next/link";

const categories = [
  { name: "Roses", description: "Classic elegance in every petal", image: "https://images.unsplash.com/photo-1548585745-4c0b4c3a9b2a?w=400&q=80" },
  { name: "Lilies", description: "Graceful and fragrant blooms", image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80" },
  { name: "Tulips", description: "Vibrant springtime favorites", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&q=80" },
  { name: "Sunflowers", description: "Bright and cheerful arrangements", image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&q=80" },
];

const features = [
  { title: "Handcrafted Bouquets", description: "Every arrangement is thoughtfully designed by our skilled florists." },
  { title: "Fresh from the Farm", description: "Sourced directly from the finest growers, delivered at peak bloom." },
  { title: "Same-Day Delivery", description: "Order by 2 PM for delivery across Jakarta on the same day." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header / Navigation */}
      <header className="border-b border-floral-green-pale bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-semibold tracking-wide text-floral-green">
            Bellevio
          </Link>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-gray-600">
            <Link href="/" className="hover:text-floral-green transition-colors">
              Home
            </Link>
            <Link href="/build" className="hover:text-floral-green transition-colors">
              Build a Bouquet
            </Link>
            <Link href="/cart" className="hover:text-floral-green transition-colors">
              Cart
            </Link>
          </nav>
          <Link
            href="/build"
            className="rounded-full bg-floral-green px-5 py-2 text-sm font-medium text-white hover:bg-floral-green-light transition-colors"
          >
            Build a Bouquet
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-floral-green-pale to-floral-cream">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:py-36">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Flowers that
              <span className="block text-floral-green font-medium">speak from the heart</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Create bespoke bouquets for life&apos;s most meaningful moments. Choose from our
              curated selection of premium blooms and design something truly unforgettable.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/build"
                className="rounded-full bg-floral-green px-8 py-3 text-sm font-medium text-white hover:bg-floral-green-light transition-colors shadow-sm"
              >
                Start Building
              </Link>
              <Link
                href="#categories"
                className="rounded-full border border-floral-green/30 px-8 py-3 text-sm font-medium text-floral-green hover:bg-floral-green-pale transition-colors"
              >
                Explore Flowers
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="border-y border-floral-green-pale bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-floral-green-pale">
          {features.map((feature) => (
            <div key={feature.title} className="px-8 py-8 text-center">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-floral-green">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl font-light text-gray-900 sm:text-3xl">
            Our Flower Collections
          </h2>
          <p className="mt-2 text-gray-500">
            Explore our carefully curated categories
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href="/build"
                className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{category.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-floral-green py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            Ready to create something beautiful?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Build your perfect bouquet with our easy-to-use bouquet builder.
          </p>
          <Link
            href="/build"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-sm font-medium text-floral-green hover:bg-floral-cream transition-colors shadow-sm"
          >
            Build Your Bouquet
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-400">
          <p className="font-medium text-white">Bellevio Florist</p>
          <p className="mt-1">Handcrafted floral arrangements for every occasion</p>
          <p className="mt-6">&copy; {new Date().getFullYear()} Bellevio Florist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
