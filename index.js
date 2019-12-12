module.exports = {
  plugins: [
    // Support YAML frontmatter, without this remark-lint will through some fun warnings for your documents with frontmatter
    require("remark-frontmatter"),
    // Use sensible presets
    require("remark-preset-lint-consistent"),
    require("remark-preset-lint-markdown-style-guide"),
    require("remark-preset-lint-recommended"),
    // Match Prettier
    require("remark-preset-prettier")
  ]
};
