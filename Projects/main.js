// for (let i = 1; i <= 10; i++) {

//   console.log(`Multiplication table ${i}`);
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }



function countVowels(params) {
  x = params.toLowerCase();
  let vowel = (x.match(/[aeiou]/g) || []).length;

  console.log(`Vowel=== ${vowel}` );
}

countVowels('abcededd')

