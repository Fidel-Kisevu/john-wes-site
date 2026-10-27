import type { ReactNode } from "react";

function inline(text: string): ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);
  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return <span key={index}>{part}</span>;
  });
}

export function Markdown({ source }: { source: string }) {
  const blocks = source.trim().split(/\n{2,}/);
  return (
    <div className="essay">
      {blocks.map((block, index) => {
        const lines = block.split("\n").map((line) => line.trimEnd());
        if (lines.length > 0 && lines.every((line) => line.startsWith("> "))) {
          return (
            <blockquote key={index}>
              {inline(lines.map((line) => line.slice(2)).join(" "))}
            </blockquote>
          );
        }
        if (lines.length > 0 && lines.every((line) => line.startsWith("- "))) {
          return (
            <ul key={index}>
              {lines.map((line, item) => (
                <li key={item}>{inline(line.slice(2))}</li>
              ))}
            </ul>
          );
        }
        if (block.startsWith("## ")) return <h2 key={index}>{inline(block.slice(3).trim())}</h2>;
        if (block.startsWith("### ")) return <h3 key={index}>{inline(block.slice(4).trim())}</h3>;
        if (block.trim() === "---") return <hr key={index} className="mt-8 border-line" />;
        return <p key={index}>{inline(block.replace(/\n/g, " ").trim())}</p>;
      })}
    </div>
  );
}
