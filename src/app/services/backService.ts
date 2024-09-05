import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { map } from "rxjs"

@Injectable({
    providedIn: 'root'
})
export class BackService {
    constructor(private apollo: Apollo){}

    getList(){
        return this.apollo.watchQuery({
            query: gql `query MyQuery {
                            getList {
                                results {
                                id
                                properties {
                                    titleProperty {
                                    title {
                                        plain_text
                                    }
                                    }
                                }
                                }
                            }
}`,
        }).valueChanges.pipe (
            map((result: any)=>{
                console.log("Graphql result", result)
                return result.data.getList.results
            })
        )}
}