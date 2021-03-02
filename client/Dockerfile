FROM node

WORKDIR /usr/app/

COPY ["package.json", "yarn.lock", "./"]

RUN npm install
COPY . .

CMD ["npm", "start"]
