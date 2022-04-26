// import { Card } from "./src/_includes/components/Card";
const Card = require("./src/_includes/components/Card");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");

  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addShortcode("Card", Card);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "11ty-blog",
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
