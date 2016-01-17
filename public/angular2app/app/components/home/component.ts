import {Component} from "angular2/core"
import {Users} from "../users/component"
import {Movies} from "../movies/component"
import {Api} from "../../services/api"

import {
    RouteConfig,
    ROUTER_DIRECTIVES,
} from 'angular2/router';

@RouteConfig([
    {path:'/users', name: 'Users', component: Users},
    {path:'/movies', name: 'Movies', component: Movies},
    {path:'/', name: 'root', redirectTo: ['/Users']}
])

@Component({
    selector: "angular2-laravel",
    templateUrl: 'angular2app/app/components/home/home.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Api]
})

export class HomeComponent {
    animals: Array<any>;
    constructor(private api: Api){
        this.api.getAnimals().then(
            (res) => {
                this.animals = res;
            },
            (error) => {
                console.log("Error: " + JSON.stringify(error));
            }
        )
    }
}