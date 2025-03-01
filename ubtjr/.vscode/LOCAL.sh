#!/bin/bash
echo "Comando para Correr backend Vibrant Local"
cd ~/Scripts/nodejs/ubtjr/ && ln -fs .vscode/.local.env .env
npm run local:debug