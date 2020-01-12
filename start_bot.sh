#!/bin/bash

while true; do
	nodejs index.js
	echo ""
	echo "Reactivando automaticamente en 5 segundos..."
	echo "Pulsa Ctrl + C para cancelar."
	sleep 5
done
