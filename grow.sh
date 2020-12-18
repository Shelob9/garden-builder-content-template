# This file builds the digital garden

DIR="digitial-garden-builder"
if [ -d "$DIR" ]; then
  echo "Already cloned"
else
  git clone --depth 1 git@github.com:Shelob9/digitial-garden-builder.git
fi



