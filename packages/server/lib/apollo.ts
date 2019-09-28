
import { ApolloServer, gql } from 'apollo-server-express'

export const apolloServer = new ApolloServer({
  typeDefs: gql`
    type User {
      name: String!
    }

    type Query {
      User: User!
    }
  `,
  resolvers: {
    Query: {
      User: () => ({ name: 'foo' })
    }
  }
})
