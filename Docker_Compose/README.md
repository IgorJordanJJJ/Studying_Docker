# Creating Docker Compose

Dokcer Compose - this is a declarative approach 

Creat yaml file 2 ways

* 1 ways it list 

Exampl: 

```yml

fruis:
    -banana
    -apple
    -orange

```

* 2 ways it dictionary

```yml

pen:
    color: yellow
    model: 
        type: pen
        material: plastic
    price: 2

```
# Appearance Docker-Compose.yaml
Exampl Docker-Compose.yml

```yml

version: '3'
services:
# app - this tervise or conatiner 
    app: 
    # this description container 
    # build: ./app criate container based on docker file in derictory ./app
        build: ./app 
    mongo:
    # image: mongo criate conatiner based images mongo
        image: mongo

```
Example in folder Exampl_1

* Run docker-compose
```shell
docker-compose up
```
* Run demon docker-compose 
```shell
docker-compose up -d
```
* Delete and remuve container
```shell
docker-compose down
```
* Build new image
```shell
docker-compose up -d --build
```
--build 

Example: frontend

```dockerfile
FROM node:alpine

WORKDIR /app
# port in container 
EXPOSE 3000

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "npm", "run", "dev" ]

```
Example: backend
```dockerfile 
FROM node:alpine

WORKDIR /app

EXPOSE 5000

COPY package* ./

RUN npm install

COPY . . 

CMD ["nmp", "run", "dev" ]

```





