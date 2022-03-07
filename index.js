import remarkFrontmatter from "remark-frontmatter";
import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkPresetPrettier from "remark-preset-prettier";

export default {
  plugins: [
    // Support YAML frontmatter, without this remark-lint will through some fun warnings for your documents with frontmatter
    remarkFrontmatter,
    // Use sensible presets
    remarkPresetLintConsistent,
    remarkPresetLintMarkdownStyleGuide,
    remarkPresetLintRecommended,
    // Match Prettier
    remarkPresetPrettier,
  ],
};
