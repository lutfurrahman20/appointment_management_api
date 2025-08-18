
---

# **Appointment Management API**

This is a **Node.js + Express + TypeScript + Prisma** project for managing **Patients** and **Appointments**, fully documented with **Swagger/OpenAPI**.

---

## **1️⃣ Features**

* Patient CRUD (Create, Read, Update, Delete)
* Appointment CRUD (Create, Read, Update, Delete)
* **Cascade Delete**: Deleting a patient will automatically delete their appointments
* **Swagger Documentation**: Live API docs for testing
* **PostgreSQL Cloud Database** with Prisma

---

## **2️⃣ Technologies Used**

* Node.js
* Express.js
* TypeScript
* Prisma ORM
* PostgreSQL (Cloud DB)
* Swagger / OpenAPI
* ts-node-dev (for development)

---

## **3️⃣ Prisma Setup**

**Prisma schema (`prisma/schema.prisma`):**

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Patient {
  id           Int           @id @default(autoincrement())
  name         String
  email        String        @unique
  phone        String?
  appointments Appointment[]
}

model Appointment {
  id              Int      @id @default(autoincrement()) 
  appointmentDate DateTime
  appointmentTime String
  reason          String

  patientId Int
  patient   Patient @relation(fields: [patientId], references: [id], onDelete: Cascade)

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

**Environment Variable (`.env`):**

```env
DATABASE_URL="prisma+postgres://<your-cloud-db-url>"
PORT=3000
```

**Prisma Commands:**

```bash
# Generate Prisma client
npx prisma generate

# Apply migrations
npx prisma migrate dev --name init

# Open Prisma Studio
npx prisma studio
```

---

## **4️⃣ Project Structure**

```
src/
├─ app.ts                 # Main app
├─ server.ts              # Server start
├─ modules/
│  ├─ patients/
│  │  ├─ patient.controller.ts
│  │  ├─ patient.service.ts
│  │  ├─ patient.interface.ts
│  │  └─ patient.route.ts
│  └─ appointments/
│     ├─ appointment.controller.ts
│     ├─ appointment.service.ts
│     ├─ appointment.interface.ts
│     └─ appointment.route.ts
├─ prisma/
│  └─ client.ts           # Prisma client instance
swagger.ts                # Swagger config
.env                       # Environment variables
```

---

## **5️⃣ API Routes**

### **Patients**

| Method | Route           | Description          |
| ------ | --------------- | -------------------- |
| POST   | `/patients`     | Create a new patient |
| GET    | `/patients`     | Get all patients     |
| GET    | `/patients/:id` | Get a patient by ID  |
| PUT    | `/patients/:id` | Update a patient     |
| DELETE | `/patients/:id` | Delete a patient     |

**Example JSON for creating patient:**

```json
{
  "name": "lutfur",
  "email": "lutfur@gmail.com",
  "phone": "01712345678"
}
```

---

### **Appointments**

| Method | Route               | Description              |
| ------ | ------------------- | ------------------------ |
| POST   | `/appointments`     | Create a new appointment |
| GET    | `/appointments`     | Get all appointments     |
| PUT    | `/appointments/:id` | Update an appointment    |
| DELETE | `/appointments/:id` | Delete an appointment    |

**Example JSON for creating appointment:**

```json
{
  "patientId": 1,
  "appointmentDate": "2025-08-20",
  "appointmentTime": "14:30",
  "reason": "Routine checkup"
}
```

---

## **6️⃣ Swagger Documentation**

* Accessible at: `http://localhost:3000/api-docs`
* All endpoints are documented and ready for testing.

---

## **7️⃣ Running the Project**

**Install dependencies:**

```bash
npm install
```

**Development Mode (with auto-restart + Prisma Studio):**

```bash
npm run dev
```

**Scripts in `package.json`:**

```json
{
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only ./src/server.ts && npx prisma studio"
  }
}
```



