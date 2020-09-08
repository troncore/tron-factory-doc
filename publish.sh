#!/bin/bash

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
source ~/.nvm/nvm.sh
nvm install "8.10.0"
nvm alias default "8.10.0"

# yarn global add docsify-cli
yarn start
