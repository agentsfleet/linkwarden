// @vitest-environment jsdom

import { describe, expect, it } from "vitest";
import unescapeString from "./unescapeString";

describe("unescapeString", () => {
  it("decodes HTML entities in a saved link title", () => {
    expect(unescapeString("Research &amp; development")).toBe(
      "Research & development"
    );
  });

  it("decodes escaped angle brackets in a saved link title", () => {
    expect(unescapeString("TypeScript &lt;T&gt; guide")).toBe(
      "TypeScript <T> guide"
    );
  });

  it("preserves literal angle-bracket text in a saved link title", () => {
    // A title is displayed as React text; a generic type is not an HTML element.
    expect(unescapeString("TypeScript <T> guide &amp; examples")).toBe(
      "TypeScript <T> guide & examples"
    );
  });
});
