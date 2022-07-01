export class Option<T> {

	private readonly option: T | undefined;

	public constructor(value?: T) {

		this.option = value;

	}

	public isSome(): boolean {

		return this.option !== undefined;

	}

	public isSomeAnd(fn: (value: T) => boolean): boolean {

		return this.option !== undefined && fn(this.option);

	}

	public isNone(): boolean {

		return this.option === undefined;

	}

	public expect(msg: string): T {

		if (this.option !== undefined) return this.option;
		throw new Error(msg);

	}

	public unwrap(): T {

		if (this.option !== undefined) return this.option;
		throw new Error("called `Option.prototype.upwrap()` on a none value");

	}

	public unwrapOr(def: T): T {

		return this.option !== undefined ? this.option : def;

	}

	public unwrapOrElse(fn: () => T): T {

		return this.option !== undefined ? this.option : fn();

	}

	public unwrapUnchecked(): T | undefined {

		return this.option ? this.option : undefined;

	}

	public map<U>(fn: (value: T) => Option<U>): Option<U> {

		if (this.option !== undefined) return fn(this.option);
		else return new Option();

	}

	public inspect(fn: (value: T) => void): Option<T> {

		if (this.option !== undefined) fn(this.option);
		return this;

	}

}
