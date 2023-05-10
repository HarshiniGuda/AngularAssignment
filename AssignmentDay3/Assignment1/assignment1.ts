 //String array
var alphas:string[]; 
alphas = ["Harshini","Harsha","Harsh","Vardhan"] 
// console.log(alphas[0]); 
// console.log(alphas[1]);
// for (let i = 0; i < alphas.length; i++) {
//     console.log(alphas[i]);
// }
console.log('String array')
for (let j in alphas) {
    console.log(alphas[j]);
 }

 //boolean
 var arr: boolean[] = [true, false, true];
 console.log('boolean array')

 for (let j in arr) {
    console.log(arr[j]);
 }
 //any
 var arr2:any[]=['harshini',1,11.2,true] 
 console.log('any ')

 for (let j in arr2) {
    console.log(arr2[j]);
 }
 //heterogeneous 
 var hetero:[number,string]=[1,'harshini']
 console.log('heter array')

 for (let j in hetero) {
    console.log(hetero[j]);
 }
