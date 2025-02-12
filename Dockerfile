FROM node:22-alpine3.19

WORKDIR /app

COPY . .

RUN npm i -f

RUN npm run build

CMD ["npm","run","start"]
