## Basic Social Media App

```bash
npm install
npm run dev
```

## Routes
- `/profile/{userId}` - should load the user profile.
  - TODO, initial profile markup
  - TODO, profile styling
- `/api/messages` - Look up messages. Returns all by default. Filter by using `to=${userId}` and `from=${userId}` search parameters.
- `/api/users` - look up users. Returns all by default. Filter by using `id=${userId}` to get a specific user. 
