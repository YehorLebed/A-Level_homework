/* 
    23. В переменной date лежит дата в формате '2025-12-31'.
    Преобразуйте эту дату в формат'31.12.2025'. 
*/

var str = '2025-12-31';

var strArr = str.split('-');
var str = strArr.reverse().join('.');
console.log(str);
