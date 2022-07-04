import { Option } from "./option";

export abstract class Result<T, E> {

	// public abstract isOk(): boolean;
	// public abstract isOkAnd(fn: (value: T) => boolean): boolean;
	// public abstract isErr(): boolean;
	// public abstract isErrAnd(fn: (value: E) => boolean): boolean;
	// public abstract ok(): Option<T>;
	// public abstract err(): Option<E>;
	// public abstract map<U>(fn: (value: T) => U): Result<U, E>;
	// public abstract mapOr<U>(def: U, fn: (value: T) => U): U;
	// public abstract mapOrElse<U>(def: (value: E) => U, fn: (value: T) => U): U;
	// public abstract mapErr<F>(fn: (value: E) => F): Result<T, F>;
	// public abstract inspect(fn: (value: T) => void): Result<T, E>;
	// public abstract inspectErr(fn: (value: E) => void): Result<T, E>;
	// public abstract expect(msg: string): T;
	// public abstract unwrap(): T;
	// public abstract expectErr(msg: string): E;
	// public abstract unwrapErr(): E;
	// public abstract and<U>(res: Result<U, E>): Result<U, E>;
	// public abstract andThen<U>(fn: (value: T) => Result<U, E>): Result<U, E>;

}

export class ResultOk<T> extends Result<T, unknown> {

	private readonly isError: boolean = false;
	private readonly value: T;

	public constructor(value: T) {

		super();

		this.value = value;

	}

}

export class ResultError<E> extends Result<unknown, E> {

	private readonly isError: boolean = true;
	private readonly value: E;

	public constructor(value: E) {

		super();

		this.value = value;

	}

}
