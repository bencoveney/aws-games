FROM openjdk:jre

ENV JAVA_TOOL_OPTIONS "-Xmx1024M -Xms1024M"

RUN apt-get update

RUN apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_15.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh \
  && nodejs -v \
  && npm -v \
  && npm install minecraft-wrap

WORKDIR /minecraft

COPY ./server.properties /server.properties
COPY ./eula.txt /eula.txt
COPY ./wrapper.js /wrapper.js

ENTRYPOINT ["/wrapper.js"]
