let Dolphins = [96,108,89]
let Koalas = [88,91,80]

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

if(dolphins_avg>koalas_avg)
    {
        console.log("Dolphins won");
    }
    else if(dolphins_avg<koalas_avg)
        {
            console.log("Koalas won");
        }
        else {
            console.log("draw");
        }

        if(dolphins_avg > koalas_avg && Dolphins.map((x)=>x>100))
            {
                console.log("Dolphins won");
            }
            else if(dolphins_avg < koalas_avg && Koalas.map((x)=>x>100))
                {
                    console.log("Koalas won");
                }
                else {
                    console.log("draw");
                }