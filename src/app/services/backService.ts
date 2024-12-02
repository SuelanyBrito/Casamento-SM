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

interface SelectedItem {
  item: Item;
  quantity: number;
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
      .filter((item: any) => item.properties.qtde.number > 0)
        .map((item: any) => ({
          id: item.id,
          title: item.properties.titleProperty.title[0].plain_text,
          number: item.properties.qtde.number,
          check: item.properties.marcado.checkbox
        }))
      )
    );
  }

  getPix() {
    return this.apollo.watchQuery({
      query: gql`
            query GetPix {
              getPix

          }`,
    }).valueChanges.pipe(
      map((result: any) => result.data.getPix)

    );
  }

  update(item: SelectedItem, name_user: string): void {
    console.log(name_user);
    this.apollo
      .watchQuery({
        query: gql`
          query MyQuery($id: String!, $person: String!, $quantity: Int!, $quantityPrimary: Int!) {
            mark(id: $id, person: $person, quantity: $quantity, quantityPrimary: $quantityPrimary)
          }
        `,
        variables: {
          id: item.item.id,
          person: name_user,
          quantityPrimary: item.quantity,
          quantity: item.item.number - item.quantity,
        },
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result.data);
      });
  }
}
