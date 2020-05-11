import { equal } from 'assert-helpers'
import kava from 'kava'

import memo from './'

let count = 0
function counter() {
	return ++count
}

kava.suite('memo', function (suite, test) {
	test('works as expected', function () {
		const fn = memo(counter)
		equal(count, 0)
		equal(fn(), 1)
		equal(count, 1)
		equal(fn(), 1)
		equal(count, 1)
	})
})
