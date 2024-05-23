## Please Follow this commands to run this project

First, clone this [Repository](https://github.com/coderyeasin/batch-3-assignment-2-coderyeasin.git) and then open this project in `VS Code` then install existing packages with `npm i` using the command line.

Tech stack: **TypeScript**, **Mongoose**, **Zod**, **Express**, **Es-Lint**,**Prettier**

`Folder structure`

``` 
src
 app
 modules
  order
   order.interface.ts
   order.model.ts
   order.service.ts
   order.controller.ts
   order.route.ts
   order.validation.ts
  product
   product.interface.ts
   product.model.ts
   product.service.ts
   product.controller.ts
   product.route.ts
   product.validation.ts 
 app.ts
 server.ts
```
After successfully installing packages done you need to setup the `.env` file, it has three security options like the below: 

```
     NODE_ENV
     PORT
     DATABASE_URL
```
provide the above security key in the **environment** file, you're reaching the goal.

**Following the Command to run this project**

``` 
npm run start:dev 
```

**Following the Command to convert files into JS files**

``` 
npm run start:prod 
```

**Following the Command to check errors in this project**

``` 
npm run lint 
```

**Following the Command to fix errors in this project**

``` 
npm run lint:fix 
```

**Following the Command to beautify this project**

```
 npm run prettier 
``` 

## Deployed

Check it out : [E-Commerce Server](https://batch-3-assignment-2-coderyeasin.vercel.app/).

## **Happy Journey!**

