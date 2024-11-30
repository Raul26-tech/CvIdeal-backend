import { AppError } from "./AppError";

class BadRequest extends AppError {
  constructor(message: string) {
    super(message, 400);
  }
}

export { BadRequest };
