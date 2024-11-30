import { AppError } from "./AppError";

class Unauthorized extends AppError {
  constructor(message: string) {
    super(message, 401);
  }
}

export { Unauthorized };
