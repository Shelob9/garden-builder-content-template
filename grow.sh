# This file builds the digital garden

## clone garden builder
echo "Cloning from github"
DIR="digitial-garden-builder"
if [ -d "$DIR" ]; then
  rm -rf digitial-garden-builder
fi

git clone --depth 1 git@github.com:Shelob9/digitial-garden-builder.git


## Copy env file to client
FILE=digitial-garden-builder/client/.env
if test -f "$FILE"; then
    rm digitial-garden-builder/client/.env
fi

cp client.env digitial-garden-builder/client/.env

##
cd digitial-garden-builder 
yarn
yarn client build
