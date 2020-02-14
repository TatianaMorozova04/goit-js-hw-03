const countProps = function (obj) {
    const values = Object.values(obj);
    return values.length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({name: 'Mango', age: 2})); // 2

console.log(countProps({mail: 'poly@mail.com', isOnline: true, score: 500})); // 3