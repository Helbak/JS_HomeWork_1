//Если а – четное посчитать а*б, иначе а+б
function ab(a, b) {
    if (a & 1)
        return a + b;
    else
        return a * b;
};

//Определить какой четверти принадлежит точка с координатами (х,у)
function whereIsPoint(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    }
    if (x > 0 && y < 0) {
        return 2;
    }
    if (x < 0 && y < 0) {
        return 3;
    }
    if (x < 0 && y > 0) {
        return 4
    } else return 'center';
}

//Найти суммы только положительных из трех чисел
function sumOnlyPositive(a, b, c) {
    if (a < 0)
        a = 0;
    if (b < 0)
        b = 0;
    if (c < 0)
        c = 0;
    return a + b + c;
}
// Посчитать выражение макс(а*б*с, а+б+с)+3
function sumFromMaxPlus3(a,b,c) {
    return Math.max(a*b*c, a+b+c)+3
}
//Написать программу определения оценки студента по его рейтингу, на основе
// следующих правил
function scoringOfStudent(a) {
if (a<=100 && a>=90)
    return ' A ';
    if(a>=75 && a<=89)
        return ' B ';
    if (a>=60 && a<=74)
        return ' C ';
    if(a>=40 && a<=59)
        return ' D ';
    if(a>=20 && a<=39)
        return  ' E ';
    if(a>=0 && a<=19)
        return ' F ';
    if(a<0 || a>100)
        return ' false ';
}
// Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function sumAndAmount() {
    var sum =0;
    var amount = 0;
    for(var i=2; i<=99; i=i+2){
     sum=sum+i;
     amount++;
     var res = 'sum =  '+sum+' amount = '+amount;
    }
    return res;
}
// Проверить простое ли число?
function justNumber(a) {
    var timesDiv =0;
    for(i=2; i<a; i++){
     if (a%i == 0)
         timesDiv++;
    }
    if(timesDiv>1)
        return ' false ';
    if(timesDiv==0)
        return ' true ';
}
//Найти корень натурального числа с точностью до целого
function sqRound(a) {

    return Math.round(Math.sqrt(a));
}
//Вычислить факториал числа n.
function factorial(a) {
    var fac = 1;
    for (i=1; i<=a; i++){
        fac=fac*i;
    }
    return fac;
}
//Посчитать сумму цифр заданного числа
function sumOfSign(a) {
var sum =0;
        output = [];
        aString = a.toString();

    for (var i = 0; i < aString.length;  i ++) {
        output.push(aString.charAt(i));
    }

    for(i=0; i<output.length; i++){

        sum = sum + Number(output[i]);
    }
    return sum;
}
//Вывести число, которое является зеркальным отображением последовательности
// цифр заданного числа
function mirror(a) {
    output = [];
    aString = a.toString();
var res = "";
    for (var i = 0; i < aString.length;  i ++) {
        output.push(aString.charAt(i));
    }
    for(i=output.length-1; i>=0; i--){

        res = res + output[i];
    }
    var resNumber = Number(res);
    return resNumber;
}

// Найти минимальный элемент массива
function minFromArray(array) {
var min = array[0];
for (i=1; i<array.length; i++){
    if(array[i]<min)
        min = array[i];
}
return min;
}
 // Найти максимальный элемент массива
function maxFromArray(array) {
    var max = array[0];
    for (var i=1; i<array.length; i++){
        if(array[i]>max)
            max = array[i];
    }
    return max;
}
// 3. Найти индекс минимального элемента массива
function indexOfMinFromArray(array) {
    var min = array[0];
    var indexMin = 0;
    for (i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i];
        indexMin = i;}
    }
    return indexMin;
}
// 4. Найти индекс максимального элемента массива
function indexOfMaxFromArray(array) {
    var max = array[0];
    var indexMax = 0;
    for (i=1; i<array.length; i++){
        if(array[i]>max){
            max = array[i];
        indexMax = i;}
    }
    return indexMax;
}
// 5. Посчитать сумму элементов массива с нечетными индексами
function sumOfUneven(array2) {
    var uneven = 0;
    for(i=1; i<array2.length; i=i+2){
        uneven= uneven+array2[i];
    }
    return uneven;
}
// 6. Сделать реверс массива (массив в обратном направлении)
function reversArray(array) {
    rev = [];
    for(i=0; i<array.length; i++){
        rev[array.length-i]=array[i];
    }
    return rev[rev.length-1];
}
// 7. Посчитать количество нечетных элементов массива
function uneven(array) {
    var amount =0;
    for(i=0; i<array.length; i++){
        if(array[i] %2!=0)
            amount ++;
    }
    return amount;
}
// 8. Поменять местами первую и вторую половину массива, например, для массива 1 2 3
// 4, результат 3 4 1 2
function changeHalfs(array) {
    changedAr = [];
for(i=array.length/2; i<array.length; i++){
changedAr.push(array[i]);
}
for(i=0; i<=array.length/2-1; i++){
    changedAr.push(array[i]);
}
var res = '';
for(i=0; i<changedAr.length; i++){
  res = res+', ' +changedAr[i];
}
return res;
}
// 9. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// 10. Отсортировать массив (Quick, Merge, Shell, Heap)




function init() {
    var array = [100, 5, 6, -7, 12, 15, 0, 3, -8, 9];
    //15, 0, 3, -8, 9, 100, 5, 6, -7, 12
    var array2 = [1,1,1,1,1];

    var res1 = ab(3, 10);
    var res2 = whereIsPoint(-1, 1);
    var res3 = sumOnlyPositive(3,-2,-2);
    console.log(res1, ', The point is lacated in the quart N - ', res2, ',  sum of numbers = ', res3, ', sumFromMaxPlus3 = '
    , sumFromMaxPlus3(1,1,1), ',  Estimation is -', scoringOfStudent(99), sumAndAmount(), justNumber(11112),
        ', sqRound = ', sqRound(10), ', factorial = ', factorial(6), ', Sum of numbers = ', sumOfSign(12342),
        ', mirror = ', mirror(12345),', min from array = ', minFromArray(array), ', max from array = ', maxFromArray(array),
        ', index of min from array = ',indexOfMinFromArray(array), ', index of max from array = ', indexOfMaxFromArray(array),
        ' sumOfUneven numbers ', sumOfUneven(array2), ', last number of revers array = ', reversArray(array),
        ', amount of uneven =', uneven(array), ', change Halfs of array- ', changeHalfs(array));

};
init();