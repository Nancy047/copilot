FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]