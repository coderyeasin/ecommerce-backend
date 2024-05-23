## Please Follow this commands to run this project

First, clone this [Repository](https://github.com/coderyeasin/batch-3-assignment-2-coderyeasin.git) and then open this project in `VS Code` then install existing packages with `npm i` using the command line.

Tech stack: **TypeScript**, **Mongoose**, **Zod**, **Express**, **Es-Lint**,**Prettier**

`**Please follow API endpoint to get proper results**`

**For Products** `/api/products`
**Search Products** `/api/products?searchTerm=iphone || /api/products?searchTerm=?searchTerm=Makers Coffee [for more results]`
**Single Product** `/api/products/:productId`
**Update a Product** `/api/products/:productId`
**Delete a Product** `/api/products/:productId`

**For Orders** `/api/orders`
**Search Orders** `/api/orders?email=level2@programming-hero.com`

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

