# To Create Recipes App In Backend

### Steps for setUp Process

#### Steps:
##### Git Repo SetUp:
   -**git init**.

   -connect local repo with remote repo(**git remote add origin** ,**git add .**,**git commit -m "commit msg"**,**git branch -M main**,**git push -u origin main**).

1.  **npm init** (or) **npm init -y**(this is shortcut) - Comment for install package.json modules.
2. Express Server Setup

        -Install express using **npm install express**.
        -Create .gitignore file add some unwanted files
        -Create server.js file
        -Import Express
        -Create Express app
        -Listen on a port for incoming requests.

3.nodemon Setup

4.MongoDb setup

        -Create a cluster on mongoDB Atlas
        -Create a database and collection
        -Get the connection string
        -install mongoose using **npm install mongoose**
        -connect to mongodb using mongoose server.js

5.MVC Architecture Setup --CodeSpliting

      1.split code server.js to app.js

      2.then split code app to MVC pattern(Model,Routers,Controllers)