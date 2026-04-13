import {ValidationError} from "./errors.js";

class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'jpy'];
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code))
            throw new ValidationError(`Invalid code: ${code}. Must be ${Currency.#VALID_CODES}`);
        this.#code = code;
    }
}