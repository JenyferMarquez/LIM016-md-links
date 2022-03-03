# Mq-Links 🔗


***

## 1. About The Project ✒️

This module extracts all the links that are in a Markdown file, it has the following options:

--validate: Check if there are valid or broken links
--stats: Shows a statistic of the total number of links and how many of them are unique.
--validate --stats: Adds to the statistics the total amount of broken links.



## 2. Getting Started 🚀


### Installation 🔧
Install NPM packages


### Usage


#### Case 1: 

We will use the md-links command to get the links of the path.

`mq-links <path-to-file>`

[![api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-15-55-39-2.png](https://i.postimg.cc/2yBhkLKW/api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-15-55-39-2.png)](https://postimg.cc/PvTPKJhf)


#### Case 2: 
```sh
mq-links <path-to-file> --validate 
                 o 
mq-links <path-to-file> --v 
```
[![api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-16-23-42-2.png](https://i.postimg.cc/c12wCTZ8/api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-16-23-42-2.png)](https://postimg.cc/3WjdbXkK)

#### Case 3: 
```sh
  mq-links <path-to-file> --stats
                  o 
  mq-links <path-to-file> --s 
```

[![api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-16-33-04-2.png](https://i.postimg.cc/gkbHcdvZ/api-js-LIM016-md-links-Visual-Studio-Code-28-02-2022-16-33-04-2.png)](https://postimg.cc/gr4Z4Ctz)

#### Case 4: 

```sh 
mq-links <path-to-file> --stats --validate            
                   or 
mq-links <path-to-file> --validate --stats
```

[![cli-js-LIM016-md-links-Visual-Studio-Code-3-03-2022-02-36-32-2.png](https://i.postimg.cc/ZKw9Qkm2/cli-js-LIM016-md-links-Visual-Studio-Code-3-03-2022-02-36-32-2.png)](https://postimg.cc/mtF2c5ty)



#### Case 5: 

```sh 
md-links --help
```

[![README-md-LIM016-md-links-Visual-Studio-Code-3-03-2022-02-39-55-2.png](https://i.postimg.cc/63HJXhQW/README-md-LIM016-md-links-Visual-Studio-Code-3-03-2022-02-39-55-2.png)](https://postimg.cc/5YFk5LvT)


## 2. Flowchart

[![flujo.png](https://i.postimg.cc/1Rqjn19P/flujo.png)](https://postimg.cc/c6dm2jg5)

 [![flujo-drawio-png-LIM016-md-links-Visual-Studio-Code-28-02-2022-12-48-55-2.png](https://i.postimg.cc/xCgyHqNc/flujo-drawio-png-LIM016-md-links-Visual-Studio-Code-28-02-2022-12-48-55-2.png)](https://postimg.cc/PppwnX4j)


 ## 3. Built with 🛠️

- Javascript.
- Node.js.
-  Npm.
- Jest.
- ESlint.

Dependencies:
- node-fetch.
- marked.
- jsdom.
- figlet.
- chalk.














