# Deploying only a react web application using amazon ec2 instance

1. create a ec2 instance in aws NOTE: make sure to select the machine as UBANTU.
2. After creating the instance connect that with your cmd using the ssh link and the .pem file which was created at the point of creating an instance.
3. make sure you install    sudo   command is : apt install sudo
4. after installing enter sudo su for enabling super user which makes sure that you should not enter sudo everytime of the command
5. update the sudo to staying up to date command : sudo apt-get update
6. for installing git in ubuntu cmd : apt-get intall git
7. clone your website which you wanna deploy on ubuntu cmd : git clone respositoryLINK.
8. after closing start your react app after the react app has started successfully go back to your ec2 copy the ip address example : 4.17.25.35
9. and paste it with the port number which is 3000 final link will be : 4.17.25.35:3000
10. if the app wont run make sure you have made changes in the security inbond rules in the ec2 instacne and set that to 3000 and anywhere 
