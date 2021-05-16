module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ["module:react-native-dotenv", {
      "moduleName": "@env",
      "path": ".env",
      "blacklist": null,
      "whitelist": null,
      "safe": false,
      "allowUndefined": true
    }],
    [
      "module-resolver",
      {
        "root": ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".json"],
        "alias": {
          "@core": "./src/core/",
          "@navigation": "./src/navigation/",
          "@components": "./src/components/",
          "@screens": "./src/screens/",
          "@assets": "./assets/",
        }
      }
    ]
  ],
};
