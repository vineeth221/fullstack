#!/bin/bash

rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env' \
-e "ssh -i ~/.ssh/host-my-app.pem" \
. ubuntu@ec2-13-126-15-87.ap-south-1.compute.amazonaws.com:~/app
