# skylark-jquery

The  skylark extension library providing APIs that are fully compatible with jquery

## Introduction

Jquery is a most popular javascript library, with a large number of plug-ins and  application using jquery.  
The optional skylark.jquery library is based on the skylark/query module, providing APIs that are fully compatible with jquery,and the codes is simpler and more productive, JQuery plugins and applications can run directly on skylark without jquery.

## Dependences

| Project | Status | Description |
| :--- | :--- | :--- |
| [skylark-langx](https://github.com/skylarklangx/skylark-langx) |  | Javascript language extension library |
| [skylark-utils](https://github.com/skylarkutils/skylark-utils) |  | An Universal HTML5 Javascript Library |
| [skylark-utils-dom](https://github.com/skylarkutils/skylark-utils-dom) |  | An Universal DOM Utility Library |

## Differentbuilds

builds are in the directory dist.

|  | build | Description |
| :--- | :--- | :--- |
| full | skylark-jquery-all.js | included dependences |
| only | skylark-jquery.js | not included dependences |
| full（development） | uncompressed/skylark-jquery-all.js | includedde pendences |
| only（development） | uncompressed/skylark-jquery.js | not included dependences |

Please use the"full"version when using this library alone,and use the "only" version when using other skylark libraries.

## Installation

You can get the latest version in many different ways:

* Downloading
  [a ZIP file from master](https://github.com/skylarkutils/skylark-jquery/archive/master.zip)
* Cloning using Git:
  `git clone `[`https://github.com/skylarkutils/skylark-jquery.git`](https://github.com/skylarkutils/skylark-jquery.git)
* Installing via NPM:
  `npm install https://github.com/skylarkutils/skylark-jqueryr.git#master --save`

## Examples

please refer to the examples:

* Bootstrap-Form-Builder-minikomi  
  [http://examples.skylarkjs.org/skylark-jquery/Bootstrap-Form-Builder-minikomi/index-jquery.html](http://examples.skylarkjs.org/skylark-jquery/Bootstrap-Form-Builder-minikomi/index-jquery.html)   the version using original jquery  
  [http://examples.skylarkjs.org/skylark-jquery/Bootstrap-Form-Builder-minikomi/index-skylark.html](http://examples.skylarkjs.org/skylark-jquery/Bootstrap-Form-Builder-minikomi/index-skylark.html)  the version using skylark-jquery
* etch  
  [http://examples.skylarkjs.org/skylark-jquery/etch/demo/demo.jquery.html](http://examples.skylarkjs.org/skylark-jquery/etch/demo/demo.jquery.html)   the version using original jquery  
  [http://examples.skylarkjs.org/skylark-jquery/etch/demo/demo.skylark-jquery.html](http://examples.skylarkjs.org/skylark-jquery/etch/demo/demo.skylark-jquery.html) the version using skylark-jquery
* grapesjs  
  [http://examples.skylarkjs.org/skylark-jquery/grapesjs/index.jquery.html](http://examples.skylarkjs.org/skylark-jquery/grapesjs/index.jquery.html)   the version using original jquery  
  [http://examples.skylarkjs.org/skylark-jquery/grapesjs/index.skylark-jquery.html](http://examples.skylarkjs.org/skylark-jquery/grapesjs/index.skylark-jquery.html) the version using skylark-jquery
* jstinker  
  [http://examples.skylarkjs.org/skylark-jquery/jstinker/index.jquery.html](http://examples.skylarkjs.org/skylark-jquery/jstinker/index.jquery.html)   the version using original jquery  
  [http://examples.skylarkjs.org/skylark-jquery/jstinker/index.skyalrk-jquery.html](http://examples.skylarkjs.org/skylark-jquery/jstinker/index.skyalrk-jquery.html) the version using skylark-jquery

## Bugs and feature requests

Have a bug or a feature request? Please first search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/skylarkjs/skylark-jquery/issues/new).

## Building

* Ensure that Node.js is installed.
* Run npm install [https://github.com/skylarkjs/skylark-bundle-cli.git](https://github.com/skylarkjs/skylark-bundle-cli.git) -g to ensure sbundle is installed.
* Run npm install to ensure the required dependencies are installed.
* Run npm run build. The builds will be placed in the dist/ directory.

## License

The code is released under the [MIT License](https://github.com/skylarkjs/skylark-jquery/blob/master/LICENSE).
