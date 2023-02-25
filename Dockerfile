FROM openjdk:17-jdk-alpine
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} chatapp.jar

ENTRYPOINT ["java","-jar","/chatapp.jar"]