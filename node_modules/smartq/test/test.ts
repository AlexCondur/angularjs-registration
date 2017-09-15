import 'typings-test'

import { expect } from 'smartchai'
import * as q from '../dist/index'

let myCallback = (someValue1: string, cb?) => {
    cb(null, someValue1)
}

describe('smartq', function () {
    it('should return a Deferred for .defer()', function () {
        let myDeferred = q.defer()
        let expectPromise = expect(myDeferred.promise).to.eventually.be.fulfilled
        myDeferred.resolve()
        return expectPromise
    })

    it('should let types flow through the Promise', function () {
        let myString = 'someString'
        let myDeferred = q.defer<string>()
        let expectPromise = expect(myDeferred.promise).to.eventually.equal('someString')
        myDeferred.resolve(myString)
        return expectPromise
    })

    it('should promisify a callback', function () {
        let myPromisified = q.promisify(myCallback)
        let expectPromise = expect(myPromisified('hi')).to.eventually.equal('hi')
        return expectPromise
    })

    it('should map callbacks', function() {
        let inputArray = ['hi', 'awesome']
        let myPromisified = q.promisify(myCallback)
        let expectPromise = expect(q.map(inputArray, myPromisified)).to.eventually.deep.equal(inputArray)
        return expectPromise
    })
})
