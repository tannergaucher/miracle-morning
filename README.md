# React, Next.js, Apollo, Prisma Boilerplate with JSON Webtoken Authentication

---

## Getting Started

### Backend

Delete .sample from backend/variables.sample.env

`cd backend && npm install`

Make sure prisma cli is installed globally
`npm install -g prisma`

Log in to prisma
`prisma login`

Deploy to prisma
`npm run deploy`

1. Key down to Demo Server option and enter
2. Choose a region to host demo server
3. Enter for service name 'backend' and stage name 'dev'
4. Copy/ paste prisma http endpoint to variables.env

`backend/src/generated/prisma.graphql` should now exist.

Start the backend
`npm run dev`

Open up GraphQL Playground on localhost:4444

---

### Frontend

Navigate to frontend directorty and install node modules
`cd .. cd frontend && npm install`

Start the frontend
`npm run dev`

View frontend running on localhost:3000

---

### Authentication with JSON webtoken

Create a user and sign in

Wrap protected pages inside <PleaseSignin/> higher order component.

```jsx
<PleaseSignin>
   <!-- protectedPage.js -->
<PleaseSignin>

```

<PleaseSignin/> higher order component takes in props.children and queries for user. If no current user, displays sign in / sign up components. If current user, displays props.children components.

### Next Steps

- Add to new types to `backend/datamodel.graphql`
- Update `backend/src/schema.graphql` with new types
- Redeploy to prisma `npm run deploy` whenever backend datamodel changes

### Gotchas

'TypeError: Cannot read property 'me' of undefined'

- Make sure backend is running
- Make sure to delete any previous JSON webtoken cookies in localhost:3000 if having problems on startup
