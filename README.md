# SD Activity LED

Open: `/boot/config.txt` and add `enable_uart=1` and then connect positive to `GPIO8`

# Power LED

Open: `/boot/config.txt` and add `dtoverlay=pi3-act-led,gpio=13` and then connect positive to `GPIO13`

# Power Switch

- Install `NVM` with `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`
- Need to install: `sudo apt-get install pigpio`
- Install `NodeJS` with `nvm install node`
- We need the `root` user to see `npm/node`:
  ```n=$(which node); \
  n=${n%/bin/node}; \
  chmod -R 755 $n/bin/*; \
  sudo cp -r $n/{bin,lib,share} /usr/local
  ```
- Move to the project and run: `npm i`
- Afterwards we run `npm run compile`, this will create a `dist` folder with the executable code.

## Service

- Modify `NodeJS` & `/dist/index.js` paths
  - `which node` can be used to get the path
- Place `power.sercvice` at `/etc/systemd/system/power.service`
- Start the sercice with `systemctl start power`
- Enable service with `sudo systemctl enable power`
