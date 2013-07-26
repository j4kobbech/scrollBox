scrollBox
=========
A tiny jQuery plugin to show an element while scrolling.

###Description:
Let's say you want to show a small information in-page telling the user which page/section they are currently on while scrolling through a web document. Then this little plugin might help you.

###Installation:
Just include the jquery.scrollBox.js in your html (after jQuery) e.g. like this:
```
<html>
<head>
  <script src="jquery.min.js"></script>
  <script src="jquery.scrollBox.js"></script>
</head>
<body>
  ...
</body>
</html>
```

###Usage:
Run the plugin on the element you want to show/hide while scrolling. Works best if the element is not displayed to begin with (display: none;)

Simple version:
```
<div id="my-div"><div>
<script>
  $('#my-div').scrollBox();
</script>
```

Advanced (with options) version:
```
<div id="my-div"><div>
<script>
  var options = {
    msBeforeShow: 300,  //milliseconds before the element is shown after you start scrolling
    msBeforeHide: 1000, //milliseconds before the element is hidden after you stop scrolling
    msfadeIn: 300,      //fade-in speed in milliseconds
    msfadeOut: 300      //fade-out speed in milliseconds
  };
  $('#my-div').scrollBox(options);
</script>
```


