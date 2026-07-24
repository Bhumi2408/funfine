
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../blog/data";
import { CalendarDays, User } from "lucide-react";
import BlogCard from "@/app/components/Blog/BlogCard";
import BlogContent from "@/app/components/Blog/BlogContent";
import BlogDetailsHero from "@/app/components/Blog/BlogDetailsHero";
import { getSortedBlogs } from "../blog/utils";
import FaqSchema from "@/app/components/FaqSchema";

export async function generateMetadata({ params }) {
    const { slug } = await params;

    const blog = blogs.find((item) => item.slug === slug);

    if (!blog) {
        return {
            title: "Blog Not Found | Fun Fine",
        };
    }

    return {
        title: blog.seoTitle,
        description: blog.seoDescription,

        keywords: blog.keywords,

        alternates: {
            canonical: `/${blog.slug}`,
        },

        openGraph: {
            title: blog.seoTitle,
            description: blog.seoDescription,
            url: `/${blog.slug}`,
            images: [blog.image],
        },

        twitter: {
            card: "summary_large_image",
            title: blog.seoTitle,
            description: blog.seoDescription,
            images: [blog.image],
        },
    };
}



export default async function BlogDetails({ params }) {
    const { slug } = await params;

    const blog = blogs.find((item) => item.slug === slug);



    if (!blog) {
        notFound();
    }

    const relatedBlogs = getSortedBlogs(
        blogs.filter((item) => item.id !== blog.id)
    ).slice(0, 3);

    return (
        <>
            <FaqSchema faqs={blog.faqSchema} />
            <BlogDetailsHero blog={blog} />

            <section className="py-8">
                <div className="max-w-5xl mx-auto px-5">


                    {/* Meta */}

                    <div className="flex flex-wrap items-center gap-6 mt-8 text-gray-500">

                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} />
                            {blog.date}
                        </div>

                        <div className="flex items-center gap-2">
                            <User size={18} />
                            {blog.author}
                        </div>

                        <span className="bg-[#FF6A54] text-white px-4 py-1 rounded-full text-sm">
                            {blog.category}
                        </span>

                    </div>


                    {/* Content */}

                    <div className="mt-10">
                        <BlogContent content={blog.content} />
                    </div>

                </div>
            </section>

            {/* Related Blogs */}

            <section className="pb-8">
                <div className="max-w-7xl mx-auto px-5">

                    <div className="flex items-center justify-between mb-10">

                        <h2 className="text-4xl font-heading font-bold text-[#08122F]">
                            Related Blogs
                        </h2>

                        <Link
                            href="/blog"
                            className="text-[#FF6A54] font-semibold hover:underline"
                        >
                            View All
                        </Link>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {relatedBlogs.map((item) => (
                            <BlogCard
                                key={item.id}
                                blog={item}
                            />
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}