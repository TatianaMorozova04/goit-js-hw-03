/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const generateId = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const account = {
    // Текущий баланс счета
    balance: 0,

    // История транзакций
    transactions: [],

    /*
     * Метод создает и возвращает объект транзакции.
     * Принимает сумму и тип транзакции.
     */

    createTransaction(amount, type) {
        return {
            id: generateId(),
            type,
            amount,
        }
    },

    /*
     * Метод отвечающий за добавление суммы к балансу.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций
     */
    deposit(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
        this.balance += amount;
    },


    /*
     * Метод отвечающий за снятие суммы с баланса.
     * Принимает сумму танзакции.
     * Вызывает createTransaction для создания объекта транзакции
     * после чего добавляет его в историю транзакций.
     *
     * Если amount больше чем текущий баланс, выводи сообщение
     * о том, что снятие такой суммы не возможно, недостаточно средств.
     */
    withdraw(amount) {
        this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
        this.balance -= amount;
        if (amount > this.balance) {
            console.log('Снятие такой суммы не возможно, недостаточно средств');
        }
    },

    /*
     * Метод возвращает текущий баланс
     */
    getBalance() {
        return this.balance
    },

    /*
     * Метод ищет и возвращает объект транзации по id
     */
    getTransactionDetails(id) {
        for (const trans of this.transactions) {
            if (trans.id === id) {
                return trans
            }
        }
    },

    /*
     * Метод возвращает количество средств
     * определенного типа транзакции из всей истории транзакций
     */
    getTransactionTotal(type) {
        let total = 0;
        for (const trans of this.transactions) {
            if(trans.type === type) {
                total += trans.amount;
            }
        }
        return total
    },
};

console.log('our account', account);


/*
 * Тесты
 */
account.deposit(100);
account.deposit(200);
account.deposit(200);
account.withdraw(200);
console.log('balance', account.getBalance());
console.log('transactions', account.transactions);
account.withdraw(60000);
console.log('all deposits', account.getTransactionTotal(Transaction.DEPOSIT));
console.log('all withdraws', account.getTransactionTotal(Transaction.WITHDRAW));
