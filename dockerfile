FROM node:trixie

WORKDIR /app/

RUN npm install next

ENTRYPOINT [ "npm", "run","start" ]