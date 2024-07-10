/*
*เรามี Array numbers ซึ่งบรรจุตัวเลข ให้เขียน Algorithm เพื่อหาว่าผลรวมที่กำหนดให้ มาจากการบวกกันระหว่างสมาชิกสองตัวไหนใน Array 

เช่น ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `9` ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[0, 1]` คือตำแหน่งของสมาชิกสองตัวใน Array ที่บวกกันแล้วได้ผลลัพธ์เท่ากับ `9` (จาก 2 + 7)

ถ้า `numbers =  [2, 7, 11, 15]` ผลรวมเท่ากับ `23` ตัว Algorithm จะแสดงผลลัพธ์ออกมาเป็น `[]` หรือ Empty Array เนื่องจากไม่มีสมาชิกตัวใดที่บวกกันแล้วได้ผลลัพธ์เท่ากับ `23`
*/

function twoSum(arr, total) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        return [i, j];
      }
    }
  }
  return [];
}

const array1 = [2, 7, 11, 15];
const total1 = 9;
console.log(twoSum(array1, total1));

const array2 = [2, 7, 11, 15];
const total2 = 23;
console.log(twoSum(array2, total2));
