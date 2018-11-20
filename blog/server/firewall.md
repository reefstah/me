# Home Server Firewall

Setting up firewall only allowing vpn traffic to come trought with the help of
[archlinux vpn docs](https://wiki.archlinux.org/index.php/OpenVPN#Firewall_configuration)

Disabling default Fedora firewall in favour of a simpler one

```sh
echo 'Disabling firewalld'

sudo systemctl disable firewalld.service
```

Installing ufw
```sh
echo 'Installing ufw'

sudo dnf install ufw -y
sudo dnf enable ufw
```

```sh
echo 'Setting rules'

# Default policies
sudo ufw default deny incoming
sudo ufw default deny outgoing

# Openvpn interface (adjust interface accordingly to your configuration)
sudo ufw allow in on tun0
sudo ufw allow out on tun0

# Local Network (adjust ip accordingly to your configuration)
sudo ufw allow in on eno1 from 192.168.1.0/24
sudo ufw allow out on eno1 to 192.168.1.0/24

# Openvpn (adjust port accordingly to your configuration)
sudo ufw allow in on eno1 from any port 1194
sudo ufw allow out on eno1 to any port 1194
```

