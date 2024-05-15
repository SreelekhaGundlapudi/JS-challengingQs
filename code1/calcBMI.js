let mark={weight:78,height:1.69}
let john={weight:92,height:1.95}

function height(x) {
    return x*x;
}

 function mass(w){
    let g=10;
    return w/g;
 }

 const mark_height = height(mark.height)
 const john_height = height(john.height)
 const mark_mass = mass(mark.weight)
 const john_mass = mass(john.weight)

 console.log (mark_height , john_height, mark_mass, john_mass);
 

 const mark_BMI = mark_mass/mark_height
 console.log(mark_BMI);
 const john_BMI = john_mass/john_height
 console.log(john_BMI);

 if(mark_BMI > john_BMI){
    console.log("mark has high BMI");
 }
else{
    console.log("john has high BMI")
}
