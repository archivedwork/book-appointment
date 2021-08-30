## Book Appointment Application
###
#### Description
```
Book Appointment application helps enterprises that seeking for a web based application 
that offer an appointments to clients.
```
###
#### Functionality
```
When the client enter his data and press submit button, 
the application record the clients information in a database(AWS DynamoDB)
then based on client DateOfBirth the application generate an access code 
which will be send to client through email (SendGrid) telling him/her that if he/she want to cancel the appointment must visit link and enter the access code to cancel the appointment
```

###
#### Technologies
`- Spring Boot`
`- AWS (DynamoDB)`
`- Angular 12`
`- Java 11`

###
#### Configuration
```
Make sure that AWS dynamoDb accessKey and secretKey are set in spring boot 
config/AwsConfig.java
```

###
#### How To Run?
`- Angular` `$ npm i` then `$ npm run start`
####
`- Spring Boot` `run as java project`




###
#### Date and Time
####
`Summer Holiday 2021, July and August, Budapest`

####
`Latest Update: 30-Aug-2021, Monday, Budapest`
####
`Author: Mohammed`