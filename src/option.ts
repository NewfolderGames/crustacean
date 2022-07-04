import { Result, ResultError, ResultOk } from "./result";

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

		return this.option !== undefined ? fn(this.option) : new Option();

	}

	public mapOr<U>(def: U, fn: (value: T) => U): U {

		return this.option !== undefined ? fn(this.option) : def;

	}

	public mapOrElse<U>(def: () => U, fn: (value: T) => U): U {

		return this.option !== undefined ? fn(this.option) : def();

	}

	public okOr<E>(err: E): Result<T, E> {

		return this.option !== undefined ? new ResultOk(this.option) : new ResultError(err);

	}

	public okOrElse<E>(err: () => E): Result<T, E> {

		return this.option !== undefined ? new ResultOk(this.option) : new ResultError(err());

	}

	public inspect(fn: (value: T) => void): Option<T> {

		if (this.option !== undefined) fn(this.option);
		return this;

	}

}
