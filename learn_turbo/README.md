# Things to note 

1.) npx create-turbo@latest
2.) in root package.json we define our workspace
2.) since we require a single frontend we will del either docs or web folder 

# Things to change while dealing with backend 

1.)create http-server and ws-server folders if you are using both express and websocket 

2.)do npm init -y and npx tsc --init and uncomment rootDir and outDir

3.)in both the backends paste this code in the tsconfig and del the prev config code

```
{
  "extends": "@repo/typescript-config/base.json",
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist"
  }
}
```

4.) now go to package.json of both the backends and do 

```
"scripts": {
    "build": "tsc -b",
    "start": "node dist/index.js",
    "dev": "tsc -b && node dist/index.js"

  },

  ```

  5.) in the backend folders and react folders create turbo.json and paste this

  ```
{
  "extends": ["//"],
  "tasks": {
    "build": {
      "outputs": ["dist/**"]
    }
  }
}
  ```
.next folder is made during the build process of next apps like web and docs in turborepo
so for backend folder we need to tell turbo repo to make .dist folder a part of build


