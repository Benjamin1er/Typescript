"use strict";
exports.__esModule = true;
var Assert = require("assert");
var BankCustomer = /** @class */ (function () {
    function BankCustomer(customerName, customerPin) {
        this.customerName = customerName;
        this.customerPin = customerPin;
    }
    BankCustomer.prototype.getName = function () {
        return this.customerName;
    };
    BankCustomer.prototype.verifyPinInput = function (number) {
        if (number === this.customerPin)
            return true;
    };
    return BankCustomer;
}());
// Tests
var customer = new BankCustomer('John Doe', '3579');
Assert.equal(typeof customer.getName, 'function');
Assert.equal(typeof customer.verifyPinInput, 'function');
Assert.equal(customer.getName(), 'John Doe');
Assert.ok(customer.verifyPinInput('3579'));
