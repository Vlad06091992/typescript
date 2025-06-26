abstract class Client {
    constructor(protected settlementAccount: number) {
    }

    public checkBalance(): number {
        return this.settlementAccount;
    }

    abstract withdrawMoney(money: number): number

    abstract depositMoney(money: number): number
}

class Individual extends Client {
    constructor(settlementAccount: number) {
        super(settlementAccount);
    }

    withdrawMoney(amount: number) {
        this.settlementAccount -= amount;
        return amount;
    }

    depositMoney(amount: number) {
        this.settlementAccount += amount;
        return amount;
    }
}

class IndividualEntrepreneur extends Individual {
    constructor(settlementAccount: number) {
        super(settlementAccount);
    }

    withdrawMoney(amount: number) {
        this.settlementAccount -= amount * 0.01;
        this.settlementAccount -= amount;
        return amount;
    }


    depositMoney(amount: number) {

        if (amount < 1000.) {
            this.settlementAccount -= amount * 0.01;
        } else if (
            amount >= 1000
        ) {
            this.settlementAccount -= amount * 0.005;
        }
        return super.depositMoney(amount);
    }
}

class LegalEntity extends Individual {
    constructor(settlementAccount: number) {
        super(settlementAccount);
    }


    withdrawMoney(amount: number) {
        this.settlementAccount -= amount * 0.01;
        super.withdrawMoney(amount);
        return amount;
    }
}

const individual = new Individual(1000.0);

individual.depositMoney(30);
individual.withdrawMoney(300);
console.log(individual.checkBalance());

const individualEntrepreneur = new IndividualEntrepreneur(1000.0);

individualEntrepreneur.depositMoney(30);
individualEntrepreneur.withdrawMoney(300);
console.log(individualEntrepreneur.checkBalance());

const legalEntity = new LegalEntity(1000.0);

legalEntity.depositMoney(30);
legalEntity.withdrawMoney(300);
console.log(legalEntity.checkBalance());



