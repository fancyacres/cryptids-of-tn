module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/admin");
  eleventyConfig.addPassthroughCopy("identity-email-templates");

  return {
    dir: {
      input: "src",
      includes: "_layouts",
      data: "_data",
      output: "_site",
    },
  };
};
