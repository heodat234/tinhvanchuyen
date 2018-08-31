# Ship Plugin
Jquery plugin preview image before upload
# Installation:
- Install via composer: composer require heodat234/tinhvanchuyen
- Add link to jpreview javascript and css file

```
<link rel="stylesheet" type="text/css" href="path/to/phiship.css"/>
<script src="path/to/jquery.min.js"></script>
<script type="text/javascript" src="path/to/phiship.jquery.js"></script>
  ```
  
# Usage:

```
$(document).ready(function(){
    jQuery("#popup1").popup();
    // $("#popup1").popup({title:"Abc"});
    // $("#popup1").popup({title:"Phí vận chuyển", width:"900px",height:"500px"});

    $("button").click(function(e) {
        var popupid=this.getAttribute("popup");
        $("#"+popupid).openPopup();
    });
    
});
```

And HTML markup:

```
<button popup="popup1">Open Popup1</button>
<div id="popup1"></div>
```
