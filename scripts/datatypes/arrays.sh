#!/bin/bash


# array
node -p '[]'

node -p 'a = [] ; typeof a'

# Push elements on array
echo -n "Adding element to array: "
node -p "a = ['1', '2']; a.push('3'); a"

# Push elements on array
echo -n "Array elements after pop: "
node -p "a = ['1', '2', '3']; b = a.pop(); a"

echo -n "Element removed: "
node -p "a = ['1', '2', '3']; b = a.pop(); b"


