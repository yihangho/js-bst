#JavaScript binary search tree
This is a library for JavaScript that implements the `map` and `set` standard library from C++. This library is still under development and more features and methods will be added from time to time.

##How to install
1. Download this repository by clicking on "Download ZIP".
2. Unzip the downloaded file.
3. Include `bst.js` in any HTML file that you are working on:  

	```html
	<script src="path/to/bst.js"></script>
	```
4. Create instances of `BST` in your JavaScript source file:  

	```javascript
	var tree = new BST();
	```

##API
1. Initialization:  

	```javascript
	var tree = new BST();
	```
2. Insert:  

	```javascript
	tree.insert("pi", 3.1415); //This will insert 3.1415 into the tree with "pi" as its key.
	tree.insert("visited"); //Value is optional. When value is omitted, it is assumed to be boolean false.
	tree.insert(10); //Key can be of different data types.
	tree.insert("10", "I am a string!"); //This is different from the previous line.
	```
3. Search:  

	```javascript
	tree.search("pi"); //true
	tree.search("visited"); //true
	tree.search(100); // false
	```
4. Get:  

	```javascript
	tree.get("pi"); //3.1415
	tree.get(10); //false
	tree.get("10"); //"I am a string!"
	tree.get(100); //undefined
	```