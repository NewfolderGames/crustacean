export interface Result<T, E> {

	readonly isError: boolean;
	readonly value: T | E;

}

class ResultOk<T> implements Result<T, unknown> {

	public readonly isError: boolean = false;
	public readonly value: T;

	public constructor(value: T) {

		this.value = value;

	}

}

class ResultError<E> extends Error implements Result<unknown, E> {

	public readonly isError: boolean = true;
	public readonly value: E;

	public constructor(value: E) {

		super();

		this.value = value;

	}

}
