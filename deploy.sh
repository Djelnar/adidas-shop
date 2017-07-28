ssh root@82.202.212.41 '
    cd /root/adidas-shop;
    git pull;
    npm install;
    forever stop server.js;
    webpack -p;
    forever start server.js
'