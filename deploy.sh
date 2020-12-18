# This file builds the digital garden

## clone garden builder
echo "Cloning from github"
DIR="digitial-garden-builder"
if [ -d "$DIR" ]; then
  echo 'Builder exists'
else
  echo 'Builder does not exist';
  echo 'Please grow first';
  exit 1
fi


## Copy output file to client
OUT=digitial-garden-builder/client/out
if test -f "$OUT"; then
  echo 'Output dir does not exist';
  echo 'Please grow more';
  exit 1
fi

FINAL_OUT=docs
if test -f "$FINAL_OUT"; then
  rm -rf docs
  exit 1
fi

echo 'Copying to docs';
cp -r digitial-garden-builder/client/out docs
echo 'Copied to docs';
git add .
git commit -m "Build garden"

#git push


