Project Name:
   BuyMe
Introduction:
   Authors: Meklit(meklitfrehun12@gmail.com)
            Meron(merontafer@gmail.com)
   https://www.blogger.com/blog/post/edit/2321392901481268116/8583710761750887026
   www.linkedin.com/in/meron-nigussie-b25050247

Installation
1. Clone repo
$ git clone https://github.com/meron123meron/amaze.git
$ cd amaze
2. Create .env File
duplicate .env.example in backend folder and rename it to .env
3. Setup MongoDB
Local MongoDB
Install it
In .env file update MONGODB_URI=mongodb://127.0.0.1/amaze
OR Atlas Cloud MongoDB
Create database at https://cloud.mongodb.com
In .env file update MONGODB_URI=mongodb+srv://your-db-connection
4. Run Backend
$ cd backend
$ npm install
$ npm start
5. Run Frontend
# open new terminal
$ cd frontend
$ npm install
$ npm start
