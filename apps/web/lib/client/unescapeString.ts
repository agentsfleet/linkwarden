export default function unescapeString(input: string) {
  // A link title is rendered as plain text, so "<" must never open a tag.
  // Escaping it keeps the parser in text mode while character references
  // such as "&amp;" and "&lt;" are still decoded.
  var doc = new DOMParser().parseFromString(
    input.replace(/</g, "&lt;"),
    "text/html"
  );
  return doc.documentElement.textContent;
}
