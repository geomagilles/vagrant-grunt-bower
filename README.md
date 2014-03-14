vagrant-grunt-bower
===================

Vagrant configuration with grunt, bower, php, mysql included.

Prerequisites
=============
Please install 
- Vagrant: http://www.vagrantup.com/downloads
- VirtualBox: https://www.virtualbox.org/wiki/Downloads

Installation
============

Clone this repository:
----------------------
````
git clone https://github.com/geomagilles/vagrant-grunt-bower.git
``````

Run vagrant:
------------
````
cd vagrant-grunt-bower
vagrant up
````
Have a coffee - At the end you should access a simple html page at http://localhost:8080

If you want to enter the virtual machine:
````
vagrant ssh
cd /vagrant
````
Grunt and Bower are ready to be used.

Laravel New Installation (optional):
------------------------------------
````
vagrant ssh
cd /vagrant
git clone --no-checkout https://github.com/laravel/laravel.git ./laravel
mv laravel/.git www/.
rmdir laravel
cd www
git reset --hard HEAD
rm public/index.html
composer install
````
