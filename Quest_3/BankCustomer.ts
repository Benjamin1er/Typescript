import * as Assert from "assert";

class BankCustomer {

    private customerName: string;
    private customerPin: string;

    constructor(customerName: string, customerPin: string) {
        this.customerName = customerName;
        this.customerPin = customerPin;
    }

    public getName(): string {
        return this.customerName;
    }
    public verifyPinInput(number: string): boolean {
        if (number === this.customerPin) return true
    }
}

// Tests

const customer = new BankCustomer('John Doe', '3579');
Assert.equal(typeof customer.getName, 'function');
Assert.equal(typeof customer.verifyPinInput, 'function');
Assert.equal(customer.getName(), 'John Doe');
Assert.ok(customer.verifyPinInput('3579'));
