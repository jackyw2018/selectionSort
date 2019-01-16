
describe('Selection Sort', function () {
    it('is a function', function () {
        expect(typeof selectionSort).toBe('function');
    })

    it('accepts an array and returns an array', function () {
        expect(selectionSort([])).toEqual([]);
    })

    it('accepts an unsorted array and returns a sorted array', function () {
        let unsortedArr = Array.from({ length: 15 }, function () {
            return Math.round(Math.random() * 10);
        })

        let sortedArr = unsortedArr.slice();
        sortedArr.sort((current, next) => current - next);

        expect(selectionSort(unsortedArr)).toEqual(sortedArr);
    })
})