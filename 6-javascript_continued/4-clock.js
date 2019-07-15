var i = 0
var x = 0
var s = 0

function clock(){
  s++;
  if(s==60){
    s=0;
    x++
  } if (x==60) {
    x=0;
    i++;
  } if(h==24){
      h=0;
    }
}

while (i <= 23) {
  console.log(i);
} while (x <= 59) {
  console.log(x);
}
