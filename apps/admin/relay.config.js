// eslint-disable-next-line no-undef
module.exports = {
  // ...
  // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
  src: '../../.',
  schema: '../../schema/schema.graphql',
  language: 'typescript',
  eagerEsModules: true,
  customScalars: {
    UUID: 'string',
    Date: 'string',
    DateTime: 'string',
  },
};
