/* 
    8. Дан массив с целыми числами. Создайте из него новый массив, где останутся
    лежать только четные из этих чисел. Для этого используйте вспомогательную
    функцию isEven из предыдущей задачи.
*/

function isEven(numb) {
    return (numb % 2 == 0);
}

var arr = [1, 2, 3, 4, 5, 5, 2, 14, 243, 5234];
var arr2 = arr.filter((numb) => isEven(numb));
console.log(arr2);