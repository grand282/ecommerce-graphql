
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import typeDefs from './schema/typedefs.js';
import resolvers from './schema/resolvers.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import { startServerAndCreateLambdaHandler, handlers } from '@as-integrations/aws-lambda';

//configure env
dotenv.config()

//databse config
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  })

  const app = express();
  const httpServer = http.createServer(app);  
  const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
  await server.start();

  app.use(
  cors(),
  bodyParser.json(),
  expressMiddleware(server),
);

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  // We will be using the Proxy V2 handler
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
);

/*await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000`);*/