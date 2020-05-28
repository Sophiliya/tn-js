// [1, 2, 3, -4, -5] - { count: 3, sum: 6 }
// [-4, -5, 0, 8, 6] - { count: 2, sum: 14 }
// "not array"		 - throws error
// [1, 2, 'str', -7] - throws error
// []  - { count: 0, sum: 0 }
// [0, 0, 0]         - { count: 0, sum: 0 }

describe('sumOfPositive', function() {
	it('returns count & sum of positive numbers', function() {
		assert.deepEqual(sumOfPositive([1, 2, 3, -4, -5]), { count: 3, sum: 6 });
	});

	it('ignores 0', function() {
		assert.deepEqual(sumOfPositive([-4, -5, 0, 8, 6]), { count: 2, sum: 14 });
	});

	it('throws error if argument is not an Array', function() {
		assert.deepEqual(sumOfPositive("not array"), 'Argument must be an array of numbers.');
	});

	it('throws error if argument has not number values', function() {
		assert.deepEqual(sumOfPositive([1, 2, 'str', -7]), 'Array must contain number values only.');
	});

	it('returns 0 if array is empty', function() {
		assert.deepEqual(sumOfPositive([]), { count: 0, sum: 0 });
	});

	it('returns 0 if array has zeros only', function() {
		assert.deepEqual(sumOfPositive([0, 0, 0]), { count: 0, sum: 0 });
	});
})