docker run --rm -it -v `pwd`:/app imagemagick convert -resize 48 /app/meet-clock-icon128.png /app/meet-clock-icon48.png
docker run --rm -it -v `pwd`:/app imagemagick convert -resize 32 /app/meet-clock-icon128.png /app/meet-clock-icon32.png
docker run --rm -it -v `pwd`:/app imagemagick convert -resize 16 /app/meet-clock-icon128.png /app/meet-clock-icon16.png