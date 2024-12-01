## 1. Project Description
  # PH University Management Projec
  # Tecnology: NodeJs,ExpressJs,Typescript,Mongoose,MongoDB

### 2. Install Dependencies

Once you have cloned the repository, install the necessary dependencies by running:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root of the project and add the following variables:

```env
PORT=5000
DB_URL=
```

### 4. Running the Project

#### Development Mode

To run the project in development mode with hot reloading, use:

```bash
npm run dev
```

This will start the server and allow you to make changes and see them reflected immediately.

#### Production Mode

To run the project in production mode, first build the TypeScript code:

```bash
npm run build
```

Then start the server:

```bash
npm start
```

### 5. Linting & Code Quality

#### Linting

To check for linting issues, run the following command:

```bash
npm run lint
```

#### Fixing Linting Issues

To automatically fix linting issues, use:

```bash
npm run lint:fix
```

#### Formatting Code

To format the code according to the predefined style guide, run:

```bash
npm run format
```

### 9. Directory Structure

```
/src
  /modules
    ...
  /config
    index.ts
  app.ts
  server.ts
/package.json
/vercel.json
/.env
```
