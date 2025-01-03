This is a project for Backend UsingJavascript
echo "" > app.js -> Used to create file in terminl
nodemon : whenever the changes maid in the file then no need to restart the server 
manually, nodemon automatically restart the server so we can see the latest changes made in the files

* npm i -D nodemon : to install Development nodemon 

Git COMMANDS:
git status : to check the status 
git add . : It adds the files to git Repo
git commit - m "some comments" : we can assign the comments for our git puch so that we can track the changes why .
git push : finally it puches all the changed file to Git

*.prettierignore - it shows in what all the files we should not apply prettier

* POINTS TO REMEMBER TO CONNECT DB 
1. Always use try catch to connect db
2. use Asyn call bcz Db in another region so it will take time

*  types of DB COnnection
1. we can write all db connection code inside the inex.j file
2. We can create a DB folder/ file to dtore all db info and then we can import that db file in the index,js 

***
Terminate the Process:
exit(1)

. The Node.js process is terminated, meaning the program stops running entirely.
. Any remaining asynchronous operations (like database queries or HTTP requests) are  not completed.

1.0: Indicates a successful termination.
2.Non-zero values (e.g., 1, 2, etc.): Indicate an error or abnormal termination. For example, 1 is commonly used for general errors.
3.If you don't specify a code, the default is 0.

*** await : await only works inside async functions:
1. The await keyword is used in JavaScript and TypeScript to pause the execution of an async function until a Promise is resolved or rejected. It allows you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and debug.
2. The await keyword pauses the execution of the async function until the Promise returned by mongoose.connect is resolved.
3. If the connection is successful, the program continues to the next line.
4. If the connection fails, an error is thrown, which can be caught in the catch block.

*Why Use await?

Without await, you would need to use .then and .catch

**.env file : Ensure that your .env file is located in the root directory of the project (C:\Nanda\MyProjects\Learning_youtube_P1).

** restart Server 
1. whenever we do some changes for file nodemon automatically restart the server BUT 
2. when we do any changes in .env file it require manuall restart of server

EXPRESS:
Express is a web application framework for Node.js.
It provides a robust set of features for building web and mobile applications.
Essentially, it simplifies the process of creating server-side applications.


API:
1.Express: This framework itself is a tool for building APIs.
2.Route Handlers: Functions in Express that process requests (e.g., app.get('/api/...')) are APIs.
3.AsyncHandler: Utility to simplify error handling in API routes.
4.ApiError and ApiResponse: Supporting classes used to handle and format API errors and responses consistently.

*bcrypt : A library to help you hash passwords.