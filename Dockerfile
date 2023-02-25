FROM openjdk:17-jdk-alpine
EXPOSE 8080
ADD build/libs/chatapp-0.0.1-SNAPSHOT.jar chatapp.jar

ENTRYPOINT ["java","-jar","chatapp.jar"]