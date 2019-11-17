# {{projectName}}


## Build Setup

```bash
# Install dependencies
npm install

# Start developing with REPL
npm run dev

# Start production
npm start

# Run unit tests
npm test

# Run continuous test mode
npm run ci

# Run ESLint
npm run lint

# Run Prettier
npm run prettier
```

## Run in Docker

**Build Docker image**

```bash
$ docker build -t {{projectName}} .
```

**Start container**

```bash
$ docker run -d {{projectName}}
```

## References
This project is created from the moleculer template: https://github.com/juanmcristobal/moleculer-service-template