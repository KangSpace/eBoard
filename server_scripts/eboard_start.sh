# !bash
# Run script at System started:
# 1. add rc.local
# sudo vim /etc/rc.local

# 2. content
# sh /usr/docs/eBoard/eboard_start.sh


echo | (cd /usr/docs/eBoard/eBoard_main/ && nohup npm run start > /usr/docs/eBoard/nohup.log 2>&1 &)