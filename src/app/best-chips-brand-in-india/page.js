import { staticPages } from "../pages-data";
import { notFound } from "next/navigation";
import BlogContent from "@/app/components/Blog/BlogContent";
import StaticPageHero from "@/app/components/StaticPageHero";

const pageData = staticPages.find(
  (item) => item.slug === "best-chips-brand-in-india"
);

export const metadata = {
  title: pageData.seoTitle,
  description: pageData.seoDescription,
  keywords: pageData.keywords,
  alternates: {
    canonical: `/${pageData.slug}`,
  },
  openGraph: {
    title: pageData.seoTitle,
    description: pageData.seoDescription,
    url: `/${pageData.slug}`,
    images: [pageData.image],
  },
};

export default function BestChipsBrandIndia() {
  if (!pageData) notFound();

  return (
    <>
      <StaticPageHero
        title={pageData.title}
        breadcrumbLabel={pageData.breadcrumbLabel}
        image={pageData.image}
      />

      <section className="py-8">
        <div className="max-w-5xl mx-auto px-5">
          <BlogContent content={pageData.content} />
        </div>
      </section>
    </>
  );
}