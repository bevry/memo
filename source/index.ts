/**
 * Wraps the callback in a memo that reuses the first invocation result of the callback to avoid subsequent invocations.
 * @param callback The callback (that takes no arguments) that we wish to cache the result for.
 */
export default function memo<T>(callback: () => T): typeof callback {
	let value: T
	return () => (typeof value !== 'undefined' ? value : (value = callback()))
}
