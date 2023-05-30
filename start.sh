#!/bin/bash

export DOCKER_CONFIG="${HOME}/.docker-games-frontend"
# on first deploy, go to machine and enter docker login here
# docker login -u <TOKEN> -p <TOKEN> registry.fritsler.ru
mv -f ./deploy/docker-compose.yaml .
docker compose pull
# todo remove old images
docker compose up -d
