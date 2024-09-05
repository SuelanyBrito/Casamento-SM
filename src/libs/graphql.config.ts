import { Provider } from "@angular/core";
import { APOLLO_OPTIONS } from "apollo-angular";
import { ApolloClientOptions, InMemoryCache, ApolloLink } from "@apollo/client";
import { HttpLink } from "apollo-angular/http";

export const graphqlProvider: Provider = {
    provide: APOLLO_OPTIONS,
    useFactory:(
        httpLink: HttpLink,
    ): ApolloClientOptions<unknown> => ({
        link: ApolloLink.from([
            httpLink.create({
                uri:"https://backcasamentosm.onrender.com/graphiql"
            })
        ]),
        cache: new InMemoryCache(),
    }),
    deps: [HttpLink],
}