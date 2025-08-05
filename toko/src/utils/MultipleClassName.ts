export function multipleClassName(
	...args: (string | false | null | undefined)[]
): string {
	return args.filter(Boolean).join(' ');
}
