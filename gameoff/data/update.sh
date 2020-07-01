#!/bin/bash
for i in {1..43}
do
   curl https://api.github.com/repos/github/game-off-2012/forks?page=$i >> forks.json.bk
done
sed -n '1!N; s/\]\n\[/,\n/; p' forks.json.bk > forks.json
rm forks.json.bk