function emotion(x,y,c){
    const z="i am "+x+" ";
    return z+y(c);
}
let f=emotion("happy", function(num){
    let s="";
    for(num ;num>0; num--){
        s+="ha";
    }
    s+="!";
    return s;
},3)
console.log(f);