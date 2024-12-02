## Endpoints

### **POST /user**

**Descrição:** Cria o usuário da aplicação.  
**URL:** `/user`  
**Método:** `POST`

#### **Parâmetros de Query:**

| Nome              | Tipo   | Obrigatório | Descrição                          |
| ----------------- | ------ | ----------- | ---------------------------------- |
| `name`            | string | Sim         | Nome do usuário.                   |
| `email`           | string | Sim         | E-mail do usuário.                 |
| `emailConfirm`    | string | Sim         | Confirmação do e-mail.             |
| `password`        | string | Sim         | Senha do usuário.                  |
| `passwordConfirm` | string | Sim         | Confirmação da senha.              |
| `status`          | string | Sim         | Status do usuário (ex.: `active`). |
| `phone`           | string | Não         | Telefone do usuário.               |

#### **Exemplo de Requisição:**

```http
POST /user HTTP/1.1
Host: https://mtd-backend.onrender.com

{
  "name": "Raul Santos",
  "email": "raul@mail.com",
  "emailConfirm": "raul@mail.com",
  "password": "1234567",
  "passwordConfirm": "1234567",
  "status": "active",
  "phone": "4562822223"
}

```

#### **Exemplo de Resposta:**

```http
{
  "name": "Raul Santos",
  "email": "raul@mail.com",
  "password": "$2a$10$TBG2qwgefFUcGyPRgfBL00QXxEMB2qKLHokv74EBeQJUX2eHTaswq",
  "status": "active",
  "phone": "4562822223",
  "id": "1b1ddf52-6f14-4e43-aed8-2cfe44d39e06",
  "createdAt": "2024-12-02T13:53:31.663Z",
  "updatedAt": "2024-12-02T13:53:31.663Z"
}

```
