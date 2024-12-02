import { BadRequest } from "src/framework/http/errors/BadRequest";

function parseArrayFilterParam(input: string | undefined, message?: string) {
  let parsed = [];

  if (input && typeof input === "string") {
    try {
      parsed = JSON.parse(input);

      if (!Array.isArray(parsed)) {
        throw new BadRequest(message || "Informe uma lista válida de filtros");
      }
    } catch (error) {
      throw new BadRequest(message || "Informe uma lista válida de filtros");
    }
  }

  // Caso o filtro de estados já tenha sido recebido convertido
  if (input && typeof input === "object") {
    parsed = input;
  }

  return parsed.length ? parsed : undefined;
}

export { parseArrayFilterParam };
