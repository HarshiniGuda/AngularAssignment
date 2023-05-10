//String array
var alphas;
alphas = ["Harshini", "Harsha", "Harsh", "Vardhan"];
// console.log(alphas[0]); 
// console.log(alphas[1]);
// for (let i = 0; i < alphas.length; i++) {
//     console.log(alphas[i]);
// }
console.log('String array');
for (var j in alphas) {
    console.log(alphas[j]);
}
//boolean
var arr = [true, false, true];
console.log('boolean array');
for (var j in arr) {
    console.log(arr[j]);
}
//any
var arr2 = ['harshini', 1, 11.2, true];
console.log('any ');
for (var j in arr2) {
    console.log(arr2[j]);
}
//heterogeneous 
var hetero = [1, 'harshini'];
console.log('heterogeneous array');
for (var j in hetero) {
    console.log(hetero[j]);
}
