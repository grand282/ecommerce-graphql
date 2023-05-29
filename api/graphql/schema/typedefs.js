import gql from "graphql-tag";

const typeDefs = gql`
type Query {
  products: [Product]
  productsByPrice(min: Float!, max: Float!): [Product]
  product(id: ID!): Product
  orders: [Order]
  users: [Users]
}

type Mutation {
  addNewProduct(id: ID!, description: String!, price: Float!): Product
  addNewProductReview(id: ID!, rating: Int!, comment: String): Review
  
}

type Product {
  id: ID!
  productIndex: Float
  title: String!
  description: String!
  reviews: [Review]
  price: Float!
}

type Review {
  rating: Int!
  comment: String
}
type Order {
  date: String!
  subtotal: Float!
  items: [OrderItem]
}

type OrderItem {
  product: Product!
  quantity: Int!
}
type Users {
  id: ID!
  name: String!
 email: String!
}
`;

export default typeDefs