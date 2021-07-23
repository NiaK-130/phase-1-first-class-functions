

function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
    let fn = function() {
          return 'before all'
    }
    return fn;
}


function returnsAnAnonymousFunction(a){
    return function(b){
        console.log("before all" + a + b)
    }
}