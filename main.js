// 1) Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for найдите сумму элементов этого массива. 
// Запишите ее в переменную result.

// const arr = [1, 2, 3, 4, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//   result += arr[i];
// }
// console.log(result);


// 2) Дан массив с числами. Числа могут быть положительными и отрицательными. 
// Найдите сумму положительных элементов массива.

// const arr = [1,2,5,-1,-2,-3,-4,-5];
// let result = 0;
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] < 0) continue
//     else if(arr[i] > 0){
//         result += arr[i]
//     }
// }
// console.log(result);


// 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10]. 
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением, равным 4. 
// Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - ничего делать не надо.


// const arr = [1, 2, 5, 9, 4, 13, 4, 10];
// for (var i = 1; i < arr.length; i++) {
//     if (arr[i]%2 !=1){
//         console.log(arr[i]=4)
//     }
// }


// 4) Дан массив с элементами ['Привет, ', 'мир', '!']. 
// Необходимо записать в переменную text фразу 'Привет, мир!', 
// а затем вывести на экран содержимое этой переменной.

// const arr = ['Привет,','мир','!'];
// const text = `${arr.slice(0,1)} ${arr.slice(1,2)} ${arr.slice(2,3)}`
// alert(text)



// 5) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.
// const arr = ['a', 'b', 'c'];
// const bar = [1, 2, 3];
//const = arr.concat(bar)s


// 6) Дан массив ['a', 'b', 'c']. Добавьте ему в начало элементы 1, 2, 3. 
// И отдельно добавьте в конец массива 1,2,3
// const arr = ['a', 'b', 'c'];
// arr.push(1,2,3)

// 7) Создайте массив ['a', 'b', 'c', 'd'] и 
// с его помощью выведите на экран строку 'a+b, c+d'.
// const arr = ['a','b','c', 'd'];
// const text = `${arr.slice(0,1)} ${arr.slice(1,2)}`
// const texts = `${arr.slice(2,3)} ${arr.slice(3,4)}`
// console.log(text)
// console.log(texts)

// 8) Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода slice запишите в новый элементы [1, 2, 3].
// const arr = [1, 2, 3, 4, 5];
// const text = `${arr.slice(0,1)} ${arr.slice(1,2)} ${arr.slice(2,3)}`
// console.log(text)

// 9) Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice преобразуйте массив в [1, 4, 5].

// let arr = ["1", "2", "3", "4", "5"];

// arr.splice(1, 2); 

// alert( arr ); 

// 10) Дан массив [1, 2, 3, 4, 5]. 
// С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const arr = [1, 2, 3, 4, 5];
// const text = `${arr.splice(1,0,'a', 'b')} ${arr.splice(0,6,'c',)} ${arr.splice(0,7, 'e')} ${arr.splice(0,8,)} `
// console.log(text);


// 11) Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и отдельно последний элемент. 
// Используйте shift, pop
 

// let arr = ['js', 'css', 'jq'];
// console.log(arr.shift());
// console.log(arr.pop('css'));