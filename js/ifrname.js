// JavaScript Document

   function iFrameHeight() {

        var ifm= document.getElementById("iframepage");

        var subWeb = document.frames ? document.frames["iframepage"].document :

ifm.contentDocument;

            if(ifm != null && subWeb != null) {

            ifm.height = subWeb.body.scrollHeight;

            }

    }


 function open_yw()
 {
	  document.getElementById("service_div").style.display="block";
	  document.getElementById("service_div2").style.display="none";
	  document.getElementById("service_lj").innerHTML=' <b id="b" onclick="open_yw()">运营维护</b> <b onclick="open_tg()">推广传播</b>'
}

 function open_tg()
 {
	  document.getElementById("service_div2").style.display="block";
	  document.getElementById("service_div").style.display="none";
	  document.getElementById("service_lj").innerHTML=' <b onclick="open_yw()">运营维护</b> <b  id="b" onclick="open_tg()">推广传播</b>'
}
	
