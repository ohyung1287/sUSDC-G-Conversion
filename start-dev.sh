#\/usr/bin/bash

BLUE='\033[0;34m'
BBLUE='\033[1;34m'
BGREEN='\033[1;32m'
BYELLOW='\033[1;33m'
BRED='\033[1;31m'
NC='\033[0m'

printf "${BLUE}
 _____ _                     
|  __ \ |                    
| |  \/ |_   ___      ____ _ 
| | __| | | | \ \ /\ / / _\` |
| |_\ \ | |_| |\ V  V / (_| |
 \____/_|\__,_| \_/\_/ \__,_|
                                                                  
${BBLUE}Let's make sure git is installed 📦
${NC}"

# Verify if git is installed
if ! [ -x "$(command -v git)" ]; then
  printf "${BRED}Git is not installed. Please install it before running this script.
${NC}"
  exit 1
fi

printf "${BGREEN}Let's make sure the branch is up to date 🔄
${NC}"

# Make sure the branch is up to date
git pull

printf "${BYELLOW}Let's verify if Yarn is installed 📦
${NC}"

# Verify if Yarn is installed
if ! [ -x "$(command -v yarn)" ]; then
  printf "${BRED}Yarn is not installed. Please install it before running this script.
${NC}"
  exit 1
fi

printf "${BGREEN}Let's install the dependencies 📦
${NC}"

# Install the dependencies
yarn

printf "${BBLUE}Let's make sure the dependencies are up to date 📦
${NC}"

# Make sure the dependencies are up to date
yarn outdated


printf "${BYELLOW}Let's build the project 🏗️
${NC}"

# Build the project
yarn build

printf "${BGREEN}Let's inject our local development environment variables 📦
${NC}"

# Inject our local development environment variables
if [ -f .env ]; then
  export $(echo $(cat .env | sed 's/#.*//g'| xargs) | envsubst)
fi

printf "${BBLUE}Let's start the development server 🚀
${NC}"

# Start the development server
yarn start