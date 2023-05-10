const EventEmitter = require('events');

const emitter = new EventEmitter();
// raise an event
emitter.on('bellring',function(){
    console.log('we need to run ');
});
//emitter.emit('bellring');
emitter.on("link",()=>{
    for(var x=0;x<100;x++){
        console.log(x);
        
    }
})
setTimeout(() => {
    emitter.emit("link") 
}, 5000);
