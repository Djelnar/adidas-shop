ssh root@82.202.212.41 '
    cd /root/adidas-shop;
    git pull;
    npm install;
    npm run build;
    forever stop server.js;
    forever start server.js
'