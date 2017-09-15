"use strict";
require("typings-global");
const typedPromisify = require("typed-promisify");
class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
exports.Deferred = Deferred;
exports.defer = () => {
    return new Deferred();
};
/**
 * Creates a new resolved promise for the provided value.
 */
exports.resolvedPromise = (value) => {
    return Promise.resolve(value);
};
/**
 * Creates a new rejected promise for the provided reason.
 */
exports.rejectedPromise = (err) => {
    return Promise.reject(err);
};
exports.promisify = typedPromisify.promisify;
exports.map = typedPromisify.map;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMEJBQXVCO0FBRXZCLGtEQUFpRDtBQVVqRDtJQUlJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxDQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1lBQ3RCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1FBQ3hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNKO0FBVkQsNEJBVUM7QUFFVSxRQUFBLEtBQUssR0FBRztJQUNmLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBSyxDQUFBO0FBQzVCLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxlQUFlLEdBQUcsQ0FBSSxLQUFTO0lBQ3RDLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2pDLENBQUMsQ0FBQTtBQUVEOztHQUVHO0FBQ1EsUUFBQSxlQUFlLEdBQUcsQ0FBQyxHQUFHO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQzlCLENBQUMsQ0FBQTtBQUVVLFFBQUEsU0FBUyxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUE7QUFDcEMsUUFBQSxHQUFHLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQSJ9