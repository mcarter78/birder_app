web: /bin/bash -c '(nohup ssh -n -i compose-heroku-key -o StrictHostKeyChecking=no \
-N compose@aws-us-east-1-portal.12.dblayer.com -p 10737 -L 127.0.0.2:28015:10.133.216.3:28015 &); node api/server.js'
