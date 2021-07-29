CHC -Full Stack Developer task
Build an End-To-End mini-micro services system and a basic UI ReactJS app for the user.
The mini-MS system contains 2 microservices that communicates with each other.

The assignment:
 Create a MS named “client-arrays-service”–which expects user API Calls.
 In “client-arrays-service” create a POST API that can receive a number between 1-1000.
 Create a function that gets this number and return a reversed ordered array in the range of
[1, received number) -no duplications, received number is NOT included in range.
Example: for the received number ‘5’–return a response of [4, 3, 2, 1]
Please make sure this function is performant, try to achieve an O(N)running time.
 Create an additional MS name “log-service”.
 The “log-service” should get a request from “client-arrays-service” and log it (console log is
enough).
 “client-arrays-service” should send the array to “service-log”.
 “client-arrays-service” should return the array result to the user as well.

Please use the following:
•Node.JS (TS, Express)
•ReactJS

Special notes:
 Please make sure to create async requests and handle it over the service accordingly.
 Please make sure the path for “log-service” should come from a configuration file.
 ReactJS basic app should include a basic app, no more than container and component single
files as common structure.
 UI: Please include an input text box, and a send button. Please print to console the reply
from the “client-arrays-service”.

Bonus:
 Use WebSocket to communicate between the UI and the “client-arrays-service”.