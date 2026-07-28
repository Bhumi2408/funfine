export default function ArticleSchema({ article }) {
  if (!article) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      "@type": "Organization",
      name: "Fun Fine",
    },
    publisher: {
      "@type": "Organization",
      name: "Fun Fine",
      logo: {
        "@type": "ImageObject",
        url: article.logo,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.pageUrl,
    },
    keywords: article.keywords,
    articleSection: "Food & Snacks",
    inLanguage: "en-IN",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}