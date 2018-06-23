# Monorepo example
This is an example project intended to test out a possible monorepo solution. It's using yarn workspaces and saparating services and packages. Services contain web apps while packages workspace holds shared modules used by the services and packages themselves...

## Instructions
Install dependencies from the root of the project
```
yarn
```

start the `app1` service
```
yarn app1
```

## Hot loading
Next.js framework is used in the background which also supports hot reloading. When contents of services or packages is modified in the editor the changes can be seen in the browser... :)

## jest tests
failing ATM due to transpilation errors
