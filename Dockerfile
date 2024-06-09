# Establecer la imagen base
FROM node:lts

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de la aplicación al contenedor
COPY package*.json ./ or yarn.lock * ./

# Instalar las dependencias de la aplicación
RUN npm install or yarn install

# Copiar el resto de los archivos de la aplicación al contenedor
COPY . .

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE ${APP_PORT}

# Comando para iniciar la aplicación
CMD [ "npm", "dev", "or", "yarn", "dev"]