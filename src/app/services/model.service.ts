import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable(
  {providedIn: 'root'}
)
export class ModelService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) {
  }

  getUserModels() {
    return this.http.get(this.baseUrl + 'model/getmodelbyauth')
  }

  createModel(body: {nomemodello: string, imgurl: string, collezione: {id: number}}) {
    return this.http.post(this.baseUrl + 'model/postmodel', body)
  }
}
