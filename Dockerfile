FROM ubuntu
WORKDIR /uiapp
COPY . /uiapp
RUN npm install
EXPOSE 8080
CMD ["npm", "run" , "dev"]
