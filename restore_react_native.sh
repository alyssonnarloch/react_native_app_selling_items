#!/bin/bash
# Resolve problema ao executar react-native start

echo "Running..."

partExecution=1;

echo "Part $partExecution-> watchman watch-del-all"
watchman watch-del-all

partExecution=$(( partExecution + 1 ))

echo "Part $partExecution-> watchman shutdown-server"
watchman shutdown-server

partExecution=$(( partExecution + 1 ))

echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_watches
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_queued_events
echo 999999 | sudo tee -a /proc/sys/fs/inotify/max_user_instances

echo "Done"