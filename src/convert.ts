export type Into<Type, Name extends string> = {
	[key in `into${Capitalize<Name>}`]: () => Type;
}

export type From<Type, Name extends string> = {
	[key in `from${Capitalize<Name>}`]: (value: Type) => unknown;
}
