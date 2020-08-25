const args = process.argv.slice(2);
for(let time in args){
  if(typeof time !== 'number' || time < 0){
    break;
  }
  setTimeout(()=>{
    process.stdout.write('\x07');
  }, time)
}