"use client";

export default function ProductCard({ product }) {
  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F2E8D8]">
      <div className="bg-[#FBE8CC] p-6 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-w-[180px] h-auto object-contain group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-heading font-bold text-[#08122F] leading-snug">
          {product.name}
        </h3>

        {product.description && (
          <p className="mt-2 text-sm text-gray-600 leading-6 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[#FF6A54] font-bold text-xl">
            ₹{product.price}
            <span className="text-sm text-gray-500 font-normal">/-</span>
          </span>
        </div>
      </div>
    </div>
  );
}