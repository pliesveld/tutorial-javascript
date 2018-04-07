#!/bin/bash

inotifywait -r -m -e modify /scripts | 
while read path _ file; do 
	[[ $file =~ ^.*js$ && ! $file =~ ^.*node_modules*$ ]] && {
        printf '********%-30s**************\n' "$file"
		echo '***************************' 
		node $path$file
	}
	[[ $file =~ ^.*sh$ ]] && {
        printf '********%-30s**************\n' "$file"
		echo '***************************' 
		bash $path$file
	}

done



