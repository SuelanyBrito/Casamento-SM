import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Item {
  id: string;
  title: string;
  number: number;
  check: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class BackService {
  constructor(private apollo: Apollo) {}

  getList(): Observable<Item[]> {
    return this.apollo.watchQuery({
      query: gql`
            query GetList {
              getList {
                results {
                  id
                  properties {
                    titleProperty {
                      title {
                        plain_text
                      }
                    }
                    marcado {
                      checkbox
                    }
                    qtde {
                      number
                    }
                  }
                }
              }
          }`,
    }).valueChanges.pipe(
      map((result: any) => result.data.getList.results
        .map((item: any) => ({
          id: item.id,
          title: item.properties.titleProperty.title[0].plain_text,
          number: item.properties.qtde.number,
          check: item.properties.marcado.checkbox
        }))
      )
    );
  }
}
