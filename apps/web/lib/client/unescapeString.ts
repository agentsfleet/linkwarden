export default function unescapeString(input: string) {
  // A link title is plain text, so escape "<" to keep the HTML parser from
  // treating it as markup while still decoding character references.
  var doc = new DOMParser().parseFromString(
    input.replace(/</g, "&lt;"),
    "text/html"
  );
  return doc.documentElement.textContent;
}
