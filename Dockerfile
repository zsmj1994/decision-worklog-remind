FROM node
LABEL maintainer="zsmj1994@gmail.com"
LABEL description="worklog-remind-for-dec"
LABEL version="1.0"
WORKDIR /dailer/docker-worklog-remind/
ENV TZ=Asia/Shanghai
RUN git clone https://zsmj1994:St273134@github.com/zsmj1994/decision-worklog-remind.git
COPY package*.json ./
RUN npm install
COPY . ./
EXPOSE 8088
CMD [ "npm", "start"]