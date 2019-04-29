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
function init() {
    var res1 = ab(3, 10);
    var res2 = whereIsPoint(-1, 1);
    var res3 = sumOnlyPositive(3,-2,-2);
    console.log(res1, ', The point is lacated in the quart N - ', res2, ',  sum of numbers = ', res3, ', sumFromMaxPlus3 = '
    , sumFromMaxPlus3(1,1,1), ',  Estimation is -', scoringOfStudent(99), sumAndAmount(), justNumber(11112));

};
init();