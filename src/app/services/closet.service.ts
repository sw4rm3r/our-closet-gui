import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClosetService {

  constructor(private http: HttpClient) {
  }

  getUserCloset() {
     return this.http.get(environment.baseUrl + 'card/getcardsbyauth')
  }

  getCardById(id: number) {
    return this.http.get(environment.baseUrl + 'card/getcard/'+id)
  }

  getCardsByModel(id: number) {
    return this.http.get<any[]>(environment.baseUrl + 'card/getcardsbymodello/'+id)
  }

  creaCarta(body: {modello: {idmodello: number}}) {
    return this.http.post(environment.baseUrl + 'card/postcarta', body)
  }

}
