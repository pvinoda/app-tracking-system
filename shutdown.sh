#! /bin/bash
kill $(ps aux | grep npm | awk '{print $1}')
kill $(ps aux | grep node | awk '{print $1}')
kill $(ps aux | grep flask | awk '{print $1}')
