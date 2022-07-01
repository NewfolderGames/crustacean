export class Option<T> {

	private readonly value: T | undefined;

	public constructor(value?: T) {

		this.value = value;

	}

	public isSome(): boolean {

		return this.value !== null && this.value !== undefined;

	}

	public isSomeAnd(fn: (value: T) => boolean): boolean {

		return this.isSome() && fn(this.value!);

	}

	public isNone(): boolean {

		return this.value === null || this.value === undefined;

	}

	public expect(msg: string): T {

		if (this.isSome()) return this.value!;
		throw new OptionError(msg);

	}

	public unwrap(): T {

		if (this.isSome()) return this.value!;
		throw new OptionError("called `Option.prototype.upwrap()` on a none value");

	}

	public unwrapOr(def: T): T {

		return this.isSome() ? this.value! : def;

	}

	public unwrapOrElse(fn: () => T): T {

		return this.isSome() ? this.value! : fn();

	}

	public unwrapUnchecked(): T | undefined {

		return this.value;

	}

	public map<U>(fn: (value: T) => Option<U>): Option<U> {

		if (this.isSome()) return fn(this.value!);
		else return new Option();

	}

	public inspect(fn: (value: T) => void): Option<T> {

		if (this.isSome()) fn(this.value!);
		return this;

	}

}

export class OptionError extends Error {

	public constructor(msg: string) {

		super(msg);

	}

}
