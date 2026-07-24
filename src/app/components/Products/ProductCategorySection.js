"use client";

import ProductCard from "./ProductCard";

export default function ProductCategorySection({ category, products }) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#08122F] mb-8">
        {category}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}