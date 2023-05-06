# Studying Docker
I created this repository for self-study of the docker 

If you want install docker 
you make download in this site 

https://www.docker.com

# Basic Docker Commands  
* This command show version and information about docker you computer   
```shell
docker version
```

* Show all container
```shell
docker ps -a
```

* Show run container
```shell
docker ps
```

* Show all images
```shell
docker images
```

* Create and start docker
```shell
docker run [name_you_docker]
```

Exampl: docker run hello-world\
Then you well see

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/

* This command download image
```shell
docker pull [name_you_docker]
```

You can search for the docker you are interested in at\
https://hub.docker.com

* Removing the container
```shell
docker rm id_container
```

* Run container and connect terminal
```shell
dokcer run -i -t busybox
dokcer run -it busybox
```
-i interactiv\
-t terminal

* Removing all container
```shell
docker container prune
```

* Running the container in the background 
```shell
docker run -d [name_you_docker]
```
-d daemon

* See details of the container
```shell
docker container inspect [id_container]
```

* See details of the container with filter the information you need
```shell
docker container inspect [id_container] | grep [information_you_need]
```
!!! working only linux and mack !!! 

* Stop container
```shell
docker stop [id_container]/[name_docker] 
```

* Stopping multiple containers
```shell
docker stop [id_container]/[name_docker] [id_container]/[name_docker]
```


Extreme case
```shell
docker kill [id_container]/[name_docker]
```

* Start an additional process in runing container
```shell
docker exec -it [id_container]/[name_container] [process]
```

Exapml: docker exec -it [id_container] bash

* Assign a custom name to a container
```shell
dokcer run -d --name [custom_name] [name_container]
```
--name \
Exampl: dokcer run -d --name mu_nginx nginx

# Publishing ports and connecting volumes

* Port forwarding 
```shell
docker run -p [port_in_computer:port_in_docker] [name_container]
```
-p port 

* Connecting Volumes
```shell
docke run -v \${[path_in_local_computer]}:[path_in_conatiner] [name_container]

docke run -v \${PWD}:[path_in_conatiner] [name_container]
```
-v volum\
Exampl: docker run -v ${PWD}:/usr/share/nginx/html -p 8080:80 -d nginx

* Automatic docker remover
```shell
dokcer run --rm [] [name_container]
```
--rm \
Exampl: docker run -it --rm busybox

* One form of recording large commands
```shell
docker run 
--name my-nginx 
-v \${PWD}:/usr/share/nginx/html 
-p 8888:80 
-d 
--rm 
nginx
```
!!! working only linux and mack !!!

* Add envirinent 
```sh
docker run -d -e [name_env]=[value] [name_image]
```
-e envariment

Exampl docker run -d -e MY_ENV_VARIABLE=test nginx

* Show all volume
```sh
docker volume ls 
```

* Show information about vokume
```sh
docker inspect [name_volume] 
```