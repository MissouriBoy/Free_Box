# Free_Box
SD Hacks Project

This project is called the "FreeBox" based on the larger phrase, Free Juke-Box, where our goal was to create a music player that could play any music file type and play it synchronously to several users.
This project works mainly through the workings of websockets, which we utilized to manage the relationship between the server and the clients in terms of actionlisteners and having dynamic, synchronous change to several clients. We were planning to connect the server to an AWS bucket storage system to pull a large array of music to play one after another, but due to obstacles and the time crunch, we couldn't implement that function.

This project can be run with the following steps: First, get the git clone of the project files. Then, in the shell, get into the "server" folder, and run the command "node ./app.js". This will start the server, and the clients can take the host computer's IPv4 address as in a browser to connect to the project. There is a single audio bar, which includes a play/pause button, a seeker bar, and volume bar. Any changes to the play/pause button or seeker bar will be simultaneously changed to all other clients on the site.