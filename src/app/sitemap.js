import { blogs } from "./blog/data";
import { staticPages } from "./pages-data";

const BASE_URL = "https://www.funfinenamkeenandchips.com";

// Returns the most recent "alternate day" boundary (updates every 2 days)
function getAlternateDayDate() {
  const now = new Date();
  const epochDay = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
  const alternateDayStart = epochDay - (epochDay % 2);
  return new Date(alternateDayStart * 24 * 60 * 60 * 1000);
}

export default function sitemap() {
  const lastModified = getAlternateDayDate();

  // ----- Static Core Pages -----
  const corePages = [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/products`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified,
      changeFrequency: "daily",
      priority: 0.6,
    },
  ];

  // ----- Dynamic Blog Pages -----
  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/${blog.slug}`,
    lastModified,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  // ----- Dynamic Static SEO Pages (franchise, namkeen, etc.) -----
  const otherPages = staticPages.map((page) => ({
    url: `${BASE_URL}/${page.slug}`,
    lastModified,
    changeFrequency: "daily",
    priority: 0.7,
  }));

  return [...corePages, ...blogPages, ...otherPages];
}