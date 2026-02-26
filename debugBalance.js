const fs=require('fs');
const lines=fs.readFileSync('C:/Users/HP/OneDrive/Desktop/0pps22/frontend/src/pages/AdminDashboard.jsx','utf8').split('\n');
let paren=0, brace=0;
lines.forEach((l,i)=>{
  for(let c of l){
    if(c==='(') paren++;
    if(c===')') paren--;
    if(c==='{') brace++;
    if(c==='}') brace--;
  }
  if(i>=370 && i<=500){
    console.log(i+1, 'p',paren,'b',brace, l.trim());
  }
});
console.log('final counts',paren,brace);
