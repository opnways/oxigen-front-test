module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    [
      "@babel/preset-react",
      {
        runtime: "async",
      },
    ],
    "@babel/preset-typescript",
  ],
};
