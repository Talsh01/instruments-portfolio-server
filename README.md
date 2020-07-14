# Instruments Server

REST API for getting and editing market instruments

## Requirements

For development, you will only need Node.js and npm installed in your environement.

## Development server

Run `npm install`, then `npm run dev` for a dev server.
    

## API

### Get all instruments

Get all instruments data - Get request

> http://localhost:8080/instrument/get

### Add a new instrument

Add a new instrument - Post request

must provide name, symbol, type in request body

> http://localhost:8080/instrument/add

`body: 
{
	"name": "Test",
	"symbol": "Test",
	"type": "Test"
}
`

### Delete an existing instrument

Delete an existing instrument - Post request

must provide instrumentId in request body

> http://localhost:8080/instrument/delete

`body:
{
	"instrumentId": 1
}
`