
define(
    ['moduleB','moduleC'],function(msg,calc){
        console.log('moduleA');
        console.log(msg);

        console.log(calc.add(1,3));
        console.log(calc.sub(1,3));
    }
);