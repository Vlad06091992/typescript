class Account {
    constructor(protected balance: number) {
    }

    addBalance(count: number) {
        this.balance += count;
    }

    withdrawBalance(count: number) {
        this.balance -= count;
    }

    showBalance() {
        console.log(this.balance)
    }
}
console.log("Account ---------------------------------------------------------------------------------")
const account = new Account(100)
account.addBalance(100)
account.showBalance()
account.withdrawBalance(10)
account.showBalance()

class DepositaryAccount extends Account {

    private lastWithDrawDate: Date | null = null
    private balanceHasAdded: boolean = false

    constructor(count: number) {
        super(count);
    }

    addBalance(count: number) {
        this.lastWithDrawDate = new Date()
        this.balance += count;
        this.balanceHasAdded = true
    }

    withdrawBalance(count: number) {
        const current = new Date()

        if (current.getMilliseconds() - this.lastWithDrawDate!.getMilliseconds() < 1000 && this.balanceHasAdded) {
            console.log("В данный момент вы не можете снять деньги с депозитарного счета, попробуйте позднее")
        } else {
            this.balance -= count;
        }
    }
}
console.log("DepositaryAccount ---------------------------------------------------------------------------------")
const depositaryAccount = new DepositaryAccount(100)
depositaryAccount.addBalance(100)
depositaryAccount.showBalance()
depositaryAccount.withdrawBalance(100)
depositaryAccount.showBalance()


class CardAccount extends Account {
    constructor(count: number) {
        super(count);
    }

    withdrawBalance(count: number) {
        super.withdrawBalance(count)
        this.balance -= (count * 0.01)
    }
}

console.log("CardAccount ---------------------------------------------------------------------------------")
const cardAccount = new CardAccount(100)
cardAccount.addBalance(100)
cardAccount.showBalance()
cardAccount.withdrawBalance(100)
cardAccount.showBalance()
