let fruits=[{name:"Cantaloupe", count:10},
            {name:"Custard-Apple", count:8},
            {name:"Durian", count:17},
            {name:"Soursop", count:6},
            {name:"Sapodilla", count:11},
            {name:"Pitanga", count:15}]
function fruitNames(arr,id){
let newarray=arr.map(p=>p[id]);
return(newarray);
}

console.log(fruitNames(fruits, "name"));