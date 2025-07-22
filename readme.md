# MS39 – Digital Identity Integration Service

This microservice enables linking digital receipts to verified user identities (Aadhaar, UPI, NFC, eID, etc.) to support privacy compliance, digital consent, and identity-based features like warranties and personal vaults.

---

## 🔍 Purpose

- Link receipt to identity (Aadhaar, UPI, NFC, eIDAS)
- Store user consent for each identity usage
- Simulate tap-based NFC identity binding
- Prepare backend for DPDP compliance & EU eIDAS rollout

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **Sequelize ORM**
- **MySQL**
- Mock Identity API (Aadhaar/UPI/NFC)

---

## 📁 Folder Structure

ms39-identity-service/
├── app.js
├── db.js
├── config.js
├── controllers/
│ └── identity.controller.js
├── models/
│ ├── identity.model.js
│ └── consent.model.js
├── routes/
│ └── identity.routes.js
├── services/
│ └── mockIdentity.service.js
├── package.json
└── README.md


---

## 📦 API Endpoints

### 🔗 POST `/api/bind/identity`

**Link receipt to user identity and store consent**

#### Request Body (JSON)
```json
{
  "receiptId": "RCPT1001",
  "identityType": "aadhaar",
  "identityValue": "123456789012",
  "purpose": "KYC Verification"
}

Response

{
  "msg": "✅ Identity linked and consent saved"
}


GET /api/consent/:receiptId
Fetch consent records linked to a receipt
GET /api/consent/RCPT1001
Response
[
  {
    "id": 1,
    "receiptId": "RCPT1001",
    "identityValue": "123456789012",
    "purpose": "KYC Verification",
    "timestamp": "2025-07-22T10:00:00.000Z"
  }
]

GET /api/health
Check service health
Identity Types Supported
aadhaar – 12-digit Aadhaar number

upi – UPI ID (e.g. xyz@upi)

nfc – NFC tap simulation (starts with nfc_)

eid – EU eIDAS ID (starts with EU_)


Testing (Postman/CURL)
You can test this service using:

Postman (recommended)

CURL (command-line)Setup & Run Locally
Clone repo
git clone https://github.com/your-username/ms39-identity-service.git
cd ms39-identity-service

Install dependencies
npm install

Start MySQL and create database
CREATE DATABASE ms39_db;

Start server
npm start
✅ Service runs on: http://localhost:5000
Database Tables
identities – Stores receiptId, identityType, identityValue

consents – Stores consent with identityValue, purpose, and timestamp
 Notes
You can simulate identity types without real API calls

Ideal for training, prototyping, and privacy-compliant development

Author
Aashish 
MS39 Microservice | 2025
Intern in Tgt's
