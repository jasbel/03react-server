…or create a new repository on the command line
echo "# 03react-server" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/jasbel/03react.git
git push -u origin main
                
…or push an existing repository from the command line
git remote add origin https://github.com/jasbel/03react.git
git branch -M main
git push -u origin main

# Socket Server

Este backend contiene todo lo necesario para configurar un servidor de express + socket.io.

Cualquier conexión adicional de sockets, se puede hacer en el archivo ```models/sockets.js``` y cualquier middleware adicional de express, se puede realizar en el archivo ```models/server.js```

npm i uuid //id-generator
