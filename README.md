# Paimon docker-compose
> docker-compose node.js, nginx, mysql, mongodb.


Um docker-conposer configurado e pronto para uso no seu desenvolvimento local node | nginx | mysql | mongodb.



### Configuração

- Renomeie o arquivo `example.env` para `.env`

- Configure as seguintes variaveis de ambiente `.env`


```
NODEJS_VERSION=latest
NODEJS_ENV=development
NODEJS_VOLUMES_FILES=.
NODEJS_PORT=3000

NGINX_BACKEND_VERSION=latest
NGINX_BACKEND_VOLUMES_NGINX_CONF=./.docker/nginx-backend/nginx.conf
NGINX_BACKEND_VOLUMES_NGINX_SSL_CERTS=.
NGINX_BACKEND_PORT=8010
NGINX_BACKEND_SSL_PORT=4410

NGINX_FRONTEND_VERSION=latest
NGINX_FRONTEND_VOLUMES_FILES=.
NGINX_FRONTEND_VOLUMES_NGINX_CONF=./.docker/nginx-frontend/nginx.conf
NGINX_FRONTEND_VOLUMES_NGINX_SSL_CERTS=.
NGINX_FRONTEND_PORT=8020
NGINX_FRONTEND_SSL_PORT=4420

MYSQL_VERSION=latest
MYSQL_DATABASE=development
MYSQL_USER=development
MYSQL_PASSWORD=development
MYSQL_ROOT_PASSWORD=development
MYSQL_PORT=3306

MONGO_VERSION=latest
MONGO_DATABASE=development
MONGO_USERNAME=development
MONGO_PASSWORD=development
MONGO_ROOT_USERNAME=development
MONGO_ROOT_PASSWORD=development
MONGO_PORT=27017

```



## Como usar

OS X & Linux:

```sh
docker-compose --env-file .env up
```

Windows:

```sh
docker-compose --env-file .env up
```

## Como configurar

configure o caminho do projeto node.js `.env

```
NODEJS_VOLUMES_FILES=/home/user/my_project_nodejs
```

## SSL

configure o caminho de onde se encontra o certificado `.env`

```
NGINX_VOLUMES_NGINX_SSL_CERTS=/home/user/my_certs
```

Retire os comentarios ./docker-compose.yml

```
- "${NGINX_SSL_PORT}:443"
```

```
- "${NGINX_VOLUMES_NGINX_SSL_CERTS}:/etc/nginx/certs"
```

Retire os comentarios ./docker/nginx/nginx.conf

```
    server {
        listen       443 ssl;
        server_name  localhost;

        ssl_certificate /etc/nginx/certs/localhost.crt;
        ssl_certificate_key /etc/nginx/certs/localhost.key;

        location / {
            proxy_pass http://nodejs;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
        }
    }
```



## Histórico
* 1.0.1
    * atualização nginx-frontend. 
* 1.0.0
    * novo container nginx-backend.
    * novo container nginx-frontend.
    * alteração pasta docker, .docker.
    * alteração arquivo .env, example.env.
* 0.0.2
    * correção portas e configuração correta expose das portas.
    * suporte SSL nginx.
* 0.0.1
    * Inicio projeto.

## Meta

Giulio Martinelli – [@Linkedin](https://www.linkedin.com/in/giulioaugustomartinelli)

[https://github.com/giuliomartinelli](https://github.com/giuliomartinelli/)
