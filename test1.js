function dream(x,y){
    return x(y);
}
dream(function(z){
    console.log("one day i will see "+ z);
}, "cristiano ronaldo");