///////////////1//////////////////////////////

 var fruits = ["apple", "strawberry", "banana", "orange", "mango"] ;

///////////////////////////a/////////////////////////////////////////

 fruits.some(function(item,index,array)
{
    
    console.log(isNaN(item))
})
/////////////////////////////b////////////////////////////////////////
fruits.every(function(item,index,array)  //////see first element
{  
    console.log(item.startsWith("a"))
})

fruits.some(function(item,index,array)   ////////search all array
{
    
    console.log(item.startsWith("a"))
})



///////////////////c//////////////////////////////////////////////////
let newarray =fruits.filter(function(item,index)
{
  return item.startsWith("a")||item.startsWith("b");  
  
})
console.log(newarray)

/////////////////d/////////
// var news=
// fruits.reduce(function(item,index,array)
// { 
    
//     console.log(item,index)
//     return "i like" ;
    
// },"i like")

var neww=fruits.map(function(item)
{
    return `i like ${item}`
    
    
})
console.log(neww)


//////////////////e/////////////////////////////////////////////////////////
neww.forEach(element => {
    console.log(element)
});



/////////////////////////////2/////////////////////////////////////////////////////
function display(){


fetch("https://jsonplaceholder.typicode.com/posts").then(function(data)
 {
     data.json().then(function(parsedat)
     {
           let arr=[parsedat]
           let tex=document.getElementById("one");
           for(let i in parsedat)
            {
              if(parsedat[i].userId==tex.value)
              {
                
                console.log(parsedat[i].title);
                console.log(parsedat[i].body);
              }
            }
     })
 })

}
//////////////////////////////////////3//////////////////////////////////////////////////////////

async function get()
{
  let data=await fetch("https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products") ;
  let parse=await data.json()
  for(let i in parse)
  {
     console.log(parse[i].image);
     console.log(parse[i].name);
     console.log(parse[i].price);
  }
}
get()


 