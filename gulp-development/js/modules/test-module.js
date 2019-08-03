;
let testModule = (function () {
    let sayHi = function sayHi () {
        let message = 'Hello from test-module';
        console.log(message);
        return message;
    };

    return {
        sayHi: sayHi
    }
})();