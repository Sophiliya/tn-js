// 'Lorem ipsum' - [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }]
// 'dolor amet.' - [{ word: 'dolor', sum: 544 }, { word: 'amet.', sum: 469 }]
// ' '           - throws error
// 123           - throws error
// '  Lorem ipsum   dolor' - [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }, { word: 'dolor', sum: 544 }]

describe('wordStat', function() {
	it('returns word & char codes sum', function() {
		assert.deepEqual(wordStat('Lorem ipsum'), [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }]);
	});

	it('returns word & char codes sum if has punctuations', function() {
		assert.deepEqual(wordStat('dolor amet.'), [{ word: 'dolor', sum: 544 }, { word: 'amet.', sum: 469 }]);
	});

	it('throws error when empty argument or space only', function() {
		assert.deepEqual(wordStat(' '), 'Argument is empty.');
	});

	it('throws error when argument is not a string', function() {
		assert.deepEqual(wordStat(123), 'Argument must be a string.');
	});

	it('ignores extra spaces & returns word & char codes', function() {
		const result = [{ word: 'Lorem', sum: 511 }, { word: 'ipsum', sum: 558 }, { word: 'dolor', sum: 544 }];
		assert.deepEqual(wordStat('  Lorem ipsum   dolor'), result);
	});
})