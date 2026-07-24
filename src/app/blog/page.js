import BlogGrid from "../components/Blog/BlogGrid";
import PageHero from "../components/PageHero";
import StaticPageHero from "../components/StaticPageHero";
import { blogs } from "./data";
import { getSortedBlogs } from "./utils";


export const metadata = {
  title: "BLOG - Fun Fine",

  description:
    "Read the latest blogs, snack industry insights, food trends and updates from Fun Fine.",

  keywords: [
    "Fun Fine Blog",
    "Snack Blog",
    "Namkeen Blog",
    "Potato Chips",
    "Indian Snacks",
    "Food Articles",
  ],

  alternates: {
    canonical: "/blog",
  },

  openGraph: {
    title: "Fun Fine Blog",

    description:
      "Read the latest snack articles and industry insights from Fun Fine.",

    url: "/blog",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Fun Fine Blog",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fun Fine Blog",
    description:
      "Latest snack articles, food trends and company updates.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogPage() {
  const sortedBlogs = getSortedBlogs(blogs);
  return (
    <>
      <StaticPageHero
        title="BLOG"
        breadcrumbLabel = "BLOG"
        image="/namkeen.jpg"
      />

      <BlogGrid blogs={sortedBlogs} />
    </>
  );
}