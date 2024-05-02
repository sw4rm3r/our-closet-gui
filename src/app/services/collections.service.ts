import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  constructor(private http: HttpClient) {
  }

  getUserCollections(): Observable<any[]> {
    return this.http.get<any[]>(environment.baseUrl + 'collection/getcollbyauth')
  }

  createCollection(body: {nomeCollezione: string, luogoCreazione: string, dataCreazione: string}) {
    return this.http.post(environment.baseUrl + 'collection/postcoll', body)
  }
}
