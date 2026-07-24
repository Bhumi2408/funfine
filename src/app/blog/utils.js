// Converts "13 July 2026" style string into a real Date object for sorting
export function parseBlogDate(dateString) {
  return new Date(dateString);
}

// Returns blogs sorted with latest date first
export function getSortedBlogs(blogs) {
  return [...blogs].sort(
    (a, b) => parseBlogDate(b.date) - parseBlogDate(a.date)
  );
}