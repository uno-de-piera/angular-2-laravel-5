import {bootstrap} from "angular2/platform/browser"
import {provide} from 'angular2/core';
import {HomeComponent} from "./components/home/component"
import {HTTP_PROVIDERS} from "angular2/http";

import {
    LocationStrategy,
    HashLocationStrategy,
    ROUTER_DIRECTIVES,
    ROUTER_PROVIDERS
} from 'angular2/router';

bootstrap(HomeComponent, [
    ROUTER_PROVIDERS,
    ROUTER_DIRECTIVES,
    HTTP_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy})
]);
