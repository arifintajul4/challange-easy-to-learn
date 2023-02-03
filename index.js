const array = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11, 13, 12, 14, 15, 16, 17, 18, 19, 20] 
const middle = array.length / 2;
let length = array.length-1;

for (let i=0; i < length; i++)
{
  if(i < middle/2)
  {
    console.log(`${array[i]} -> ${array[(middle -1)-i]} -> ${array[i]}`)
  }
  
  if(i >= middle && i <= (middle/2)+middle)
  {
    console.log(`${array[i]} -> ${array[length--]} -> ${array[array.length-1 - i]}`)
  }
}
