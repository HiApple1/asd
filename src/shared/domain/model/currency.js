class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP', 'jpy'];
    #code;

    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code))
            throw new Error(`Invalid code: ${code}. Must be ${Currency.#VALID_CODES}`);
        this.#code = code;
    }
}