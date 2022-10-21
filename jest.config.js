module.exports = {
  clearMocks: true,
  preset: "react-native",
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?@react-native|react-native|react-navigation|@react-navigation/.*))",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};