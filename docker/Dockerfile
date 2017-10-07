FROM ubuntu

RUN bash -xc "apt-get update ; apt-get install -y man inotify-tools tmux vim bash-completion curl ; curl -sL https://deb.nodesource.com/setup_8.x | bash - ; apt-get update ; apt-get install -y nodejs ; update-alternatives --install /usr/bin/node node /usr/bin/nodejs 1 ; cp /usr/share/doc/tmux/examples/screen-keys.conf /etc/tmux.conf ; cp /usr/share/doc/tmux/examples/bash_completion_tmux.sh /etc/bash_completion.d/ ; echo 'source /etc/bash_completion' >> /root/.bashrc"

COPY docker/entrypoint.sh /

CMD ["bash"]
ENTRYPOINT ["/entrypoint.sh"]

