import { AppError } from "./AppError";

class NotFound extends AppError {
  constructor(message: string) {
    super(message, 404);
  }
}

export { NotFound };
