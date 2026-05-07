# Banking Application Backend

Node.js and Express API for a simple banking and ledger system backed by MongoDB.

## Features

- User registration, login, and logout with JWT-based auth
- Account creation and account balance lookup
- Money transfers with idempotency keys
- System-user flow for seeding initial funds
- Immutable ledger entries stored in MongoDB

## Requirements

- Node.js 18 or newer
- MongoDB running locally or remotely

## Setup

1. Install dependencies.

	```bash
	npm install
	```

2. Create your environment file.

	```bash
	copy .env.example .env
	```

3. Update `.env` with your local values.

4. Start MongoDB and then run the app.

	```bash
	npm run dev
	```

## Environment Variables

The app uses these variables:

- `PORT` - server port, defaults to `3000`
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET` - secret used to sign JWTs
- `EMAIL_USER` - sender email used by the email service
- `CLIENT_ID` - OAuth client ID for email delivery
- `CLIENT_SECRET` - OAuth client secret for email delivery
- `REFRESH_TOKEN` - OAuth refresh token for email delivery

## Scripts

- `npm run dev` - start the server with nodemon
- `npm start` - start the server with Node
- `npm test` - placeholder test script

## API Endpoints

### Health

- `GET /` - service health check

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`

### Accounts

These routes require authentication.

- `POST /api/accounts` - create an account for the current user
- `GET /api/accounts` - list the current user's accounts
- `GET /api/accounts/balance/:accountId` - get the balance for one account

### Transactions

These routes require authentication unless noted otherwise.

- `POST /api/transactions` - transfer funds between two accounts
- `POST /api/transactions/system/initial-funds` - create an initial funds transaction for the system user

## Notes

- Transfers require `fromAccount`, `toAccount`, `amount`, and `idempotencyKey`.
- Initial funds transactions require `toAccount`, `amount`, and `idempotencyKey`.
- The API returns JSON responses and uses MongoDB transactions for ledger updates.
