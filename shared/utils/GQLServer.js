const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { env } = require('../../config');
const express = require('express');
const {
  typeDefs: scalarTypes,
  resolvers: scalarResolvers,
} = require('graphql-scalars');
/**
 * GQLServer.js
 * Will instanciate an express application with its /graphql endpoint set.
 */
class GQLServer {
  constructor(port, apolloConf) {
    this.port = port;
    this.app = express();
    this.config = apolloConf;
    this.apollo = new ApolloServer({
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      typeDefs: [...scalarTypes, ...apolloConf.typeDefs],
      resolvers: {
        ...scalarResolvers,
        ...apolloConf.resolvers,
      },
    });
  }
  async listen() {
    await this.apollo.start();
    this.apollo.applyMiddleware({ app: this.app });
    return this.app.listen(this.port, () => {
      if (env === 'development') {
        console.log(`App running on http://localhost:${this.port}/graphql🚀`);
      }
    });
  }
}
module.exports = { GQLServer };
