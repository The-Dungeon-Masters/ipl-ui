/**
 * A helper class for managing a collection of errors
 */
export class Errors {

  /**
   * Creates a new error
   * @param name - The name of the error (e.g. invalid_password)
   * @param message - The error message
   * @param stack - a call stack
   */
  public static createError(name: string, message: string, stack?: string): Error {
    const newError = new Error(message);
    newError.name = name;
    newError.stack = stack || null;

    return newError;
  }

  constructor(public errors: Error[] = []) { }

  /**
   * Determines whether the error collection contains an error with a matching name
   * @param errorName - the error name to look for
   */
  public hasError(errorName: string): boolean {
    if (!this.errors || this.errors.length === 0) {
      return false;
    }
    return this.errors.some(e => e.name === errorName);
  }

  /**
   * Retrieves the error from the collection with the matching name.
   * @param errorName - error name to look for
   * @param returnEmptyError - if true, create a new empty error if a matching error is not found, otherwise returns null
   */
  public getError(errorName: string, returnEmptyError = true): Error {

    if (!this.hasError(errorName)) {
      return returnEmptyError ? Errors.createError(null, null, null) : null;
    }

    return this.errors.find(e => e.name === errorName);
  }

  /**
   * Returns whether or not the Errors collection contains any errors.
   */
  public hasErrors(): boolean {
    return this.errors.length > 0;
  }

  /**
   * Builder method that adds an error to the collection.
   * @param error - the error to add to the Errors collection
   */
  public add( error: Error ): Errors {

    if (error && !this.hasError(error.name)) {
      this.errors.push(error);
    }

    return this;
  }

  /**
   * Create and add a new Error
   * @param name - error name
   * @param message - error message
   * @param stack - call stack
   */
  public addNew(name: string, message: string, stack?: string) {
    const error = Errors.createError(name, message, stack);
    return this.add(error);
  }

  /**
   * Builder method for removing an error from the collection.
   * @param errorName - the name of the error to remove
   */
  public remove (errorName: string): Errors {
    const error = this.getError(errorName, false);

    if (error) {
      const index = this.errors.indexOf(error);
      this.errors.splice(index, 1);
    }

    return this;
  }

  /**
   * Builder method for clearing the collection of all errors
   */
  public clear(): Errors {
    this.errors.splice(0, this.errors.length);

    return this;
  }

}
