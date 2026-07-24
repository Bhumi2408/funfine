"use client";

import BlogCard from "./BlogCard";

export default function BlogGrid({ blogs = [] }) {
  if (!blogs.length) {
    return (
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-5 text-center">
          <h2 className="text-3xl font-heading font-bold text-[#08122F]">
            No Blogs Found
          </h2>

          <p className="mt-4 text-gray-600">
            We haven't published any blogs yet. Please check back later.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}

        <div className="text-center mb-14">
          <span className="text-[#FF6A54] font-semibold uppercase tracking-[3px]">
            Latest Blogs
          </span>

          <h2 className="mt-3 text-4xl lg:text-5xl font-heading font-bold text-[#08122F]">
            Latest News & Articles
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-8">
            Stay updated with the latest articles, snack trends, industry
            insights and delicious ideas from Fun Fine.
          </p>
        </div>

        {/* Grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}