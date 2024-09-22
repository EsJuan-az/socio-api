const { loadFiles } = require('@graphql-tools/load-files');
const { GQLServer } = require('../../shared/utils/GQLServer');
const resolvers = require('./resolvers');
const { REPOSITORY_PORT } = require('../config');

loadFiles('./src/schemas/*.{gql,graphql}').then((typeDefs) => {
  const sv = new GQLServer(REPOSITORY_PORT, {
    typeDefs,
    resolvers,
  });
  sv.listen();
});
