import { AppError } from "./AppError";

class Forbidden extends AppError {
  constructor(message: string) {
    super(message, 403);
  }
}

export { Forbidden };
