## Endpoints

### **POST /auth**

**Descrição:** Cria a sessão para o acesso(Login) da aplicação.  
**URL:** `/auth`  
**Método:** `POST`

#### **Parâmetros de Query:**

| Nome    | Tipo   | Obrigatório | Descrição        |
| ------- | ------ | ----------- | ---------------- |
| `name`  | string | Sim         | Nome do usuário  |
| `email` | string | Sim         | Email do usuário |

#### **Exemplo de Requisição:**

```http
POST /auth HTTP/1.1
Host: https://mtd-backend.onrender.com

{
  "email": "raul@mail.com",
  "password": "1234567"
}
```

#### **Exemplo de Resposta:**

```http
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "fcfebbbaff...",
  "user": {
    "id": "1b1ddf52-6f14-4e43-ae6d-2cfe44d39e06",
    "name": "Raul Santos",
    "email": "raul@mail.com"
  }
}
```
