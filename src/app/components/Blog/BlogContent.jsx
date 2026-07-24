"use client";

import Link from "next/link";

export default function BlogContent({ content }) {
  const lines = content
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  // -----------------------------
  // Inline Parser (Bold + Links)
  // Handles: **[Link](url)** | [Link](url) | **Bold**
  // -----------------------------

  const parseLine = (line) => {
    const parts = [];

    const regex = /(\*\*\[.*?\]\(.*?\)\*\*|\[.*?\]\(.*?\)|\*\*.*?\*\*)/g;

    const segments = line
      .split(regex)
      .filter((s) => s !== "" && s !== undefined);

    segments.forEach((part, index) => {
      // Bold Link: **[text](url)**
      const boldLinkMatch = part.match(/^\*\*\[(.*?)\]\((.*?)\)\*\*$/);
      if (boldLinkMatch) {
        const [, text, href] = boldLinkMatch;
        const isExternal = href.startsWith("http");
        parts.push(
          isExternal ? (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#FF6A54] hover:underline transition"
            >
              {text}
            </a>
          ) : (
            <Link
              key={index}
              href={href}
              className="font-bold text-[#FF6A54] hover:underline transition"
            >
              {text}
            </Link>
          ),
        );
        return;
      }

      // Plain Link: [text](url)
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        const [, text, href] = linkMatch;
        const isExternal = href.startsWith("http");
        parts.push(
          isExternal ? (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FF6A54] hover:underline transition"
            >
              {text}
            </a>
          ) : (
            <Link
              key={index}
              href={href}
              className="text-[#FF6A54] hover:underline transition"
            >
              {text}
            </Link>
          ),
        );
        return;
      }

      // Bold: **text**
      if (/^\*\*.*\*\*$/.test(part)) {
        parts.push(
          <strong key={index} className="font-bold text-[#08122F]">
            {part.replace(/\*\*/g, "")}
          </strong>,
        );
        return;
      }

      // Plain text
      parts.push(<span key={index}>{part}</span>);
    });

    return parts;
  };

  // -----------------------------
  // JSX
  // -----------------------------

  return (
    <div className="max-w-none">
      {lines.map((text, index) => {
        const nextLine = lines[index + 1];

        // ----- Headings (##, ###, ####, #####) -----

        if (text.startsWith("##### ")) {
          return (
            <h5
              key={index}
              className="text-lg font-heading font-bold text-[#08122F] mt-6 mb-3"
            >
              {parseLine(text.replace("##### ", ""))}
            </h5>
          );
        }

        if (text.startsWith("#### ")) {
          return (
            <h4
              key={index}
              className="text-xl font-heading font-bold text-[#08122F] mt-8 mb-3"
            >
              {parseLine(text.replace("#### ", ""))}
            </h4>
          );
        }

        if (text.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="text-2xl font-heading font-bold text-[#08122F] mt-10 mb-4"
            >
              {parseLine(text.replace("### ", ""))}
            </h3>
          );
        }

        if (text.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="text-3xl font-heading font-bold text-[#08122F] mt-12 mb-5"
            >
              {parseLine(text.replace("## ", ""))}
            </h2>
          );
        }

        // ----- Bullet List -----

        if (text.startsWith("- ")) {
          return (
            <ul
              key={index}
              className="list-disc pl-7 mb-4 text-gray-700 leading-5"
            >
              <li>{parseLine(text.replace("- ", ""))}</li>
            </ul>
          );
        }

        // ----- Numbered List -----

        if (/^\d+\.\s/.test(text)) {
          return (
            <ol
              key={index}
              className="list-decimal pl-7 mb-4 text-gray-700 leading-8"
            >
              <li>{parseLine(text.replace(/^\d+\.\s*/, ""))}</li>
            </ol>
          );
        }

        // ----- Checklist -----

        if (text.startsWith("[] ") || text.startsWith("[x] ")) {
          const checked = text.startsWith("[x]");
          return (
            <div key={index} className="flex items-start gap-3 mb-4">
              <input
                type="checkbox"
                checked={checked}
                readOnly
                className="mt-1 w-5 h-5 accent-[#FF6A54]"
              />
              <span className="text-gray-700 leading-8">
                {parseLine(text.slice(3).trim())}
              </span>
            </div>
          );
        }

        // ----- FAQ -----

        if (text.startsWith("?? ")) {
          const faqIndex = lines
            .slice(0, index + 1)
            .filter((l) => l.startsWith("?? ")).length;

          return (
            <div
              key={index}
              className="group my-5 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-[#FF6A54]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full bg-[#FFF2E7] text-[#FF6A54] font-bold text-sm mt-0.5">
                  {String(faqIndex).padStart(2, "0")}
                </span>

                <div className="flex-1">
                  <h3 className="text-lg font-heading font-bold text-[#08122F] leading-snug">
                    {parseLine(text.replace("?? ", ""))}
                  </h3>

                  {nextLine && !nextLine.startsWith("?? ") && (
                    <p className="mt-2 text-gray-600 leading-7">
                      {parseLine(nextLine)}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        }

        // ----- Image -----

        if (text.startsWith("![")) {
          const match = text.match(/!\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, alt, src] = match;
            return (
              <div key={index} className="my-10 overflow-hidden rounded-3xl">
                <img
                  src={src}
                  alt={alt}
                  className="w-full h-auto object-cover"
                />
              </div>
            );
          }
        }

        // ----- Quote -----

        if (text.startsWith("> ")) {
          return (
            <blockquote
              key={index}
              className="my-8 border-l-4 border-[#FF6A54] bg-[#FFF5F0] pl-6 py-4 italic text-gray-700"
            >
              {parseLine(text.replace("> ", ""))}
            </blockquote>
          );
        }

        // ----- Skip FAQ Answer Line -----

        if (index > 0 && lines[index - 1].startsWith("?? ")) {
          return null;
        }

        // ----- Normal Paragraph -----

        return (
          <p key={index} className="mb-6 text-lg leading-7 text-gray-700">
            {parseLine(text)}
          </p>
        );
      })}
    </div>
  );
}
