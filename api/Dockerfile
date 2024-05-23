FROM node:20.13.1

COPY ./api/package.json ./api/yarn.lock ./

RUN yarn install --frozen-lockfile

COPY ./api .

CMD yarn run dev
