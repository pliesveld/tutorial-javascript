#!/bin/bash -x

tmux new-session -d -c /scripts -s 'vim' bash -c './run_scripts.sh ; bash'

tmux split-window -c /scripts -v -t vim bash -c 'vim . ; bash'

tmux attach-session -t vim

exec "$@"

