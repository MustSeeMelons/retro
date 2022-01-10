# SD Activity LED

Open: `/boot/config.txt` and add `enable_uart=1` and then connect positive to `GPIO8`

# Power LED

Open: `/boot/config.txt` and add `dtoverlay=pi3-act-led,gpio=13` as well as `dtparam=act_led_trigger=heartbeat` and then connect positive to `GPIO13`

# Power Switch

Need to install: `sudo apt-get install pigpio`

## Service

- `node which`

- Place `power.sercvice` at `/etc/systemd/system/power.service`
- Start the sercice with `systemctl start power`
- Enable service with `sudo systemctl enable power`
