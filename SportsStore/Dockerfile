FROM node:12.15.0

RUN mkdir -p /usr/src/sportsstore

COPY dist/sports-store/browser /usr/src/sportsstore/dist/sportsstore
COPY ssl /usr/src/sportsstore/ssl

COPY authMiddleware.js /usr/src/sportsstore
COPY data.json /usr/src/sportsstore
COPY server.ts /usr/src/sportsstore/server.ts
COPY deploy-package.json /usr/src/sportsstore/package.json

WORKDIR /usr/src/sportsstore

RUN npm install

EXPOSE 80

CMD ["node", "server.ts"]