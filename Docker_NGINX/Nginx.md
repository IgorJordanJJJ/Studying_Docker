# Create Nginx Container

This you will search images nginx\
https://hub.docker.com/search?q=nginx

* Create docker ngnix\
docker run nginx

* Running the container nginx in the background \
docker run -d nginx
-d demon

* See details of the container nginx\
docker container inspect [id_container_nginx]

* See details of the container nginx with filter the information about IPAddress\
docker container inspect [id_container] | grep IPAddress

* Start an additional process in runing container
docker exec -it [id_container]/[name_container] [process]

Exapml: docker exec -it [id_container] bash

Show base html nginx\
cd /usr/share/nginx/html/

* Assign a custom name to a container\
Exampl: dokcer run -d --name mu_nginx nginx

* Port forwarding nginx \
docker run -p 8080:80 nginx\
Exampl: docker run -v ${PWD}:/usr/share/nginx/html -p 8080:80 -d nginx