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

COPY package*.json ./

RUN npm install

COPY . . 

CMD ["npm", "run", "dev" ]

```

Example: yml file 
```yml
version: '3'

services:
  frontend:
    build: ./frontend
    restart: always
    ports:
      - '3000:3000'
  api:
    build: ./api
    restart: always
    ports:
      - '5555:5000'
    depends_on:
      - mysql
  mysql:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: time_db
    volumes:
      - mysql_data:/var/lib/mysql
  adminer:
    image: adminer
    restart: always
    ports:
      - '8888:8080'

volumes:
  mysql_data:
```

Example: yml file 
```yml
version: '3'

services:
  frontend:
    build: ./frontend
    restart: always
    ports:
      - '3000:3000'
  api:
    build: ./api
    restart: always
    ports:
      - '5555:5000'
    depends_on:
      - mysql
  mysql:
    image: mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: password
      MYSQL_DATABASE: time_db
    volumes:
      - mysql_data:/var/lib/mysql
  adminer:
    image: adminer
    restart: always
    ports:
      - '8888:8080'

volumes:
  mysql_data:
```