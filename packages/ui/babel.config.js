// eslint-disable-next-line no-undef
module.exports = {
  ignore: ['**/*.json'],
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    [
      'relay',
      {
        schema: '../../schema/schema.graphql',
      },
    ],
  ],
};
