const { ApolloServer } = require('apollo-server-express');
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require('apollo-server-core');
const { env } = require('../../config');
const express = require('express');
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
      playground: env === 'development',
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
      ...apolloConf,
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
