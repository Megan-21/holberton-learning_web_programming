let my_parameter = process.argv[2];

if (my_parameter >= 95){
  console.log("You received an A+");
} else if (my_parameter >= 90){
  console.log("You received an A");
} else if (my_parameter >= 85){
  console.log("You received a B+");
} else if (my_parameter >= 80){
  console.log("You received a B");
} else if (my_parameter >= 76){
  console.log("You received a C+");
} else if (my_parameter >= 70){
  console.log("You received a C");
} else if (my_parameter <= 65){
  console.log("You received a C");
}
