import { productCategories } from "../products-data";
import StaticPageHero from "@/app/components/StaticPageHero";
import ProductCategorySection from "@/app/components/Products/ProductCategorySection";

export const metadata = {
  title: "Products | Fun Fine",
  description:
    "Explore Fun Fine's complete range of chips, namkeen, and snacks — premium quality, great taste, made for every occasion.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
      <StaticPageHero
        title="OUR PRODUCTS"
        breadcrumbLabel="Products"
        image="/namkeen.jpg"
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5">
          {productCategories.map((cat) => (
            <ProductCategorySection
              key={cat.category}
              category={cat.category}
              products={cat.products}
            />
          ))}
        </div>
      </section>
    </>
  );
}