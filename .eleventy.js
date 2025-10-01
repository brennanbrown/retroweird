const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
  
  // Plugins
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(syntaxHighlight);

  // Markdown configuration
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true
  }).use(markdownItAttrs);
  
  eleventyConfig.setLibrary("md", markdownLibrary);

  // Pass through copy for static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/fonts");

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/**/*.md")
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/pages/**/*.md");
  });

  // Custom filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return new Date(dateObj).toISOString().split('T')[0];
  });

  // Limit filter for arrays
  eleventyConfig.addFilter("limit", function(array, limit) {
    return array.slice(0, limit);
  });

  // Random item from array
  eleventyConfig.addFilter("random", function(array) {
    return array[Math.floor(Math.random() * array.length)];
  });

  // Get year from date
  eleventyConfig.addFilter("year", dateObj => {
    return new Date(dateObj).getFullYear();
  });

  // Date filters for RSS
  eleventyConfig.addFilter("dateToRfc3339", dateObj => {
    return new Date(dateObj).toISOString();
  });

  eleventyConfig.addNunjucksFilter("getNewestCollectionItemDate", collection => {
    if (!collection || !collection.length) {
      return new Date();
    }
    return new Date(Math.max(...collection.map(item => item.date)));
  });

  // Shuffle array (for random link buttons)
  eleventyConfig.addFilter("shuffle", function(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  });

  // Custom shortcodes
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  eleventyConfig.addShortcode("badge", function(image, alt, url) {
    if (url) {
      return `<a href="${url}" target="_blank" rel="noopener noreferrer"><img src="${image}" alt="${alt}" width="88" height="31" loading="lazy"></a>`;
    }
    return `<img src="${image}" alt="${alt}" width="88" height="31" loading="lazy">`;
  });

  // Paired shortcode for marquee
  eleventyConfig.addPairedShortcode("marquee", function(content, direction = "left", speed = "normal") {
    return `<div class="marquee-container" data-direction="${direction}" data-speed="${speed}">
      <div class="marquee-content">${content}</div>
    </div>`;
  });

  // Watch targets
  eleventyConfig.addWatchTarget("src/css/");
  eleventyConfig.addWatchTarget("src/js/");

  // Config options
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "../_data"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
