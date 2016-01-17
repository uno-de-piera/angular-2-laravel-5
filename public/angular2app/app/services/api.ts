import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class Api {

    apiUrl: string = "http://localhost:8080/api/";
    constructor(private http: Http) {

    }

    getAnimals() {
        return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + "animals").subscribe(
                res => {
                    resolve(res.json());
                },
                error => {
                    reject(error);
                }
            )
        })
    }
}