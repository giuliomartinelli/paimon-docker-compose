# Paimon docker-compose
> docker-compose node.js, nginx, mysql, mongodb.


Um docker-conposer configurado e pronto para uso no seu desenvolvimento local node | nginx | mysql | mongodb.


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

configure o caminho do projeto node.js ./docker/.env.docker.local

```
NODEJS_VOLUMES_FILES=/home/user/my_project_nodejs
```

## SSL

configure o caminho de onde se encontra o certificado ./docker/.env.docker.local

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
