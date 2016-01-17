System.register(["angular2/platform/browser", 'angular2/core', "./components/home/component", "angular2/http", 'angular2/router'], function(exports_1) {
    var browser_1, core_1, component_1, http_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(component_1.HomeComponent, [
                router_1.ROUTER_PROVIDERS,
                router_1.ROUTER_DIRECTIVES,
                http_1.HTTP_PROVIDERS,
                core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map