let numOrStr = prompt('Введите число или строку');

switch (true) {
    case numOrStr === null:
        numOrStr = 'вы отменили';
        break;
    case numOrStr.trim() === '':
        numOrStr = 'Empty String';
        break;
    case isNaN(+numOrStr):
        numOrStr = 'number is Ba_NaN';
        break;
    default:
        numOrStr = 'OK!';
};

console.log(numOrStr);