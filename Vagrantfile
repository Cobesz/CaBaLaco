Vagrant.configure("2") do |config|

config.vm.provider "virtualbox" do |v|
  v.memory = 1024
  v.cpus = 2
end

config.vm.provision "shell", inline: <<-SHELL
  #Installing dependancies
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
    sudo apt-get install -y nodejs
    npm install -g create-react-app
    cd /home/ubuntu/webroot
    create-react-app cabalaco

    cd cabalaco
    npm start
  SHELL

  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/xenial64"

  # Forward guest port 80 to host port 8888 and name mapping
  config.vm.network :forwarded_port, guest: 3000, host: 8888

  config.vm.synced_folder "webroot/", "/home/ubuntu/webroot/", :owner => "www-data", type: "virtualbox"
end
