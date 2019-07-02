;
let testModule = (function () {
    let sayHi = function sayHi () {
        console.log('Hello from test-module');
    };

    return {
        sayHi: sayHi
    }
})();
// This page
console.log('Hello from page1');

// Modules
testModule.sayHi();

// ES modules
import EsTestModule from '../js/es-modules/test-es-module'
let esTesstModules = new EsTestModule();
esTesstModules.sayHi();