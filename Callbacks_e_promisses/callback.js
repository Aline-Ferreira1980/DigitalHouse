//Promisses - run codigo de maneira assincrona

const doSomenthingPromise =()=> new Promise((resolve, reject)=>{
    
    setTimeout(function(){
        //did something
        resolve('First data');
    }, 1500);
});

const doOtherThingPromise = ()=> new Promise((resolve, reject)=>{
    setTimeout(function(){
        //did something
        resolve('Second data');
    }, 1000);
});
//promises sendo executadas por quem for resolvida primeiro 
Promise.race([doSomenthingPromise(), doOtherThingPromise()]).then(data =>{
    console.log(data);
});

// para varias promises executadas em sequencia.
// Promise.all([doSomenthingPromise(), doOtherThingPromise()]).then(data =>{
//     console.log(data[0].split(''));
//     console.log(data[1].split(''));
// }).catch(err=>{
//     console.log(err);
// })

//promises sendo executadas com then
// doSomenthingPromise()
//     .then(data=>{
//         console.log(data.split('')); 
//         return doOtherThingPromise();
//     })
//     .then(data2 => console.log(data2.split('')))
//     .catch(error => console.log('Ooops', error));

//status da promise:    
//pending: quando ainda está pendente;
//Fulfilled : quando terminou de executar;
//Rejected: quando foi rejeitada

// callback
function doSomething(callback){
    setTimeout(function(){
        //did something
        callback('First data');
    }, 1000);
}
function doOtherThing(callback){
    setTimeout(function(){
        //did other Thing
        callback('Second data');
    }, 1000);
}
function doAll(){
    try{
        doSomething(function(data){
            var processedData = data.split('');
            try{
                doOtherThing(function(data2){
                    var processedData2 = data2.split('');
                    try{
                        setTimeout(function(){
                            console.log(processedData, processedData2);
                        },  1000);
                    }catch(err){
                        //Handler error
                    }
                });
            }catch(err){
                //Handler error
            }
        });
    }catch(err){
        //Handler errror
    }
}

doAll();