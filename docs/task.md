## Endpoints

> **Observação:** Para criar, atualizar, listar e deletar uma tarefa, é necessário estar autenticado.

### **POST /task**

**Descrição:** Cria tarefas.  
**URL:** `/task`  
**Método:** `POST`

#### **Parâmetros de Body (para criação de tarefa):**

| Nome          | Tipo   | Obrigatório | Descrição           |
| ------------- | ------ | ----------- | ------------------- |
| `title`       | string | Sim         | Título da tarefa    |
| `description` | string | Sim         | Descrição da tarefa |

#### **Exemplo de Requisição:**

```http
POST /task HTTP/1.1
Host: api.exemplo.comHost: https://mtd-backend.onrender.com
Authorization: Bearer <seu-token>
Content-Type: application/json

{
  "title": "Arrumar a casa",
  "description": "Arrumar a casa as 09:30"
}
```

#### **Exemplo de Resposta:**

```http
{
  "title": "Arrumar a casa",
  "description": "Arrumar a casa as 09:30",
  "status": "pending",
  "userId": "1b1ddf52-6f14-4e43-aed1-2cfe44d39e06",
  "id": "1f040b35-2560-4110-921b-fcfbcbc8169e",
  "createdAt": "2024-12-02T13:54:53.664Z",
  "updatedAt": "2024-12-02T13:54:53.664Z",
  "deletedAt": null
}
```

### **GET /task**

**Descrição:** Listar todas as tarefas.  
**URL:** `/task`  
**Método:** `GET`

#### **Exemplo de Requisição:**

> **Observação:** Está rota possuí paginação, para isso basta passar os parâmetrs via query

```http
GET /task?page=1&per_page=10 HTTP/1.1
Host: https://mtd-backend.onrender.com
Authorization: Bearer <seu-token>
Content-Type: application/json
```

#### **Exemplo de Resposta:**

```http
{
	"tasks": [
		{
			"id": "866fa5e1-0e1d-4156-a935-3a31610919a1",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "2a0018e2-417f-4159-b935-e768cdad8d8a",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "5cbdfee5-2c64-42e9-9024-92b2024a38cb",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "860a7ba0-5055-478e-a3ef-62d902d5eb90",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "6adcd138-92fc-4ac1-8d30-b6e0d9b6a954",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "5ea4f744-ab09-418f-859d-7927e064bea6",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "e22920ce-eb03-4cbe-85d6-d2bd044b5afa",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		},
		{
			"id": "5f20f565-afed-4c23-a9e3-873af873dd0f",
			"title": "Arrumar a casa",
			"description": "Arrumar a cama as 09:30"
		}
	],
	"totalTasks": 8,
	"totalPages": 1,
	"currentPage": 1
}
```

### **PATCH /task**

**Descrição:** Atualizar uma tarefa.  
**URL:** `/task`  
**Método:** `PATCH`

#### **Parâmetros de Path:**

| Nome | Tipo   | Obrigatório | Descrição                            |
| ---- | ------ | ----------- | ------------------------------------ |
| `id` | string | Sim         | ID único da tarefa a ser atualizada. |

#### **Parâmetros de Body (para atualização de tarefa):**

| Nome          | Tipo   | Obrigatório | Descrição                                       |
| ------------- | ------ | ----------- | ----------------------------------------------- |
| `title`       | string | Não         | Título da tarefa (opcional para atualização)    |
| `description` | string | Não         | Descrição da tarefa (opcional para atualização) |
| `status`      | string | Não         | Status da tarefa (ex: `pending`, `completed`)   |

#### **Exemplo de Requisição:**

```http
PATCH /task/{id} HTTP/1.1
Host: https://mtd-backend.onrender.com
Authorization: Bearer <seu-token>
Content-Type: application/json

{
    {
    "title": "Arrumar a casa",
    "description": "Arrumar a casa até às 10:00",
    "status": "completed"
    }

}

```

#### **Exemplo de Resposta:**

```http
{
	"id": "381bc9bd-1a6a-47f5-9aa9-29a73974c52d",
	"title": "Arrumar a casa",
	"description": "Arrumar a caaa as 09:30",
	"status": "pending",
	"userId": "efdb061a-2853-49ee-86f6-3f93d0d26606",
	"createdAt": "2024-12-01T16:41:17.686Z",
	"updatedAt": "2024-12-01T16:42:01.107Z",
	"deletedAt": null
}
```

### **DELETE /task**

**Descrição:** Excluir uma tarefa.  
**URL:** `/task/{id}`  
**Método:** `DELETE`

#### **Parâmetros de Path:**

| Nome | Tipo   | Obrigatório | Descrição                          |
| ---- | ------ | ----------- | ---------------------------------- |
| `id` | string | Sim         | ID único da tarefa a ser excluída. |

#### **Exemplo de Requisição:**

```http
DELETE /task/{id} HTTP/1.1
Host: https://mtd-backend.onrender.com
Authorization: Bearer <seu-token>
```

#### **Exemplo de Resposta:**

```http
{
	"message": "tarefa deletada com sucesso"
}

```
