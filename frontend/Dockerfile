# Utilisez une image Angular de base
FROM node:14 AS build

# Créez le répertoire de travail
WORKDIR /app

# Copiez le fichier package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installez les dépendances
RUN npm install

# Copiez le reste des fichiers de l'application
COPY . .

# Construisez l'application Angular
RUN npm run build

# Utilisez une image légère Nginx pour servir l'application construite
FROM nginx:alpine

# Copiez les fichiers construits depuis le build
COPY --from=build /app/dist /usr/share/nginx/html

# Exposez le port sur lequel Nginx sera en écoute
EXPOSE 80

# Aucune commande de démarrage spécifique nécessaire, car l'image nginx:alpine le gère par défaut