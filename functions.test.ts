const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test('shuffleArray function returns array', () => {
        expect(typeof shuffleArray([1, 2, 3, 4])).toEqual('object')
    })
    test('shuffleArray should return an array of the same length as the one passed', () => {
        expect(shuffleArray([1, 2, 3, 4]).length).toBe(4)
    })
    test('returned array should contain same numbers', () => {
        [1, 2, 3, 4].forEach((element) => {
            expect(shuffleArray([1, 2, 3, 4])).toContain(element)
        })
    })
})