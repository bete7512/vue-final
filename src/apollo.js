import  {ApolloClient,createHttpLink,InMemoryCache} from "@apollo/client/core";   
const HttpLink = createHttpLink({
    uri:'https://divine-doe-42.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret': 'MXaIPpAec1LgVnPHvOXKTiM4G6G1otk7RPMUyGHmX1HTmblSC3LFeN23t2SVReWz',
    }
})
const cache = new InMemoryCache();
const apolloClient = new ApolloClient({
    link: HttpLink,
    cache
});
export  { apolloClient };
