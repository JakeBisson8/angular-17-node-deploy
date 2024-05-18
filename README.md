# angular-17-node-deploy

### About
An Angular 17 todo application with a NodeJS HTTP/HTTPS web server.

### Inspiration
Prior to this project, I had little knowledge on the process for deploying an Angular application to a self-hosted production environment. 
I wanted to broaden my knowledge and explore this topic and this project is the result.

### Installation
1. Clone the repo.
```bash
# SSH
git clone git@github.com:JakeBisson8/angular-17-node-deploy.git

# HTTPS
git clone https://github.com/JakeBisson8/angular-17-node-deploy.git
```
2. Install dependencies for Angular project.
```bash
npm install
```
3. Change directory to `server/` and Install dependencies for web server.
```bash
cd ./server
npm install
```
4. From here you can either choose to run the web server for HTTP or HTTPS by following the steps in their respective sections below. Optionally, you can try running the app in development mode by runnin the following command from the top-level folder.
```bash
npm run start
```

### Run HTTP Server
For a quick and easy demonstration you can choose to run the web server using HTTP by following the steps below.  

1. Build the angular application by running the following command at the top-level folder.
```bash
npm run build
```
2. Make a copy of `./server/.env.example` and name it `.env`. As we aren't setting up HTTPS, you don't need to modify any values in `.env`.
3. Run the web server.
```bash
cd ./server
npm run start
```
4. Navigate to the app in the web browser: http://localhost.

### Run HTTPS Server
For a longer, but more complete demonstration you can choose to run the web server using HTTPS by following the steps below.  
1. Build the angular application by running the following command at the top-level folder.
```bash
npm run build
```
2. Install openssl following the instructions here: [https://tecadmin.net/install-openssl-on-windows/](https://tecadmin.net/install-openssl-on-windows/).
3. Generate a self-signed SSL certificate and private key following instructions here: [https://gist.github.com/taoyuan/39d9bc24bafc8cc45663683eae36eb1a](https://gist.github.com/taoyuan/39d9bc24bafc8cc45663683eae36eb1a).
4. Drop your `.crt` file and `.key` file inside of `./server/ssl`.
5. Make a copy of `./server/.env.example` and name it `.env`.
6. Update the `SSL_CERT_NAME` and `SSL_KEY_NAME` values inside of `.env` to the names of the `.crt` and `.key` files in `./server/ssl`. It must just be the filenames as the server knows to read them from the `./server/ssl` folder.
```conf
SSL_CERT_NAME="cert.crt"
SSL_KEY_NAME="cert.key"
```
7. Run the web server.
```bash
cd ./server
npm run start
```
8. Navigate to the app in the web browser: https://localhost. You will probably get an error from chrome saying the connection is insecure. You can still proceed to the site. This error is due to the fact that we generated a self-signed certificate which is untrusted by the browser for security reasons. Using a valid certificate from a trusted certificate authority would remove this error.

### Template
The angular app was built using my own starter template: [angular-17-app-template](https://github.com/JakeBisson8/angular-17-app-template).

### License
[MIT](https://github.com/JakeBisson8/angular-17-app-template/blob/main/LICENSE)
[https://choosealicense.com/licenses/mit/](https://choosealicense.com/licenses/mit/)

