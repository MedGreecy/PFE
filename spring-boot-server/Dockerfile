FROM openjdk:8-jdk
WORKDIR /opt
ENV DBNAME=${DBNAME}
ENV DBHOST=${DBHOST}
ENV DBUSERNAME=${DBUSERNAME}
ENV DBPASSWD=${DBPASSWD}
ARG JAR_FILE=./target/spring-boot-jpa-postgresql-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar", "-DDBPASSWD=${DBPASSWD} -DDBHOST=${DBHOST} -DDBNAME=${DBNAME} -DDBUSERNAME=${DBUSERNAME}"]

