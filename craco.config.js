module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          "path": require.resolve("path-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "stream": require.resolve("stream-browserify"),
          "http": require.resolve("stream-http"),
          url: require.resolve("url/"),
          "buffer": require.resolve("buffer/"),
          
        },
      },
    },
  },
};                                                                                                                                                                                                                                                                         