export default function memo<T>(callback: () => T): typeof callback {
	let value: T
	return () => (typeof value !== 'undefined' ? value : (value = callback()))
}
