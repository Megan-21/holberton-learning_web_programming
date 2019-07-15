var i = 0
var x = 0
var s = 0

function clock(){
  s++;
  if(s==60){
    s=0;
  }
}

while (i <= 23) {
  console.log(i);
  if (x=59){
    i++;
  }
} while (x <= 59) {
  console.log(x);
  if (s=60){
    x++;
  }
}
