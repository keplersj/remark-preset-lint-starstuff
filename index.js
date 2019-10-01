module.exports = {
  plugins: [
    // Support YAML frontmatter, without this remark-lint will through some fun warnings for your documents frontmatter
    require("remark-frontmatter"),
    // Use sensible presets
    require("remark-preset-lint-recommended"),
    require("remark-preset-lint-consistent"),
    // Set list format to match Prettier's lists
    [require("remark-lint-list-item-indent"), "space"]
  ]
};
