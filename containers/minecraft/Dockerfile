FROM openjdk:jre

ENV JAVA_TOOL_OPTIONS "-Xmx1024M -Xms1024M"

RUN apt-get update

RUN apt-get install -y curl \
  && curl -sL https://deb.nodesource.com/setup_15.x | bash - \
  && apt-get install -y nodejs \
  && curl -L https://www.npmjs.com/install.sh | sh \
  && nodejs -v \
  && npm -v

RUN mkdir -p /minecraft-scripts/

COPY ./downloadLatestVersion.js /minecraft-scripts/downloadLatestVersion.js

ENTRYPOINT ["/minecraft-scripts/downloadLatestVersion.js"]

# MAINTAINER Mark Ide Jr (https://www.mide.io)

# # Install the needed packages
# RUN apt-get update && \
#     apt-get -y install wget python3 && \
#     rm -rf /var/lib/apt/lists/*

# # Add Minecraft user
# WORKDIR "/minecraft"

# # Copy all the scripts into the container
# RUN mkdir -p /minecraft-scripts/
# COPY scripts/healthcheck.py /minecraft-scripts/healthcheck.py
# COPY scripts/minecraft_rcon.py /minecraft-scripts/minecraft_rcon.py
# COPY scripts/server_properties.py /minecraft-scripts/server_properties.py
# COPY scripts/wrapper.py /minecraft-scripts/wrapper.py

# RUN chmod +x /minecraft-scripts/healthcheck.py && \
#     chmod +x /minecraft-scripts/wrapper.py

# ENTRYPOINT ["/minecraft-scripts/wrapper.py"]

# HEALTHCHECK CMD --start-period=300 ["/minecraft-scripts/healthcheck.py"]