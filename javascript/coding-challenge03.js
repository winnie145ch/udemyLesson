// coding challenge #03
let dolphins1 = (96+108+89)/3;
let koalas1 = (88+91+110)/3;

console.log('Dolphins point',dolphins1,'; Koalas point',koalas1);
if(dolphins1 > koalas1){
    console.log('Dolphins team is the winner.')
}else if(dolphins1 < koalas1){
    console.log('Koalas team is the winner.')
}else{
    console.log ('Both win the trophy!')
}

console.log('----------------------');

// let dolphins2 = [97, 112, 101];
// let koalas2 = [109, 95, 123];
// for(let i = 0, j = 0; i < dolphins2.length, j < koalas2.length; i++, j++){
//     if(dolphins2[i]>=100 || koalas2[j]>=100){
//         if(dolphins2[i]>koalas2[j]){
//             console.log(dolphins2[i],'Dolphins team is the winner.')
//         }else if(dolphins2[i]<koalas2[j]){
//             console.log(koalas2[j],'Koalas team is the winner.')
//         }else{
//             console.log ('No one wins a trophy!')
//         }
//     } else{
//         console.log('lower than 100 points')
//     }
// }

let dolphins2 = (97+112+101)/3;
let koalas2 = (109+95+123)/3;

console.log('Dolphins point',dolphins2,'; Koalas point',koalas2);
if(dolphins2 > koalas2 && dolphins2 >=100 ){
    console.log('Dolphins team is the winner.')
}else if(dolphins2 < koalas2 && koalas2 >= 100){
    console.log('Koalas team is the winner.')
}else{
    console.log ('Both win the trophy!')
}


console.log('----------------------');

// let dolphins3 = [97, 112, 101];
// let koalas3 = [109, 95, 106];
// for(let i = 0, j = 0; i < dolphins3.length, j < koalas3.length; i++, j++){
//     if(dolphins3[i]>=100 || koalas3[j]>=100){
//         if(dolphins3[i]>koalas3[j]){
//             console.log(dolphins3[i],'Dolphins team is the winner.')
//         }else if(dolphins3[i]<koalas3[j]){
//             console.log(koalas3[j],'Koalas team is the winner.')
//         }else{
//             console.log ('No one wins a trophy!')
//         }
//     } else{
//         console.log('lower than 100 points')
//     }
// }

let dolphins3 = (97+112+101)/3;
let koalas3 = (109+95+106)/3;

console.log('Dolphins point',dolphins3,'; Koalas point',koalas3);
if(dolphins3 > koalas3 && dolphins3 >= 100){
    console.log('Dolphins team is the winner.')
}else if(dolphins3 < koalas3 && koalas3 >= 100){
    console.log('Koalas team is the winner.')
}else if(dolphins3 === koalas3 && dolphins3 >= 100 && koalas3 >= 100){
    console.log ('Both win the trophy!')
}else {
    console.log('No one wins the trophy.')
}
