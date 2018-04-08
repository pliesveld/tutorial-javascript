#!/bin/bash

(( EXECUTION=$(date +%s) ))
(( CHECK=$(date +%s) ))


inotifywait -r -m -e close_write,moved_to,create,modify /scripts | 
while read path event file; do 
	[[ $file =~ ^.*js$ && ! $file =~ ^.*node_modules*$ ]] && {

        (( CHECK=$(date +%s) ))

        if [[ $CHECK -gt $EXECUTION ]]; then
            printf '********%-30s**************\n' "$file"

            (( CHECK=$(date +%s) ))
            (( EXECUTION=$(date +%s) + 3 ))

            (
                cd $path
		        node -i - < $file
            )
            echo '***************************' 
        fi
	}
done



