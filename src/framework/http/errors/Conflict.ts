import { AppError } from "./AppError";

class Conflict extends AppError {
  constructor(message: string) {
    super(message, 409);
  }
}

export { Conflict };
