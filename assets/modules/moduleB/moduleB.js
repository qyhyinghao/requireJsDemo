define(['jquery','cookie'],
    function(){

        console.log('moduleB');

        console.log(arguments);

        $.cookie('name','我是cookie');
        $.cookie('age','23');

        console.log($.cookie());

        return 'helloworld';
        
    }
);
