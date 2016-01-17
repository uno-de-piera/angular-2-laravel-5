System.register(["angular2/core", "../users/component", "../movies/component", "../../services/api", 'angular2/router'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, component_1, component_2, api_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (component_2_1) {
                component_2 = component_2_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(api) {
                    var _this = this;
                    this.api = api;
                    this.api.getAnimals().then(function (res) {
                        _this.animals = res;
                    }, function (error) {
                        console.log("Error: " + JSON.stringify(error));
                    });
                }
                HomeComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/users', name: 'Users', component: component_1.Users },
                        { path: '/movies', name: 'Movies', component: component_2.Movies },
                        { path: '/', name: 'root', redirectTo: ['/Users'] }
                    ]),
                    core_1.Component({
                        selector: "angular2-laravel",
                        templateUrl: 'angular2app/app/components/home/home.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [api_1.Api]
                    }), 
                    __metadata('design:paramtypes', [api_1.Api])
                ], HomeComponent);
                return HomeComponent;
            })();
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=component.js.map