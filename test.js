function tria(len){
   
   for(let j=1; j<=len; j++){
      let line="";
      for(let p=len-j; p>0; p--)
         line+=" ";
      for(let i=1; i<=j; i++){
         line+="*";
         line+=" ";
      }
      console.log(line);
   }
   
}
tria(5);