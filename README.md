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

Then enter the virtual machine and locally install grunt plug-ins:
````
vagrant ssh
cd /vagrant
npm install grunt
npm install grunt-contrib-copy
npm install grunt-contrib-concat
npm install grunt-contrib-uglify
npm install grunt-contrib-watch
npm install grunt-contrib-cssmin
npm install grunt-contrib-imagemin
npm install grunt-phpunit
````
Grunt and Bower are now ready to be used.

Laravel New Install (optional):
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
