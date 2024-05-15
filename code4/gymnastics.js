let Dolphins = [44,23,71]
let Koalas = [65,54,49]

const dolphins_sum = Dolphins.reduce(function(acc,cur)
{
    acc = acc + cur ;
    return acc
    
},0)

console.log(dolphins_sum);

const koalas_sum = Koalas.reduce(function(acc,cur)
{
    acc = acc + cur ;
    return acc
    
},0)

console.log(koalas_sum);

const dolphins_avg = dolphins_sum/Dolphins.length;
const koalas_avg = koalas_sum/Koalas.length;

console.log(dolphins_avg, koalas_avg);

const checkwinner = function(A,B) {

if(A > 2*B)
    {
        console.log("Dolphins won");
    }
    else if(2*A < B)
        {
            console.log("Koalas won");
        }
        else{
            console.log("No team won")
        }
        
    }

    checkwinner(dolphins_avg,koalas_avg);