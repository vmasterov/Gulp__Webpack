describe( 'Test Module test', () =>{
    it( 'It should return the "Hello..." string', () =>{
        assert(testModule.sayHi() === 'Hello from test-module', 'It should return the "Hello..." string');
    });
});