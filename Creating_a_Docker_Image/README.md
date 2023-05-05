# Creating a Docker Image

BASE SETTINGS DOCKER FILE

Exampl in folder Exampl_1

FROM python:alpine\
FROM base_image:version

WORKDIR /app\
WORKDIR path  
Create directory  in container and change diretory

COPY . . \
COPY path_local_computer path_in_container\
Copy file where local computer in path container

CMD [ "python", "main.py" ]\
CDM ["process", "file"] \
Run the command process complate file

* Creating dokcer image\
dokcer build [path_to_directory_were_docker_file]\
Exampl: docker build .

If you Dockerfile have other name you can need other command\
dokcer build [path_to_directory_were_docker_file] -f [name_docker_file]\
Exampl: docker build . -f myDockerfile

* Add name and tag in images
docker build . -t [name_images]:[optional_teg] \
docker build . -t my-calendar:4.1.3\
-t tag

If dont add tag docker add tag latest\
docker build . -t [name_images]

